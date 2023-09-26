import Style from '../../../styles/App.module.css'
import Head from 'next/head'
import AppHeader from '../Header'
import AppFooter from '../Footer'
import { useSearch } from '../../../contexts/SearchContext'
import { LayoutProps } from '../../../interfaces/pages'
import { useRouter } from 'next/router'

export default function LayoutApp(props: LayoutProps) {
  const { asPath } = useRouter()
  const { layout } = useSearch()

  const title = 'Findto | ' + props.title
  const url = 'http://findto.app' + asPath

  return (
    <div className={Style['layout' + layout]}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description} />

        {/* Social */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={props.description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={props.description} />
      </Head>

      <AppHeader />

      <main className={Style.main}>{props.children}</main>

      <AppFooter />
    </div>
  )
}
