import type { NextApiRequest, NextApiResponse } from 'next/types'
import Parser from 'rss-parser'

import { ITrends } from '../../../interfaces/trends'

const parser = new Parser({
  customFields: {
    item: [['ht:picture', 'picture']],
  },
})

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  let {
    query: { country },
  } = req

  if (!country) {
    return res
      .status(400)
      .json({ message: 'Missing parameter: COUNTRY is required.' })
  }

  // if China is requested, use Hong Kong instead
  if (country === 'CN') {
    country = 'HK'
  }

  const url = `https://trends.google.com/trending/rss?geo=${country}`

  try {
    const data = await parser.parseURL(url)
    const trends = data.items.map((item: { title?: string }) => ({
      //picture: string
      title: item.title || 'No title',
      //   image: item.picture,
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
