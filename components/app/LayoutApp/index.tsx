import Style from '../../../styles/App.module.css'
import Head from 'next/head'
import AppHeader from '../Header'
import AppFooter from '../Footer'
import { useSearch } from '../../../contexts/SearchContext'
import { LayoutProps } from '../../../interfaces/pages'

export default function LayoutApp(props: LayoutProps) {
  const { theme, layout } = useSearch()
  const title = 'Findto | ' + props.title

  return (
    <div className={Style['theme' + layout] + ' ' + theme}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description} />s
      </Head>

      <AppHeader />

      <main className={Style.main}>{props.children}</main>

      <AppFooter />
    </div>
  )
}
