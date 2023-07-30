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
            title: 'Apple AirPods Pro 2',
            url: 'https://amzn.to/3Dw6uA0',
          },
          { title: 'Echo Pop', url: 'https://amzn.to/3O9OO23' },
          { title: 'Fire TV Stick', url: 'https://amzn.to/44YKNnK' },
          { title: 'Echo Dot 3 Alexa', url: 'https://amzn.to/3q9cYBF' },
          { title: 'Logitech MX Keys Mini Bluetooth', url: 'https://amzn.to/3OwLrDM' },
          { title: 'Mouse Logitech Lift Vertical', url: 'https://amzn.to/452yAP6' },
          { title: 'JBL Go 3 Bluetooth', url: 'https://amzn.to/43CrM9C' },
          { title: 'JBL Boombox 3 Bluetooth', url: 'https://amzn.to/43H0sqO' },
          { title: 'Kindle 11', url: 'https://amzn.to/3QdXiaV' },
          { title: 'Apple iPhone 13 128 GB', url: 'https://amzn.to/3rKdF4O' },
          { title: 'Apple MacBook Air M2 15`3 8GB 256GB', url: 'https://amzn.to/3rMaLg5' },
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
