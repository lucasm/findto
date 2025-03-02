'use client'

import Style from './Header.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { useSearch } from '@/contexts/SearchContext'
import { getLocaleData } from '@/utils/getLocaleData'
import SvgLogo from '@/components/SvgLogo'
import {
  IconUser,
  IconFeedback,
  IconHeart,
  IconMoon,
  IconSun,
  IconThemeSystem,
  IconArrow,
  IconCategories,
} from '@/components/SvgIcons'
import SelectLanguage from '@/components/SelectLanguage'
import SearchNav from '@/components/SearchNav'
import HeaderSidebar from '@/components/HeaderSidebar'
import WidgetDropdown from '@/components/WidgetDropdown'
import { ISearchCategory } from '@/interfaces/search'
import WidgetProtection from '../WidgetProtection'

interface Props {
  locale: string
  category: ISearchCategory
}

const AppHeader = ({ locale, category }: Props) => {
  const t = useTranslations('t')
  const data = getLocaleData(locale)
  const { isMobileViewport, isSidebarOpen, setIsSidebarOpen, inputFocus } =
    useSearch()
  const { theme, setTheme } = useTheme()

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

  const handleOnClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
    inputFocus()
  }
  const handleFigure = () => {
    if (!isMobileViewport && isSidebarOpen) {
      return (
        <figure>
          <IconArrow />
        </figure>
      )
    }

    if (!isMobileViewport && !isSidebarOpen && category?.name != 'Home') {
      return (
        <figure>
          <IconCategories />
          {t('category')}
          {': '}
          {category?.name_translated ?? category?.name}
        </figure>
      )
    }

    return (
      <figure>
        <IconCategories />
        {t('categories')}
      </figure>
    )
  }

  return (
    <header className={Style.header + ' sidebar'}>
      <div className={Style.buttonsContainer}>
        {/* Logo */}
        <Link href="../" className={Style.logo} translate="no">
          <SvgLogo />
          Findto
        </Link>

        {/* Modes */}
        {!isMobileViewport && (
          <button
            onClick={() => handleOnClick()}
            aria-expanded={isSidebarOpen}
            aria-label={t('categories') ?? 'Categories'}
            className={
              !isMobileViewport && isSidebarOpen ? Style.buttonArrowClose : ''
            }>
            {handleFigure()}
          </button>
        )}

        {isMobileViewport && (
          <WidgetDropdown
            title={t('categories') ?? 'Categories'}
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
        <WidgetProtection className={Style.buttonHideMobile} />

        {/* <WidgetPrivacy className={Style.buttonHideMobile} />
        <WidgetCarbon className={Style.buttonHideMobile} /> */}

        {/* Donate */}
        <button
          className={Style.buttonHideMobile}
          onClick={() => {
            window.open(
              'https://www.patreon.com/findto',
              '_blank',
              'noopener,noreferrer'
            )
          }}>
          <figure>
            <IconHeart />
            {t('donate')}
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
                <Link
                  href="https://ko-fi.com/findto"
                  target="_blank"
                  rel="noopener noreferrer">
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

export default AppHeader
