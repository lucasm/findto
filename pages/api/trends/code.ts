import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url = 'https://api.gitterapp.com'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      data.slice(0, 22).forEach((item) => {
        a.push({
          title: item.author + '/' + item.name,
          url: item.url,
          image: item.avatar,
        })
      })

      const x: ITrends = {
        credits_title: 'GitHub',
        credits_url: 'https://github.com/',
        data: a,
      }

      res.status(200).send(x)
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
