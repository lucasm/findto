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
      'https://api.adzuna.com/v1/api/jobs/' +
      String(country).toLowerCase() +
      '/categories?app_id=' +
      process.env.NEXT_PUBLIC_API_ADZUNA_ID +
      '&app_key=' +
      process.env.NEXT_PUBLIC_API_ADZUNA

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        data.results.slice(0, 22).forEach((item) => {
          a.push({
            title: item.label.replace('Vagas em ', ''),
          })
        })

        const x: ITrends = {
          credits_title: 'Adzuna',
          credits_url: 'https://adzuna.com',
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
