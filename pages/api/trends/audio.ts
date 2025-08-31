import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { ITrends } from '../../../interfaces/trends'


// Whitelist of supported country codes (could be expanded as needed)
const ALLOWED_COUNTRY_CODES = [
  "us", "gb", "fr", "de", "jp", "ca", "au", "it", "es", "nl", "se", "ch", "no", "dk", "fi", "be", "nz", "br", "tr", "mx", "ru", "pl", "cn", "kr", "hk", "sg", "ie", "pt", "cz", "at", "gr", "hu", "il", "za", "ae", "sa", "ar", "cl", "co", "ec", "fi", "in", "my", "th", "vn"
  // ... add other supported codes as needed
];

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

  // Defensive normalization and validation
  const normCountry = (typeof country === 'string') ? country.toLowerCase() : '';
  if (!ALLOWED_COUNTRY_CODES.includes(normCountry)) {
    return res.status(400).json({ message: 'Invalid COUNTRY_CODE' });
  }

  const url = `https://rss.applemarketingtools.com/api/v2/${normCountry}/music/most-played/28/albums.json`

  try {
    const { data } = await axios.get(url)

    const trends = data.feed.results.map(
      (item: { artistName: string; name: string; artworkUrl100: string }) => ({
        title: `${item.artistName} - ${item.name}`,
        image: item.artworkUrl100.replace('100x100bb.jpg', '500x500bb.jpg'),
      })
    )

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
