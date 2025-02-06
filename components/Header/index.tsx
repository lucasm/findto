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
  IconMenu,
} from '@/components/SvgIcons'
import { getLocaleData } from '@/utils/getLocaleData'
import SvgLogo from '../SvgLogo'

interface Props {
  locale: string
}

const AppHeader = ({ locale }: Props) => {
  const t = useTranslations('t')
  const data = getLocaleData(locale)

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

  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <Link href="../" className={Style.logo} translate="no">
          <SvgLogo />
          Findto
        </Link>
      </div>

      <div className={Style.buttonsContainer}>
        {/* <button
          onClick={() => {
            window.open(
              'https://www.patreon.com/findto',
              '_blank',
              'noopener,noreferrer',
            )
          }}>
          <figure>
            <IconHeart />
          </figure>
          {t('donate')}
        </button> */}

        <button
          onClick={handleMenu}
          className={
            showMenu
              ? Style.buttonMenu + ' ' + Style.openMenu
              : Style.buttonMenu
          }
          aria-expanded={showMenu ? true : false}>
          <figure>
            <IconMenu />
          </figure>

          {t('categories')}
        </button>

        <button
          onClick={handleSettings}
          className={
            showSettings
              ? Style.buttonSettings + ' ' + Style.openMenu
              : Style.buttonSettings
          }>
          <figure>
            <IconUser />
          </figure>
          {t('settings')}
        </button>
      </div>

      {/* <div>
         <WidgetCarbon />
        <WidgetPrivacy />
      </div> */}

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
    </header>
  )
}

export default AppHeader
