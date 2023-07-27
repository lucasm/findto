import Style from '../../styles/Website.module.css'
import Head from 'next/head'
import Link from 'next/link'
import AppFooter from '../app/Footer'
import SvgLogo from '../../components/website/SvgLogo'
import { useSearch } from '../../contexts/SearchContext'
import { LayoutProps } from '../../interfaces/pages'

export default function LayoutPage(props: LayoutProps) {
  const { data, theme } = useSearch()

  return (
    <div className={Style.page + ' ' + theme}>
      <Head>
        <title>{props.title && props.title} | Findto</title>
        <meta name="description" content={props.description} />
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
                <Link href="/about">{data?.t?.about ?? 'About'}</Link>
              </li>
              <li>
                <Link href="/community">{data?.t?.community ?? 'Community'}</Link>
              </li>
              <li>
                <a href="https://patreon.com/lucasm" target="_blank">
                  {data?.t?.donate ?? 'Donate'}
                </a>
              </li>
              <li>
                <Link href="/">{data?.t?.open ?? 'Open app'} </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{props.children}</main>

      <AppFooter />
    </div>
  )
}
