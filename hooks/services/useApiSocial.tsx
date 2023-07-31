import { useState, useEffect } from 'react'
import axios from 'axios'

interface ApiSocialData {
  dataSocial: any
  errorSocial: any
}

// Social
export default function useApiSocial(country: string): ApiSocialData {
  const [dataSocial, setDataSocial] = useState<any>(null)
  const [errorSocial, setErrorSocial] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/trends/social/?country=${country}`)
        setDataSocial(response.data)
      } catch (error) {
        setErrorSocial(error)
      }
    }

    fetchData()
  }, [country])

  return {
    dataSocial,
    errorSocial,
  }
}
