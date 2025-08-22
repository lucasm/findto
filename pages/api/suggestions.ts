import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

// endpoint
export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // endpoint parameters
  const {
    query: { locale },
    query: { term },
  } = req

  if (locale && term) {
    // URL
    const url =
      'https://api.bing.com/osjson.aspx?market=' +
      locale +
      '&query=' +
      encodeURI(String(term))

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
    res
      .status(405)
      .end('Missing parameters. LOCALE: ' + locale + ' TERM: ' + term)
  }
}
