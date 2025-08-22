import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

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
          title: 'Stanley copo térmico 473ml',
          url: 'https://amzn.to/41nOGlR',
          image:
            'https://m.media-amazon.com/images/I/418Jl3VqBPL._AC_SX679_.jpg',
        },
        {
          title: 'Air Fryer Forno Fritadeira Oven 12L Inox Mondial',
          url: 'https://amzn.to/4br0FUI',
          image:
            'https://m.media-amazon.com/images/I/51wwp25UBVL._AC_SX679_.jpg',
        },
        {
          title: 'JBL Go 3 caixa Bluetooth',
          url: 'https://amzn.to/3UwIq8U',
          image:
            'https://m.media-amazon.com/images/I/71E9GeEQE0L.__AC_SX300_SY300_QL70_ML2_.jpg',
        },

        {
          title: 'Echo Spot caixa Bluetooth com Alexa',
          url: 'https://amzn.to/4koI8w4',
          image:
            'https://m.media-amazon.com/images/I/71anQJA7UcL._AC_SX679_.jpg',
        },
        {
          title: 'Kindle 11 leitor de eBooks',
          url: 'https://amzn.to/3EW8qFK',
          image:
            'https://m.media-amazon.com/images/I/718jJRdvDsL._AC_SX679_.jpg',
        },
        {
          title: 'Apple iPhone 15 256GB Preto',
          url: 'https://amzn.to/41Ee6xh',
          image:
            'https://m.media-amazon.com/images/I/416MG51rNgL._AC_SX679_.jpg',
        },
        {
          title: 'Projetor portátil Wi-Fi Bluetooth 5.0 Full HD 4K Android',
          url: 'https://amzn.to/4ecYYty',
          image:
            'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
        },
        {
          title: 'Smartphone Redmi 14C 256GB',
          url: 'https://amzn.to/43hznhc',
          image:
            'https://m.media-amazon.com/images/I/517Cyi3xnhL._AC_SX679_.jpg',
        },
        {
          title: 'Lâmpada Smart  Wi-Fi Bluetooth RGB LED Positivo',
          url: 'https://amzn.to/3U6Btfy',
          image:
            'https://m.media-amazon.com/images/I/511R3odrRjL._AC_SX679_.jpg',
        },
        {
          title: 'Tablet Samsung Galaxy Tab S6 Lite',
          url: 'https://amzn.to/3vFcLIO',
          image:
            'https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg',
        },
        {
          title: 'Logitech Lift Vertical mouse Bluetooth ergonômico',
          url: 'https://amzn.to/47H09hN',
          image:
            'https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SX679_.jpg',
        },
        {
          title: 'Apple AirPods 4',
          url: 'https://amzn.to/3XoMPMt',
          image:
            'https://m.media-amazon.com/images/I/415J3RCvdKL._AC_SX679_.jpg',
        },
        {
          title: 'Apple iPad 10 10,9" A14 Wi-Fi 6',
          url: 'https://amzn.to/4hzkf3u',
          image:
            'https://m.media-amazon.com/images/I/41ou1glnIWL._AC_SX679_.jpg',
        },
        {
          title: 'Logitech MX Keys Mini teclado Bluetooth',
          url: 'https://amzn.to/3OwLrDM',
          image:
            'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
        },
        {
          title: 'Fire TV Stick streaming Full HD',
          url: 'https://amzn.to/44YKNnK',
          image:
            'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
        },
        {
          title: 'Philips 50" 4K Google TV Dolby Vision/Atmos',
          url: 'https://amzn.to/40u7Tn8',
          image:
            'https://m.media-amazon.com/images/I/71efj0Th5TL._AC_SX679_.jpg',
        },
        {
          title: 'Samsung Crystal UHD 50" 4K smart TV Gaming Hub',
          url: 'https://amzn.to/3UAFCaG',
          image:
            'https://m.media-amazon.com/images/I/51O+lnoMUUL._AC_SX679_.jpg',
        },
        {
          title: 'JBL Charge 5 caixa de som Bluetooth à prova dágua',
          url: 'https://amzn.to/40xmazK',
          image:
            'https://m.media-amazon.com/images/I/719nhErutkL._AC_SX679_.jpg',
        },
        {
          title: 'Havit Fuxi-H3 headset gamer Bluetooth USB-C 3,5mm',
          url: 'https://amzn.to/3ArqWUM',
          image:
            'https://m.media-amazon.com/images/I/71g1gS6qGmL._AC_SX679_.jpg',
        },
        {
          title: 'Apple MacBook Air M1 13" 256GB',
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
