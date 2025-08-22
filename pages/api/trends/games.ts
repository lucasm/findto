import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

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
  //   const apiKey = process.env.NEXT_PUBLIC_API_RAWG
  //   const url = `https://api.rawg.io/api/games?key=${apiKey}&ordering=-metacritic&dates=2023-01-01,2024-10-30&page_size=24`

  const url =
    'https://store.steampowered.com/search/results/?filter=popularnew&json=1&page=1'

  function helperImageSteam(url: string) {
    const match = url.match(/\/apps\/(\d+)\//)
    const id = match && match[1] ? match[1] : ''
    const result =
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/' +
      id +
      '/header.jpg'

    return result
  }

  try {
    const { data } = await axios.get(url)

    const games = data.items.map((item: { name: string; logo: string }) => ({
      title: item.name,
      image: helperImageSteam(item.logo),
    }))

    const responsePayload: IGames = {
      credits_title: 'Steam',
      credits_url: 'https://store.steampowered.com/',
      data: games,
    }

    res.status(200).json(responsePayload)
  } catch (error) {
    console.error('Error fetching data from Games API:', error)
    res.status(500).json({
      message: 'Error fetching data from Games API',
      error: error instanceof Error ? error.message : String(error),
    })
  }
}
