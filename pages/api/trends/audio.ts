import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    query: { country },
  } = req

  if (country) {
    let url =
      'https://rss.applemarketingtools.com/api/v2/' + country + '/music/most-played/24/albums.json'

    // 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=12&api_key=' +
    // process.env.NEXT_PUBLIC_API_LASTFM +
    // '&format=json'

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        // for (var i in data.feed.results) {
        //   a.push({
        //     title: data.tracks.track[i].artist.name + ': ' + data.tracks.track[i].name,
        //   })
        // }

        data.feed.results.forEach((item) => {
          a.push({
            title: item.artistName + ' - ' + item.name,
            image: item.artworkUrl100,
          })
        })

        const x: ITrends = {
          credits_title: 'Apple Music',
          credits_url: 'https://www.apple.com/apple-music/',
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
