import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function endpointCarbon(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { url },
  } = req

  if (url) {
    const api = 'https://api.websitecarbon.com/site?url=' + url

    await axios
      .get(api)
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(({ err }) => {
        res.status(400).json({ err })
      })
  } else {
    res.status(405).end('Missing parameters. URL: ' + url)
  }
}
