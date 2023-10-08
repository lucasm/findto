import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '../../../interfaces/trends'

export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const {
    query: { latitude, longitude, language },
  } = req

  if (latitude && longitude && language) {
    let url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      latitude +
      ',' +
      longitude +
      '&language=' +
      language +
      '&radius=1500&key=' +
      process.env.NEXT_PUBLIC_API_GOOGLEMAPS

    await axios
      .get(url)
      .then(({ data }) => {
        var a = []

        data.results.forEach((item) => {
          a.push({
            title: item.name,
            url: 'https://www.google.com/maps/place/?q=place_id:' + item.place_id,
            image: item.icon,
          })
        })

        const x: ITrends = {
          credits_title: 'Google Maps',
          credits_url: 'https://maps.google.com',
          data: a,
        }

        res.status(200).send(x)
      })
      .catch(({ err }) => {
        res.status(400).json({ err })
      })
  } else {
    res
      .status(405)
      .end(
        'Missing parameters *latitude, *longitude, *language: ' +
          latitude +
          ', ' +
          longitude +
          ', ' +
          language
      )
  }
}
