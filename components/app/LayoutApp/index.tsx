import Style from '../../../styles/App.module.css'
import Head from 'next/head'
import AppHeader from '../Header'
import AppFooter from '../Footer'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export type LayoutAppProps = {
  title: string
  description: string
  children: ReactNode
}

export default function LayoutApp({ title, description, children }: LayoutAppProps) {
  const { asPath } = useRouter()
  const titleFull = 'Findto — ' + title
  const url = 'http://findto.app' + asPath

  return (
    <div className={Style.layout}>
      <Head>
        <title>{titleFull}</title>
        <meta name="description" content={description} />

        <meta itemProp="name" content={titleFull} />
        <meta itemProp="description" content={description} />

        <meta property="og:title" content={titleFull} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={titleFull} />
        <meta name="twitter:description" content={description} />
      </Head>

      <AppHeader />

      <main className={Style.main}>
        <>
          {children}
          <AppFooter />
        </>
      </main>
    </div>
  )
}
