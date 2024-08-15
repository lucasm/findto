import Parser from 'rss-parser'
import { ITrends } from '../../../interfaces/trends'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const parser = new Parser({
  customFields: {
    item: [['ht:picture', 'picture']],
  },
})

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
      .json({ message: 'Missing parameter: COUNTRY is required.' })
  }

  const url = `https://trends.google.com/trends/trendingsearches/daily/rss?geo=${country}`

  try {
    const data = await parser.parseURL(url)
    const trends = data.items.map((item: any) => ({
      title: item.title,
      image: item.picture,
    }))

    const responsePayload: ITrends = {
      credits_title: 'Google',
      credits_url: 'https://www.google.com/',
      data: trends,
    }

    res.status(200).json(responsePayload)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({
      message: 'Error fetching data.',
      error: error,
    })
  }
}
