import { NextApiRequest, NextApiResponse } from 'next/types'
import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'thumbnail'],
      ['media:content', 'mediaContent'],
    ],
  },
})

export default async function endpoint(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const {
    query: { country },
  } = request

  if (!country) {
    return response
      .status(400)
      .json({ message: 'Erro: Parâmetro COUNTRY ausente.' })
  }

  const getData = async (): Promise<{
    credits_title: string
    credits_url: string
    data: { title: string; image?: string; url: string }[]
  }> => {
    let url: string
    let credits: string[]

    switch (country) {
      case 'BR':
        url = 'https://valor.globo.com/rss/valor'
        credits = ['Valor Econômico', 'https://valor.globo.com/']
        break
      default:
        url = 'https://techcrunch.com/feed/'
        credits = ['TechCrunch', 'https://techcrunch.com/']
        break
    }

    try {
      const data = await parser.parseURL(url)
      const items = data.items.slice(0, 16).map((item) => ({
        title: item?.title || 'No title',
        image:
          country === 'BR'
            ? item?.thumbnail?.$?.url
            : item?.mediaContent?.$?.url,
        url: item?.link || '#',
      }))

      return {
        credits_title: credits[0],
        credits_url: credits[1],
        data: items,
      }
    } catch (error) {
      console.error('Erro ao buscar dados remotos:', error)
      return {
        credits_title: 'Erro',
        credits_url: '',
        data: [
          {
            title: 'Ops! Click to report error',
            image: undefined,
            url: 'mailto:feedback@findto.app?subject=Findto%20Feedback&body=Error%20in%20News%20API',
          },
        ],
      }
    }
  }

  try {
    const data = await getData()
    response.status(200).json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    response.status(500).json({
      message: 'Error fetching data',
      error: error,
    })
  }
}
