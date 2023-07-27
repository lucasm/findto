import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

// endpoint
export default async function endpoint(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // endpoint parameters
  const {
    query: { locale },
    query: { term },
  } = req

  if (locale && term) {
    // URL
    let url =
      'https://api.bing.com/osjson.aspx?market=' + locale + '&query=' + encodeURI(String(term))

    // fetch data from URL
    await axios
      .get(url)
      .then(({ data }) => {
        res.status(200).json(data[1])
      })
      .catch(({ err }) => {
        res.status(400).json({ err })
      })
  } else {
    // error
    res.status(405).end('Missing parameters. LOCALE: ' + locale + ' TERM: ' + term)
  }
}
