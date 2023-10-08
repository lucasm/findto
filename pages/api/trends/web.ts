import Parser from 'rss-parser'
const parser = new Parser({
  customFields: {
    item: [['ht:picture', 'picture']],
  },
})
import { ITrends } from '../../../interfaces/trends'

let userCountry: string

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
        image: item.picture,
      })
    })

    const x: ITrends = {
      credits_title: 'Google',
      credits_url: 'https://google.com/',
      data: a,
    }
    return callback(x)
  })
}

export default function endpoint(request, response) {
  // set query parameters
  const {
    query: { country },
  } = request

  if (country) {
    userCountry = country
    getData(function (data) {
      response.status(200).send(data)
    })
  } else {
    response.status(405).end('Error: missing parameter COUNTRY: ' + country)
  }
}
