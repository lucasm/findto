import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { country } = req.query

  if (!country) {
    res.status(400).end('Missing parameters COUNTRY_CODE - ' + country)
    return
  }

  if (country === 'BR') {
    const mockProductsBrazil: ITrends = {
      credits_title: 'Amazon',
      credits_url: 'https://amzn.to/3Oug5xg',
      data: [
        {
          title: 'Caixa de Som Bluetooth JBL Go 3',
          url: 'https://amzn.to/3UwIq8U',
          image:
            'https://m.media-amazon.com/images/I/71E9GeEQE0L.__AC_SX300_SY300_QL70_ML2_.jpg',
        },
        {
          title:
            'Mini Projetor Portatil Wi-Fi Bluetooth 5.0 Full HD 4K Android',
          url: 'https://amzn.to/4ecYYty',
          image:
            'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
        },
        {
          title: 'Caixa de Som Inteligente Echo Dot 5 Alexa',
          url: 'https://amzn.to/45jAJFL',
          image:
            'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg',
        },
        {
          title: 'Kindle 11 Leitor de eBooks',
          url: 'https://amzn.to/3QdXiaV',
          image:
            'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg',
        },
        {
          title: 'Apple iPhone 14 128GB Meia-Noite',
          url: 'https://amzn.to/3UBtXZg',
          image:
            'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SX679_.jpg',
        },
        {
          title: 'Xiaomi Redmi Note 13 256GB 120Hz AMOLED',
          url: 'https://amzn.to/3YtwjL7',
          image:
            'https://m.media-amazon.com/images/I/51jPglxBSfL._AC_SX679_.jpg',
        },
        {
          title: 'Smart Lâmpada Positivo Wi-Fi Bluetooth Colorida RGB LED',
          url: 'https://amzn.to/3U6Btfy',
          image:
            'https://m.media-amazon.com/images/I/511R3odrRjL._AC_SX679_.jpg',
        },
        {
          title: 'Mondial Air Fryer Fritadeira Sem Óleo 4L Inox',
          url: 'https://amzn.to/47D7cbi',
          image:
            'https://m.media-amazon.com/images/I/71zeBuMlz2L._AC_SY879_.jpg',
        },
        {
          title: 'Smart TV 50" 4K Philips Google TV Dolby Vision/Atmos',
          url: 'https://amzn.to/40u7Tn8',
          image:
            'https://m.media-amazon.com/images/I/71efj0Th5TL._AC_SX679_.jpg',
        },
        {
          title: 'Smart TV 50" 4K Samsung Crystal UHD Gaming Hub',
          url: 'https://amzn.to/3UAFCaG',
          image:
            'https://m.media-amazon.com/images/I/51O+lnoMUUL._AC_SX679_.jpg',
        },
        {
          title: 'Tablet Samsung Galaxy Tab S6 Lite',
          url: 'https://amzn.to/3vFcLIO',
          image:
            'https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg',
        },
        {
          title:
            'Teclado Logitech MX Keys Mini Bluetooth USB Bateria Recarregável',
          url: 'https://amzn.to/3OwLrDM',
          image:
            'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
        },
        {
          title: 'Apple iPad 10 Geração 10,9" A14 Bionic 64GB Wi-Fi 6',
          url: 'https://amzn.to/4hzkf3u',
          image:
            'https://m.media-amazon.com/images/I/41ou1glnIWL._AC_SX679_.jpg',
        },
        {
          title: 'Fone de Ouvido Philips com Microfone',
          url: 'https://amzn.to/47FjFLi',
          image:
            'https://m.media-amazon.com/images/I/51+W7A115SL._AC_SX679_.jpg',
        },
        {
          title: 'Fire TV Stick Streaming Full HD',
          url: 'https://amzn.to/44YKNnK',
          image:
            'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
        },
        {
          title: 'Mouse Logitech Ergonômico Lift Vertical',
          url: 'https://amzn.to/47H09hN',
          image:
            'https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SX679_.jpg',
        },
        {
          title: 'Apple AirPods Pro 2',
          url: 'https://amzn.to/3Dw6uA0',
          image:
            'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
        },
        {
          title:
            'Fone de Ouvido Headset Gamer Havit Fuxi-H3 Black Bluetooth USB-C, Cabo 3,5mm',
          url: 'https://amzn.to/3ArqWUM',
          image:
            'https://m.media-amazon.com/images/I/71g1gS6qGmL._AC_SX679_.jpg',
        },
        {
          title: 'Caixa de Som Bluetooth JBL Charge 5 À Prova Dágua e Poeira',
          url: 'https://amzn.to/40xmazK',
          image:
            'https://m.media-amazon.com/images/I/719nhErutkL._AC_SX679_.jpg',
        },
        {
          title:
            'Apple MacBook Air M1 13" 8GB 256GB CPU 8-core e GPU 7‑core Cinza Espacial',
          url: 'https://amzn.to/4fsoaxi',
          image:
            'https://m.media-amazon.com/images/I/41J9j6iVDvS._AC_SX679_.jpg',
        },
      ],
    }

    res.status(200).send(mockProductsBrazil)
    return
  }

  const url = `https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${process.env.NEXT_PUBLIC_API_BESTBUY}`

  try {
    const { data } = await axios.get(url)
    const trends: ITrends = {
      credits_title: 'Best Buy',
      credits_url: 'https://bestbuy.com/',
      data: data.results.map(
        (item: {
          names: { title: string }
          links: { web: string }
          images: { standard: string }
        }) => ({
          title: item?.names?.title,
          url: item?.links?.web,
          image: item?.images?.standard,
        })
      ),
    }

    res.status(200).send(trends)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({
      message: 'Error fetching data.',
      error: error,
    })
  }
}
