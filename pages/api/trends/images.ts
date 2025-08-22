import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { ITrends } from '../../../interfaces/trends'

interface TrendItem {
  title: string
  image: string
}

export default async function endpoint(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const url =
    'https://api.unsplash.com/topics?client_id=' +
    process.env.NEXT_PUBLIC_API_UNSPLASH +
    '&per_page=20&order_by=featured'

  try {
    const { data } = await axios.get(url)

    const formattedData: TrendItem[] = data.map(
      (item: { title: string; cover_photo: { urls: { small: string } } }) => ({
        title: item.title,
        image: item.cover_photo?.urls?.small || '',
      })
    )

    const response: ITrends = {
      credits_title: 'Unsplash',
      credits_url: 'https://unsplash.com',
      data: formattedData,
    }

    res.status(200).json(response)
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Erro desconhecido'
    res.status(400).json({ error: errorMessage })
  }
}
