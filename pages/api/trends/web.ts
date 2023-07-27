import Parser from 'rss-parser'
const parser = new Parser()
import { ITrends } from '../../../interfaces/trends'

// parameters
let userCountry: string

// set values
function setValues(country: string) {
  if (country) {
    userCountry = country
  }
}

// fetch data
async function getData(callback): Promise<void> {
  // URL
  let url = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=' + userCountry

  // parse RSS
  await parser.parseURL(url, (error, data) => {
    if (error) {
      console.log(error)
      return callback([
        {
          title: 'Ops!',
          link: 'mailto:feedback@findto.app?subject=Findto%20Feedback&body=Error%20in%20backend%20of%20WebAPI',
        },
      ])
    }

    var a = []

    data.items.slice(0, 19).forEach((item) => {
      a.push({
        title: item.title,
      })
    })

    const x: ITrends = {
      credits_title: 'Google',
      credits_url: 'https://google.com/',
      data: a,
    }

    console.log(x)
    return callback(x)
  })
}

// serve endpoint
export default function endpoint(request, response) {
  // set query parameters
  const {
    query: { country },
  } = request

  if (country) {
    setValues(country)
    getData(function (data) {
      // success
      response.status(200).send(data)
    })
  } else {
    // error
    response.status(405).end('Error: missing parameter country: ' + country)
  }
}
