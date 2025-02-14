'use client'

import Style from './Header.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import SelectLanguage from '@/components/SelectLanguage'
import SearchNav from '@/components/SearchNav'
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
import { getLocaleData } from '@/utils/getLocaleData'
import SvgLogo from '../SvgLogo'
import { useSearch } from '@/contexts/SearchContext'
import { ISearchCategory } from '@/interfaces/search'
import HeaderSidebar from '../HeaderSidebar'

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

  const [showSettings, setShowSettings] = useState<boolean>(false)
  const handleSettings = () => {
    setShowSettings(!showSettings)
  }

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  const showLayer = showMenu || showSettings

  // for Button Categories
  const handleAriaExpanded = () => {
    if (isMobileViewport) {
      return showMenu ? true : false
    } else {
      return isSidebarOpen ? true : false
    }
  }
  const handleOnClick = () => {
    if (isMobileViewport) {
      handleMenu()
    } else {
      inputFocus()
      setIsSidebarOpen(!isSidebarOpen)
    }
  }

  const handleClassName = () => {
    if (isMobileViewport) {
      return showMenu
        ? Style.buttonMenu + ' ' + Style.openMenu
        : Style.buttonMenu
    }
  }

  const handleFigure = () => {
    if (!isMobileViewport && isSidebarOpen) {
      return (
        <figure
          style={{
            transform: 'rotate(90deg)',
            opacity: 0.5,
          }}>
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
    <header className={Style.header}>
      <div className={Style.buttonsContainer}>
        {/* Logo */}
        <Link href="../" className={Style.logo} translate="no">
          <SvgLogo />
          Findto
        </Link>

        {/* Button Categories */}
        <button
          onClick={() => handleOnClick()}
          aria-expanded={handleAriaExpanded()}
          className={handleClassName()}>
          {handleFigure()}
        </button>
      </div>

      <div className={Style.buttonsContainer}>
        {/* Button Donate */}
        <button
          className={Style.buttonDonate}
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

        {/* Button Settings */}
        <button
          onClick={handleSettings}
          className={
            showSettings
              ? Style.buttonSettings + ' ' + Style.openMenu
              : Style.buttonSettings
          }>
          <figure>
            <IconUser />
            <span> {t('settings')}</span>
          </figure>
        </button>
      </div>

      {showMenu && (
        <nav className={`${Style.nav} ${showMenu ? Style.openNav : ''}`}>
          <SearchNav data={data} variant="vertical" />
        </nav>
      )}

      {showSettings && (
        <nav className={`${Style.nav} ${showSettings ? Style.openNav : ''}`}>
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
        </nav>
      )}

      {showLayer && (
        <div
          className={
            showLayer ? Style.layer + ' ' + Style.layerActive : Style.layer
          }
          onClick={() => {
            setShowMenu(false)
            setShowSettings(false)
          }}></div>
      )}

      <HeaderSidebar category={category} />
    </header>
  )
}

export default AppHeader
