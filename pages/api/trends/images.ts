import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../types/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url =
    'https://api.unsplash.com/topics?client_id=55ceb7028ecac1aec9e7f8f2ca92d9295d42081a7658cd24aff447e0a0622efc&per_page=18&order_by=featured'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      for (var i in data) {
        a.push({
          title: data[i].title,
          url: data[i].links.html,
        })
      }

      const x: ITrends = {
        credits_title: 'Unsplash',
        credits_url: 'https://unsplash.com',
        data: a,
      }

      res.status(200).send(x)
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
