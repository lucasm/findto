import Style from '../styles/App.module.css'
import useSWR from 'swr'
import { fetcher } from '../utils/http'

type Props = {
  term: string
  locale: string
}

export default function SearchSuggestions(props: Props) {
  function isValid(): boolean {
    if (props.locale && props.term.length > 1 && props.term.length < 50) {
      return true
    } else {
      return false
    }
  }

  function calcPrivacyPercent(value: number) {
    const valorBase = 850
    const porcentagemBase = 100
    const percent = (value / valorBase) * porcentagemBase // calcula o percentual em relação a 100%
    const diff = ((value - valorBase) / valorBase) * porcentagemBase // calcula o percentual de diferença em relação a 100%
    return [percent, diff]
  }

  // exemplo de uso da função
  const resultado = calcPrivacyPercent(734)
  console.log(resultado)

  const { data, error, isLoading } = useSWR(
    isValid() ? '/api/suggestions/?locale=' + props.locale + '&term=' + props.term : null,
    fetcher
  )

  return (
    <div className={Style.searchSuggestions}>
      {error && <div>Error</div>}
      {/* {isLoading && <div>...</div>} */}
      {data && (
        <ul>
          {data.slice(0, 8).map((item: string, index: number) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
