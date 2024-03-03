import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'
import woeid from 'woeid'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    query: { country },
  } = req

  if (country) {
    const countryWoeid = woeid.getWoeid(country)

    try {
      // Twitter API Trends/Place
      const response = await axios.get(
        'https://api.twitter.com/1.1/trends/place.json?id=' + countryWoeid.woeid,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TWITTER}`,
          },
        }
      )

      const { trends } = response.data[0]
      var a = []

      trends.forEach((item) => {
        a.push({
          title: item.name,
          // url: item.url,
        })
      })

      const x: ITrends = {
        credits_title: 'X',
        credits_url: 'https://twitter.com/',
        data: a,
      }

      // Retornar os dados como resposta da API
      res.status(200).json(x)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Erro ao buscar os trending topics do Twitter' })
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
