import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    query: { latitude, longitude, language },
  } = req

  if (!latitude || !longitude || !language) {
    return res.status(400).json({
      message:
        'Missing parameters: latitude, longitude, and language are required.',
      latitude,
      longitude,
      language,
    })
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&language=${language}&radius=5000&rankby=prominence&key=${process.env.NEXT_PUBLIC_API_GOOGLEMAPS}`

  try {
    const { data } = await axios.get(url)

    const trends = data.results.map((item: any) => ({
      title: item.name,
      url: `https://www.google.com/maps/place/?q=place_id:${item.place_id}`,
      image: item.icon,
    }))

    const responsePayload: ITrends = {
      credits_title: 'Google Maps',
      credits_url: 'https://maps.google.com',
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
