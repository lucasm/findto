import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url =
    'https://api.unsplash.com/topics?client_id=' +
    process.env.NEXT_PUBLIC_API_UNSPLASH +
    '&per_page=20&order_by=featured'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      for (var i in data) {
        a.push({
          title: data[i].title,
          // url: data[i].links.html,
          image: data[i].cover_photo.urls.small,
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
