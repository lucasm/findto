import Style from '../styles/App.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/http'
import { useSearch } from '../contexts/SearchContext'
import { useEffect } from 'react'

type Props = {
  term: string
  locale: string
}

export default function SearchSuggestions(props: Props) {
  const { putValue, inputValue } = useSearch()

  console.log(inputValue)

  function isValid(): boolean {
    if (props.locale && props.term.length > 1 && props.term.length < 50) {
      return true
    } else {
      return false
    }
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 5 seconds!')
  //   }, 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  const { data, error, isLoading } = useSWR(
    isValid() ? '/api/suggestions/?locale=' + props.locale + '&term=' + props.term : null,
    fetcher
  )

  return (
    <div className={Style.searchSuggestions}>
      {/* {error && <div>Error</div>} */}
      {/* {isLoading && <div>...</div>} */}
      {data && (
        <ul>
          {data.slice(0, 8).map((item: string, index: number) => (
            <li key={index}>
              <a href="#" onClick={() => putValue(item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
