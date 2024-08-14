import Styles from './SearchSuggestions.module.css'
import axios from 'axios'
import { useSearch } from '../../contexts/SearchContext'
import { useEffect, useState, useCallback } from 'react'

type Props = {
  term: string
  locale: string
}

export default function SearchSuggestions({ term, locale }: Props) {
  const { putValue } = useSearch()
  const [data, setData] = useState<string[] | null>(null)

  const handleValue = (value: string) => {
    putValue(value)
    setData(null)
  }

  const fetchSuggestions = useCallback(async () => {
    if (locale && term.length > 0 && term.length < 50) {
      try {
        const response = await axios.get(
          '/api/suggestions/?locale=' + locale + '&term=' + term
        )
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }, [locale, term])

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchSuggestions()
    }, 300) // 300 ms de debounce

    return () => {
      clearTimeout(debounceFetch) // Limpa o timeout anterior se o term mudar antes do timeout terminar
    }
  }, [fetchSuggestions, term, locale])

  useEffect(() => {
    if (term.length === 0) {
      setData(null)
    }
  }, [term])

  return (
    <div className={Styles.container}>
      {data && (
        <ul>
          {data?.slice(0, 6).map((item: string, index: number) => (
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
