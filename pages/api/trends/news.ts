import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // parameters
  const {
    query: { country },
  } = req

  if (country) {
    let url =
      'https://newsapi.org/v2/top-headlines?country=' +
      String(country).toLowerCase() +
      '&apiKey=' +
      process.env.NEXT_PUBLIC_API_NEWSAPI +
      '&pageSize=11'

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        data.articles.forEach((item) => {
          a.push({
            title: item.title.split('-')[0],
            url: item.url,
          })
        })

        const x: ITrends = {
          credits_title: 'News API',
          credits_url: 'https://newsapi.org/',
          data: a,
        }

        res.status(200).send(x)
      })
      .catch(({ err }) => {
        res.status(400).json({ err })
      })
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
