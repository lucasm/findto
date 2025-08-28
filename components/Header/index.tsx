'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import HeaderSidebar from '@/components/HeaderSidebar'
import SearchNav from '@/components/SearchNav'
import SelectLanguage from '@/components/SelectLanguage'
import {
  IconUser,
  IconHeart,
  IconMoon,
  IconSun,
  IconThemeSystem,
  IconSidebar,
  IconCategories,
  IconArrowExternal,
  IconShield,
  IconCookie,
} from '@/components/SvgIcons'
import WidgetDropdown from '@/components/WidgetDropdown'
import { useCookiesConsent } from '@/contexts/CookiesConsentContext'
import { useSearch } from '@/contexts/SearchContext'
import { ISearchCategory } from '@/interfaces/search'
import { getLocaleData } from '@/utils/getLocaleData'

import Style from './Header.module.css'

interface Props {
  locale: string
  category: ISearchCategory
}

const Header = ({ locale, category }: Props) => {
  const router = useRouter()
  const t = useTranslations('t')
  const data = getLocaleData(locale)
  const { theme, setTheme } = useTheme()
  const { openPopup } = useCookiesConsent()
  const {
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen,
    inputFocus,
    searchSource,
  } = useSearch()

  const [closeSettings, setCloseSettings] = useState(false)

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      return
    }

    if (theme === 'dark') {
      setTheme('system')
      return
    }

    // Assumindo que se não for 'light' ou 'dark', é 'system'
    setTheme('light')
  }
  const handleSidebar = () => {
    const app = document.querySelector('.app')

    if (isSidebarOpen) {
      app?.classList.remove('sidebar')
    } else {
      app?.classList.add('sidebar')
    }

    document.cookie = `isSidebarOpen=${!isSidebarOpen}; path=/; max-age=31536000`

    setIsSidebarOpen(!isSidebarOpen)
    inputFocus()
  }
  const handleCookiesConsent = () => {
    openPopup()
    setCloseSettings(true)
    setTimeout(() => setCloseSettings(false), 0)
  }

  const showTapbar = isMobileViewport || !isSidebarOpen

  return (
    <header className={Style.header}>
      <div className={Style.buttonsContainer}>
        {/* Logo */}
        <Link href="../" className={Style.logo} translate="no">
          Findto
        </Link>

        {/* Sidebar */}
        <button
          type="button"
          onClick={() => handleSidebar()}
          aria-expanded={isSidebarOpen}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          className={
            Style.buttonSidebar +
            ' ' +
            (isSidebarOpen ? Style.buttonSidebarHover : '')
          }>
          <figure>
            <IconSidebar />
          </figure>
        </button>

        {/* Tapbar */}
        {showTapbar && (
          <WidgetDropdown
            title={t('categories') ?? 'Modes'}
            icon={<IconCategories />}
            position="left">
            <SearchNav
              data={data}
              variant="vertical"
              selectedCategory={category}
            />
          </WidgetDropdown>
        )}
      </div>

      <div className={Style.buttonsContainer}>
        {/* Protection */}
        <WidgetDropdown
          title={t('widgetProtection.title')}
          ariaLabel={t('widgetProtection.title')}
          icon={<IconShield />}>
          <div className={Style.containerSettings}>
            <p>{t('widgetProtection.description')}</p>

            <div>
              <h3>
                {t('widgetProtection.source')}: {searchSource?.name}
              </h3>

              <a
                href={
                  'https://sitecheck.sucuri.net/results/' + searchSource?.domain
                }
                rel="noreferrer noopener"
                target="_blank">
                <IconArrowExternal />
                {t('widgetProtection.security')}
              </a>

              <a
                href={
                  'https://privacyscanner.aesirx.io/result/' +
                  searchSource?.domain
                }
                rel="noreferrer noopener"
                target="_blank">
                <IconArrowExternal />
                {t('widgetProtection.privacy')}
              </a>

              <a
                href={
                  'https://www.websitecarbon.com/website/' +
                  searchSource?.domain?.replace('.', '-')
                }
                rel="noreferrer noopener"
                target="_blank">
                <IconArrowExternal />
                {t('widgetProtection.carbon')}
              </a>
            </div>
          </div>
        </WidgetDropdown>

        {/* Contribute */}
        <button
          aria-label={t('contribute')}
          onClick={() => {
            router.push('/contribute')
          }}>
          <figure>
            <IconHeart />
            <span>{t('contribute')}</span>
          </figure>
        </button>

        {/* Settings */}
        <WidgetDropdown
          title={undefined}
          icon={<IconUser />}
          ariaLabel={t('settings') ?? 'Settings'}
          forceClose={closeSettings}>
          <div className={Style.containerSettings}>
            <div>
              <h3>{t('settings') ?? 'Settings'}</h3>

              <button onClick={handleTheme}>
                {theme === 'dark' ? (
                  <IconMoon />
                ) : theme === 'light' ? (
                  <IconSun />
                ) : (
                  <IconThemeSystem />
                )}
                {t('theme')}{' '}
                {theme === 'dark'
                  ? 'Dark'
                  : theme === 'light'
                    ? 'Light'
                    : 'System'}
              </button>

              <button onClick={handleCookiesConsent}>
                <IconCookie />
                Cookies
              </button>
            </div>

            <div>
              <h3>{t('language')}</h3>
              <SelectLanguage />
            </div>
          </div>
        </WidgetDropdown>
      </div>

      <HeaderSidebar category={category} />
    </header>
  )
}

export default Header
