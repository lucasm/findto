import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const url =
    'https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&order=desc'

  // https://api.gitterapp.com

  try {
    const { data } = await axios.get(url)

    const trends = data.items.slice(0, 22).map(
      (item: {
        full_name: string
        html_url: string
        owner: {
          avatar_url: string
        }
      }) => ({
        title: `${item.full_name}`,
        url: item.html_url,
        image: item.owner.avatar_url,
      })
    )

    const responsePayload: ITrends = {
      credits_title: 'GitHub',
      credits_url: 'https://github.com/',
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
