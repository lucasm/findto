import Style from './WebsiteLayout.module.css'
import Link from 'next/link'
import AppFooter from '@/components/Footer'
import SvgLogo from '@/components/SvgLogo'
import { useLocale, useTranslations } from 'next-intl'

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  const t = useTranslations('t')
  return (
    <div className={Style.page}>
      <header className={Style.header}>
        <div className={Style.container}>
          <Link href={'/' + locale} translate="no">
            <div id="logo" className={Style.logo}>
              <SvgLogo />
              Findto
            </div>
          </Link>

          <nav className={Style.nav}>
            <ul>
              <li>
                <Link href="/about">{t('about')}</Link>
              </li>
              <li>
                <Link href="/community">{t('community')}</Link>
              </li>
              {/* <li>
                <Link href="/pro">Pro</Link>
              </li> */}
              {/* <li>
                <a href="https://ko-fi.com/findto" target="_blank">
                  {data?.t?.donate ?? 'Donate'}
                </a>
              </li> */}
              <li>
                <Link href="/">{t('openApp')} </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <AppFooter />
    </div>
  )
}
