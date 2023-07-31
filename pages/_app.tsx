import '../styles/globals.css'
import 'regenerator-runtime/runtime'
import { SearchContextProvider } from '../contexts/SearchContext'
import { Source_Code_Pro } from 'next/font/google'
import UserAnalytics from '../components/website/UserAnalytics'

const font = Source_Code_Pro({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export default function App({ Component, pageProps }) {
  return (
    <SearchContextProvider>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />

      <UserAnalytics />
    </SearchContextProvider>
  )
}
