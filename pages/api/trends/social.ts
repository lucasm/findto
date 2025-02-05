import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'
import { getWoeid } from '../../../utils/woeid'

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
      .json({ message: 'Parâmetro COUNTRY_CODE está ausente' })
  }

  const countryWoeid = getWoeid(country as string)

  try {
    const { data } = await axios.get(
      `https://api.twitter.com/1.1/trends/place.json?id=${countryWoeid}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TWITTER}`,
        },
      }
    )

    const trends =
      data[0]?.trends.map((item: { name: string }) => ({
        title: item.name,
      })) || []

    const responsePayload: ITrends = {
      credits_title: 'X',
      credits_url: 'https://x.com/',
      data: trends,
    }

    return res.status(200).json(responsePayload)
  } catch (error: unknown) {
    console.error('Error fetching data:', error)
    res.status(500).json({
      message: 'Error fetching data.',
      error: error,
    })
  }
}
