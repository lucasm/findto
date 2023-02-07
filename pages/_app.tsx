import '../styles/globals.css'
import { SearchContextProvider } from '../contexts/SearchContext'

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  )
}
