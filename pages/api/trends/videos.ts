import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // parameters
  const {
    query: { country },
  } = req

  if (country) {
    // https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=' + country + '&maxResults=16&key=

    let url =
      'https://api.themoviedb.org/3/trending/all/day?language=' +
      country +
      '&api_key=' +
      process.env.NEXT_PUBLIC_API_TMDB

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        data.results.forEach((item) => {
          a.push({
            title: item.title ? item.title : item.name,
            image: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
          })
        })

        const x: ITrends = {
          credits_title: 'TMDB',
          credits_url: 'https://www.themoviedb.org/',
          data: a,
        }

        res.status(200).send(x)
      })
      .catch(({ err }) => {
        res.status(400).json({ err })
      })
  } else {
    res.status(405).end('Missing parameters COUNTRY_CODE - ' + country)
  }
}
