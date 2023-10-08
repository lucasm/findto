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
            title: 'Headphone Philips Bluetooth',
            url: 'https://amzn.to/48IAK8U',
            image: 'https://m.media-amazon.com/images/I/91iWZmXLOAL._AC_SX679_.jpg',
          },
          {
            title: 'Apple AirPods Pro 2',
            url: 'https://amzn.to/3Dw6uA0',
            image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SX679_.jpg',
          },
          {
            title: 'Xiaomi Redmi Note 12 128GB',
            url: 'https://amzn.to/3tn3FiU',
            image: 'https://m.media-amazon.com/images/I/61GrsBwpM5L._AC_SX679_.jpg',
          },
          {
            title: 'Echo Dot 5 - Alexa',
            url: 'https://amzn.to/45jAJFL',
            image: 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg',
          },
          {
            title: 'JBL Go 3 Bluetooth',
            url: 'https://amzn.to/43CrM9C',
            image: 'https://m.media-amazon.com/images/I/61iD9jlBlqL.__AC_SX300_SY300_QL70_ML2_.jpg',
          },
          {
            title: 'Fire TV Stick - Streaming Full HD',
            url: 'https://amzn.to/44YKNnK',
            image: 'https://m.media-amazon.com/images/I/41IVtjpgH7L._AC_SX679_.jpg',
          },

          {
            title: 'Logitech MX Keys Mini',
            url: 'https://amzn.to/3OwLrDM',
            image: 'https://m.media-amazon.com/images/I/71JFKFPi1VL._AC_SX679_.jpg',
          },
          {
            title: 'Mouse Logitech Lift Vertical',
            url: 'https://amzn.to/452yAP6',
            image: 'https://m.media-amazon.com/images/I/61EWLRLgYQL.__AC_SX300_SY300_QL70_ML2_.jpg',
          },
          {
            title: 'Echo Pop - Smart Speaker Alexa',
            url: 'https://amzn.to/3O9OO23',
            image: 'https://m.media-amazon.com/images/I/61V5FRUgX8L._AC_SX679_.jpg',
          },
          {
            title: 'JBL Boombox 3 Bluetooth',
            url: 'https://amzn.to/43H0sqO',
            image: 'https://m.media-amazon.com/images/I/51iOUVHcSxL.__AC_SX300_SY300_QL70_ML2_.jpg',
          },
          {
            title: 'Apple iPhone 13 128 GB',
            url: 'https://amzn.to/3rKdF4O',
            image: 'https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SX679_.jpg',
          },
          {
            title: 'Kindle 11',
            url: 'https://amzn.to/3QdXiaV',
            image: 'https://m.media-amazon.com/images/I/71B1wzw1LkL._AC_SX679_.jpg',
          },
          {
            title: 'Apple MacBook Air M2 15`3 8GB 256GB',
            url: 'https://amzn.to/3rMaLg5',
            image: 'https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_ML2_.jpg',
          },
          {
            title: 'Mini Projetor Portatil 5G Wifi 6 Bluetooth 5.0 4K 1080P Full HD',
            url: 'https://amzn.to/3F4zAHn',
            image: 'https://m.media-amazon.com/images/I/5133wKaOqSL._AC_SX679_.jpg',
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
