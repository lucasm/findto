import Style from './WebsiteLayout.module.css'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import AppFooter from '@/components/Footer'
import SvgLogo from '@/components/SvgLogo'
import WidgetDropdown from '@/components/WidgetDropdown'
import { IconMenu } from '@/components/SvgIcons'

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  const t = useTranslations('t')

  const renderDesktop = () => {
    return (
      <ul>
        <li className={Style.hideOnMobile}>
          <Link href="/about">{t('about')}</Link>
        </li>
        <li className={Style.hideOnMobile}>
          <a href="https://patreon.com/findto" target="_blank" rel="noopener">
            {t('donate')}
          </a>
        </li>
        <li>
          <Link href="/">{t('openApp')} </Link>
        </li>
      </ul>
    )
  }
  const renderMobile = () => {
    return (
      <ul className={Style.menuMobile}>
        <li>
          <Link href="/about">{t('about')}</Link>
        </li>
        <li>
          <Link href={t('feedback.url')} target="_blank" rel="noopener">
            {t('feedback.title')}
          </Link>
        </li>
        <li>
          <a href="https://patreon.com/findto" target="_blank" rel="noopener">
            {t('donate')}
          </a>
        </li>
        {/* <li>
            <Link href="/pro">Pro</Link>
          </li> */}
      </ul>
    )
  }

  return (
    <div className={Style.page}>
      <header className={Style.header}>
        <Link href={'/' + locale} translate="no">
          <div id="logo" className={Style.logo}>
            <SvgLogo />
            Findto
          </div>
        </Link>

        <nav>
          {renderDesktop()}
          <WidgetDropdown
            title={undefined}
            ariaLabel="Menu"
            icon={<IconMenu />}
            className={Style.showOnMobile}>
            {renderMobile()}
          </WidgetDropdown>
        </nav>
      </header>

      <main>{children}</main>

      <AppFooter />
    </div>
  )
}
