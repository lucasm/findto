import Styles from './SearchSuggestions.module.css'
import axios from 'axios'
import { useSearch } from '../../../contexts/SearchContext'
import { useEffect, useState } from 'react'

type Props = {
  term: string
  locale: string
}

export default function SearchSuggestions({ term, locale }: Props) {
  const { putValue } = useSearch()
  const [data, setData] = useState(null)

  const handleValue = (value: string) => {
    putValue(value)
    setData(null)
  }

  useEffect(() => {
    let timeoutId

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/suggestions/?locale=' + locale + '&term=' + term)
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    const delayedFetch = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(fetchData, 200) // ms
    }

    const isValid = () => {
      if (locale && term.length > 0 && term.length < 50) {
        return true
      } else {
        return false
      }
    }

    isValid() && delayedFetch()

    return () => {
      clearTimeout(timeoutId) // limpa o timeout se o componente for desmontado antes da busca ser realizada
    }
  }, [locale, term])

  useEffect(() => {
    if (term.length === 0) {
      setData(null)
    }
  }, [term])

  return (
    <div className={Styles.container}>
      {/* {error && <div>Error</div>} */}
      {/* {isLoading && <div>...</div>} */}
      {data && (
        <ul>
          {data?.slice(0, 7).map((item: string, index: number) => (
            <li key={index}>
              <a href="#" onClick={() => handleValue(item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
