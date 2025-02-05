import type { NextApiRequest, NextApiResponse } from 'next'
import { ITrends } from '@/interfaces/trends'
import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    item: [
      ['media:group', 'mediaGroup'], // Captura o media:group que contém media:thumbnail
      ['yt:videoId', 'ytVideoId'], // Captura o yt:videoId
    ],
  },
})

interface IVideo {
  title: string
  image: string
  url: string
}

async function getYouTubeVideos(urls: string[]): Promise<ITrends> {
  const videos: IVideo[] = []

  for (const url of urls) {
    try {
      const data = await parser.parseURL(
        'https://www.youtube.com/feeds/videos.xml?channel_id=' + url
      ) // Fetch condicionado à URL
      if (data.items.length > 0) {
        const firstItem = data.items[0]

        // Extrai a URL da thumbnail de media:thumbnail
        const thumbnailUrl =
          firstItem.mediaGroup['media:thumbnail']?.[0]?.$.url || ''

        videos.push({
          title: firstItem.title || '',
          image: thumbnailUrl || firstItem.enclosure?.url || '', // fallback para imagem
          url: firstItem.ytVideoId || '',
        })
      }
    } catch (error) {
      console.error('Error fetching YouTube feed:', error)
    }
  }

  return {
    data: videos,
  }
}

export default async function endpoint(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { channels } = request.query

  if (!channels) {
    return response.status(400).send('Error: missing *channels* parameter')
  }

  // Divide o parâmetro `channelsIds` por vírgulas
  const channelsArray = typeof channels === 'string' ? channels.split(',') : []

  try {
    const data = await getYouTubeVideos(channelsArray)
    response.status(200).send(data)
  } catch (error) {
    console.log('Error fetching YouTube videos:', error)
    response.status(500).send('Error fetching YouTube data')
  }
}
