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
  const { putValue } = useSearch()
  function shouldFetch(): boolean {
    if (props.locale && props.term.length > 2) {
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
    shouldFetch() ? '/api/suggestions/?locale=' + props.locale + '&term=' + props.term : null,
    fetcher
  )

  return (
    <div className={Style.container + ' ' + Style.widgetSearchSuggestions} id="autocomplete">
      {error && <div>Error</div>}
      {isLoading && <div>...</div>}

      {data && (
        <ul>
          {data.slice(0, 5).map((item: string, index: number) => (
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
