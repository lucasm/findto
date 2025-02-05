import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// Defina a interface para o retorno
interface IGame {
  title: string
  image: string
}

interface IGames {
  credits_title: string
  credits_url: string
  data: IGame[]
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const apiKey = process.env.NEXT_PUBLIC_API_RAWG
  const url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-metacritic&dates=2023-01-01,2024-10-30&page_size=24`

  try {
    const { data } = await axios.get(url)

    const games = data.results.map(
      (item: { name: string; background_image: string }) => ({
        title: item.name,
        image: item.background_image,
      })
    )

    const responsePayload: IGames = {
      credits_title: 'RAWG',
      credits_url: 'https://rawg.io/',
      data: games,
    }

    res.status(200).json(responsePayload)
  } catch (error) {
    console.error('Error fetching data from RAWG API:', error)
    res.status(500).json({
      message: 'Error fetching data from RAWG API',
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
