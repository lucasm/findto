import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends, ITrendsItem } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // parameters
  const {
    query: { country },
  } = req

  if (country) {
    if (country === 'BR') {
      const mockProductsBrazil: ITrends = {
        credits_title: 'Amazon',
        credits_url: 'https://amzn.to/3Oug5xg',
        data: [
          {
            title: 'Fone de Ouvido Philips com Microfone',
            url: 'https://amzn.to/47FjFLi',
            image: 'https://m.media-amazon.com/images/I/51+W7A115SL._AC_SX679_.jpg',
          },
          {
            title: 'Echo Dot 5ª Geração Alexa',
            url: 'https://amzn.to/45jAJFL',
            image: 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg',
          },
          {
            title: 'Fire TV Stick Streaming Full HD',
            url: 'https://amzn.to/44YKNnK',
            image: 'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
          },
          {
            title: 'Tablet Samsung Galaxy Tab S6 Lite',
            url: 'https://amzn.to/3vFcLIO',
            image: 'https://m.media-amazon.com/images/I/710SVJBnw+L._AC_SX679_.jpg',
          },
          {
            title: 'Xiaomi Redmi Note 12 128GB',
            url: 'https://amzn.to/3tn3FiU',
            image: 'https://m.media-amazon.com/images/I/61GrsBwpM5L._AC_SX679_.jpg',
          },
          {
            title: 'Mouse Logitech Lift Vertical Ergonômico',
            url: 'https://amzn.to/47H09hN',
            image: 'https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SX679_.jpg',
          },
          {
            title: 'JBL Go 3',
            url: 'https://amzn.to/43CrM9C',
            image: 'https://m.media-amazon.com/images/I/61iD9jlBlqL.__AC_SX300_SY300_QL70_ML2_.jpg',
          },
          {
            title: 'Logitech MX Keys Mini',
            url: 'https://amzn.to/3OwLrDM',
            image: 'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
          },
          {
            title: 'Echo Pop Alexa',
            url: 'https://amzn.to/3O9OO23',
            image: 'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX679_.jpg',
          },
          {
            title: 'JBL Boombox 3',
            url: 'https://amzn.to/43H0sqO',
            image: 'https://m.media-amazon.com/images/I/51iOUVHcSxL.__AC_SX300_SY300_QL70_ML2_.jpg',
          },
          {
            title: 'Apple iPhone 13 128GB',
            url: 'https://amzn.to/3rKdF4O',
            image: 'https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX679_.jpg',
          },
          {
            title: 'Kindle 11 Leitor eBooks',
            url: 'https://amzn.to/3QdXiaV',
            image: 'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg',
          },
          {
            title: 'Apple MacBook Air M2 15`3 8GB 256GB',
            url: 'https://amzn.to/3rMaLg5',
            image: 'https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_ML2_.jpg',
          },
          {
            title: 'Mini Projetor Portatil 5G WiFi Bluetooth 5.0 4K 1080P Full HD',
            url: 'https://amzn.to/3F4zAHn',
            image: 'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
          },
          {
            title: 'Apple AirPods Pro 2',
            url: 'https://amzn.to/3Dw6uA0',
            image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
          },
          {
            title: 'Smart Lâmpada Positivo WiFi Bluetooth RGB LED Alexa e Google',
            url: 'https://amzn.to/3U6Btfy',
            image: 'https://m.media-amazon.com/images/I/511R3odrRjL._AC_SX679_.jpg',
          },
          {
            title: 'Air Fryer (fritadeira sem óleo) Mondial 4L Inox',
            url: 'https://amzn.to/47D7cbi',
            image: 'https://m.media-amazon.com/images/I/71zeBuMlz2L._AC_SY879_.jpg',
          },
        ],
      }

      res.status(200).send(mockProductsBrazil)
    } else {
      let url =
        'https://api.bestbuy.com/beta/products/trendingViewed?apiKey=' +
        process.env.NEXT_PUBLIC_API_BESTBUY

      await axios
        .get(url)
        .then(({ data }) => {
          var a = []

          for (var i in data.results) {
            a.push({
              title: data.results[i]?.names?.title,
              url: data.results[i]?.links?.web,
              image: data.results[i]?.images?.standard,
            })
          }

          const x: ITrends = {
            credits_title: 'Best Buy',
            credits_url: 'https://bestbuy.com/',
            data: a,
          }

          res.status(200).send(x)
        })
        .catch(({ err }) => {
          res.status(400).json({ err })
        })
    }
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
