import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../types/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url = 'https://api.bestbuy.com/beta/products/trendingViewed?apiKey=eLpEVDgbhjtUB5paswTx21P0'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      for (var i in data.results) {
        a.push({
          title: data.results[i].names.title,
          url: data.results[i].links.html,
        })
      }

      const x: ITrends = {
        credits_title: 'Best Buy',
        credits_url: 'https://bestbuy.com',
        data: a,
      }

      res.status(200).send(x)
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
