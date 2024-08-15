import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { country },
  } = req

  if (!country) {
    return res.status(400).json({ message: 'Missing parameter COUNTRY_CODE' })
  }

  const url = `https://rss.applemarketingtools.com/api/v2/${country}/music/most-played/24/albums.json`

  try {
    const { data } = await axios.get(url)

    const trends = data.feed.results.map((item: any) => ({
      title: `${item.artistName} - ${item.name}`,
      image: item.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg'),
    }))

    const responsePayload: ITrends = {
      credits_title: 'Apple Music',
      credits_url: 'https://www.apple.com/apple-music/',
      data: trends,
    }

    res.status(200).json(responsePayload)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({
      message: 'Error fetching data',
      error: error,
    })
  }
}

// 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=12&api_key=' +
// process.env.NEXT_PUBLIC_API_LASTFM +
// '&format=json'

// for (var i in data.feed.results) {
//   a.push({
//     title: data.tracks.track[i].artist.name + ': ' + data.tracks.track[i].name,
//   })
// }
