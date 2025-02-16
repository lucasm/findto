import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { ITrends } from '@/interfaces/trends'
import validator from 'validator'

export default async function endpoint(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    query: { country },
  } = req

  if (!country) {
    return res
      .status(400)
      .json({ message: 'Missing parameter "country" (country code' })
  }

  const countryLowerCase = country.toString().toLowerCase()

  if (
    !validator.isAlpha(countryLowerCase) ||
    !validator.isLength(countryLowerCase, { min: 2, max: 2 })
  ) {
    return res.status(400).json({ message: 'Invalid "country" (country code' })
  }

  const url = `https://api.adzuna.com/v1/api/jobs/${countryLowerCase}/categories?app_id=${process.env.NEXT_PUBLIC_API_ADZUNA_ID}&app_key=${process.env.NEXT_PUBLIC_API_ADZUNA}`

  try {
    const { data } = await axios.get(url)

    const trends = data.results.slice(0, 22).map((item: { label: string }) => ({
      title: item.label.replace('Vagas em ', ''),
    }))

    const responsePayload: ITrends = {
      credits_title: 'Adzuna',
      credits_url: 'https://adzuna.com',
      data: trends,
    }

    res.status(200).json(responsePayload)
  } catch (error) {
    console.error('Error fetching Job data:', error)
    res.status(500).json({
      message: 'Error fetching Job data',
      error: error,
    })
  }
}
