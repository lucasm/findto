import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    query: { country },
  } = req

  if (country) {
    let url =
      'https://rss.applemarketingtools.com/api/v2/' +
      String(country).toLowerCase() +
      '/apps/top-free/39/apps.json'

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        data.feed.results.forEach((item) => {
          a.push({
            title: item.name,
            image: item.artworkUrl100,
          })
        })

        const x: ITrends = {
          credits_title: 'App Store',
          credits_url: 'https://www.apple.com/app-store/',
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
