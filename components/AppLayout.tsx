import Style from '../styles/App.module.css'
import Head from 'next/head'
import AppHeader from './AppHeader'
import { useSearch } from '../contexts/SearchContext'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  children: ReactNode
}

export default function AppLayout(props: Props) {
  const { theme, layout } = useSearch()

  return (
    <div className={Style.page + ' ' + theme + ' ' + Style['theme' + layout]}>
      <Head>
        <title>Findto — {props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '[Tracking ID]');
              `,
          }}
        /> */}
      </Head>

      <AppHeader />

      <main className={Style.main}>{props.children}</main>
    </div>
  )
}
