import type { NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(res: NextApiResponse): Promise<void> {
  const url = 'https://api.gitterapp.com'

  try {
    const { data } = await axios.get(url)

    const trends = data.slice(0, 22).map((item: any) => ({
      title: `${item.author}/${item.name}`,
      url: item.url,
      image: item.avatar,
    }))

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
