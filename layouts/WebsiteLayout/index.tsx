import Style from './WebsiteLayout.module.css'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import AppFooter from '@/components/Footer'
import SvgLogo from '@/components/SvgLogo'
import WidgetDropdown from '@/components/WidgetDropdown'
import { IconMenu } from '@/components/SvgIcons'

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = useLocale()
  const t = useTranslations('t')

  const renderDesktop = (): React.ReactElement => {
    return (
      <ul>
        <li className={Style.hideOnMobile}>
          <Link href="/about">{t('about')}</Link>
        </li>
        <li className={Style.hideOnMobile}>
          <Link href="/contribute">{t('contribute')}</Link>
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
        <li className={Style.hideOnMobile}>
          <Link href="/contribute">{t('contribute')}</Link>
        </li>
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
