import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  let url =
    'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=12&api_key=' +
    process.env.NEXT_API_KEY_LASTFM +
    '&format=json'

  await axios
    .get(url)
    .then(({ data }) => {
      var a = []

      for (var i in data.tracks.track) {
        a.push({
          title: data.tracks.track[i].artist.name + ': ' + data.tracks.track[i].name,
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
