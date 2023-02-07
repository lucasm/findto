import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../types/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url =
    'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=12&api_key=3303c213411084e0e361b39f0a7a780c&format=json'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      for (var i in data.tracks.track) {
        a.push({
          title: data.tracks.track[i].name + ', ' + data.tracks.track[i].artist.name,
          url: data.tracks.track[i].url,
        })
      }

      const x: ITrends = {
        credits_title: 'Last.fm',
        credits_url: 'https://www.last.fm/',
        data: a,
      }

      res.status(200).send(x)
    })
    .catch(({ err }) => {
      res.status(400).json({ err })
    })
}
