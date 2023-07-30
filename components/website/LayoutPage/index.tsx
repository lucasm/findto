import Style from '../../../styles/Website.module.css'
import Head from 'next/head'
import Link from 'next/link'
import AppFooter from '../../app/Footer'
import SvgLogo from '../SvgLogo'
import { useSearch } from '../../../contexts/SearchContext'
import { LayoutProps } from '../../../interfaces/pages'
import { useRouter } from 'next/router'

export default function LayoutPage(props: LayoutProps) {
  const { asPath } = useRouter()
  const { data, theme } = useSearch()

  const title = props.title + ' | Findto'
  const url = 'http://findto.app' + asPath

  return (
    <div className={Style.page + ' ' + theme}>
      <Head>
        {/* Browser */}
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
              {/* <li>
                <a href="https://ko-fi.com/findto" target="_blank">
                  {data?.t?.donate ?? 'Donate'}
                </a>
              </li> */}
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
