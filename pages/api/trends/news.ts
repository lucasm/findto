import Parser from 'rss-parser'
const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'thumbnail'],
      ['media:content', 'content'],
    ],
  },
})
import { ITrends } from '../../../interfaces/trends'

export default function endpoint(request, response) {
  const {
    query: { country },
  } = request

  async function getData(callback): Promise<void> {
    let url: string
    let credits: string[]

    switch (country) {
      case 'BR':
        url = 'https://feeds.bbci.co.uk/portuguese/rss.xml'
        credits = ['BBC News Brasil', 'https://www.bbc.com/portuguese']
        break
      default:
        url = 'https://news.yahoo.com/rss'
        credits = ['Yahoo News', 'https://news.yahoo.com/']
        break
    }

    await parser.parseURL(url, (error, data) => {
      if (error) {
        console.log(error)
        return callback([
          {
            title: 'Ops! Click to report error',
            url: 'mailto:feedback@findto.app?subject=Findto%20Feedback&body=Error%20in%20NewsAPI',
          },
        ])
      }

      var a = []

      data.items.slice(0, 14).forEach((item) => {
        a.push({
          title: item?.title,
          image: country === 'BR' ? item?.thumbnail?.$?.url : item?.content?.$?.url,
          url: item?.link,
        })
      })

      return callback({
        credits_title: credits[0],
        credits_url: credits[1],
        data: a,
      })
    })
  }

  if (country) {
    getData(function (data) {
      response.status(200).send(data)
    })
  } else {
    response.status(405).end('Error: missing parameter COUNTRY: ' + country)
  }
}
