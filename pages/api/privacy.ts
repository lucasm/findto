import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function endpointPrivacy(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { url },
  } = req

  if (url) {
    const api = 'https://api.privacymonitor.com/score/?q=' + url

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
