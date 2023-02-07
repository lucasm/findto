import Style from '../../styles/Website.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'
import SvgLogo from '../../components/website/SvgLogo'

import { useSearch } from '../../contexts/SearchContext'

export default function PageLayout(props) {
  const { theme } = useSearch()

  return (
    <div className={Style.page + ' ' + theme}>
      <Head>
        <title>{props.title} – Findto</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />

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

        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>

      <header className={Style.header}>
        <div className={Style.container}>
          <Link href="/">
            <div id="logo" className={Style.logo}>
              <SvgLogo />
              Findto
            </div>
          </Link>

          <nav className={Style.nav}>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contribute">Contribute</Link>
              </li>
              <li>
                <Link href="/">Open the App</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <Footer />
    </div>
  )
}
