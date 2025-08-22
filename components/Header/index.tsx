'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

import HeaderSidebar from '@/components/HeaderSidebar'
import SearchNav from '@/components/SearchNav'
import SelectLanguage from '@/components/SelectLanguage'
import {
  IconUser,
  IconFeedback,
  IconHeart,
  IconMoon,
  IconSun,
  IconThemeSystem,
  IconSidebar,
  IconCategories,
  IconArrowExternal,
  IconShield,
} from '@/components/SvgIcons'
import WidgetDropdown from '@/components/WidgetDropdown'
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
  const {
    isMobileViewport,
    isSidebarOpen,
    setIsSidebarOpen,
    inputFocus,
    searchSource,
  } = useSearch()

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
          isWidgetOpen={(state) => console.log(state)}
          ariaLabel={t('settings') ?? 'Settings'}>
          <div className={Style.containerSettings}>
            <div>
              <h3>{t('theme')}</h3>

              <button onClick={handleTheme}>
                {theme === 'dark' ? (
                  <IconMoon />
                ) : theme === 'light' ? (
                  <IconSun />
                ) : (
                  <IconThemeSystem />
                )}
                {theme === 'dark'
                  ? 'Dark'
                  : theme === 'light'
                    ? 'Light'
                    : 'System'}
              </button>
            </div>

            <div>
              <h3>{t('contribute')}</h3>
              <div>
                <Link href="/contribute">
                  <IconHeart />
                  {t('donate')}
                </Link>
                <Link
                  href={t('feedback.url')}
                  target="_blank"
                  rel="noopener noreferrer">
                  <IconFeedback />
                  {t('feedback.title')}
                </Link>
              </div>
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
