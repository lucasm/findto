import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { country },
  } = req

  if (!country) {
    return res
      .status(400)
      .json({ message: 'Missing parameter: COUNTRY_CODE is required.' })
  }

  const url = `https://api.themoviedb.org/3/trending/all/day?language=${country}&api_key=${process.env.NEXT_PUBLIC_API_TMDB}`

  try {
    const { data } = await axios.get(url)

    const trends = data.results.map(
      (item: { title?: string; name?: string; poster_path: string }) => ({
        title: item.title || item.name,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      })
    )

    const responsePayload: ITrends = {
      credits_title: 'TMDB',
      credits_url: 'https://www.themoviedb.org/',
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

// https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=' + country + '&maxResults=16&key=
