import Style from '../../../styles/App.module.css'
import * as Icon from 'react-feather'
import Link from 'next/link'
import SvgLogo from '../../website/SvgLogo'
import { useState } from 'react'
import { useSearch } from '../../../contexts/SearchContext'
import { normalizeId } from '../../../utils/formats'
import SelectLanguage from '../SelectLanguage'
import Popup from '../Popup'

export default function AppHeader() {
  const {
    data,
    layout,
    setLayout,
    theme,
    setTheme,
    category,
    setCategory,
    refSearchTabs,
    refSearchInput,
  } = useSearch()

  const [showPopup, setShowPopup] = useState<boolean>(false)

  function togglePopup() {
    setShowPopup(!showPopup)
    refSearchInput.current.focus()
  }
  function toggleTheme() {
    if (theme == 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
    console.log(theme)
  }
  function toggleLayout() {
    if (layout == '1') {
      setLayout('2')
      window.localStorage.setItem('layout', '2')
    } else {
      setLayout('1')
      window.localStorage.setItem('layout', '1')
    }
    console.log(layout)
  }

  function handleCategory(category: string, name_trends: string) {
    setCategory(category)
    window.localStorage.setItem('category', category)

    refSearchTabs?.current?.['tab_' + category].click()
  }
  function handleCategoryIcon(category: string) {
    switch (category) {
      case 'Web':
        return <Icon.Globe />
      case 'AI':
        return <Icon.Zap />
      case 'Images':
        return <Icon.Image />
      case 'Videos':
        return <Icon.Play />
      case 'Music':
        return <Icon.Music />
      case 'Social':
        return <Icon.Users />
      case 'Local':
        return <Icon.MapPin />
      case 'Academic':
        return <Icon.Book />
      case 'Shopping':
        return <Icon.ShoppingCart />
      case 'News':
        return <Icon.Rss />
      case 'Jobs':
        return <Icon.Briefcase />
      case 'Code':
        return <Icon.Code />
      case 'Torrent':
        return <Icon.Download />
      case 'NFTs':
        return <Icon.Smile />
      case 'Apps':
        return <Icon.Package />
      case 'Finance':
        return <Icon.DollarSign />
      case 'Legal':
        return <Icon.FileText />
      default:
        return <Icon.Hexagon />
    }
  }

  return (
    <header className={Style.header}>
      {/* Link Logo */}
      <Link
        href="/"
        id="logo"
        className={Style.logo}
        onClick={() => refSearchInput.current.focus()}>
        <SvgLogo />
        Findto
      </Link>

      {/* Nav Categories */}
      <nav id="nav" className={Style.nav}>
        <ul>
          {data?.categories?.map(
            (item: any, index: number) =>
              item.active == true && (
                <li key={index}>
                  <button
                    className={category == item.name ? Style.activeLink : null}
                    onClick={() => handleCategory(item.name, item.name_trends)}
                    name={normalizeId(item.name)}>
                    {handleCategoryIcon(item.name)}
                    {item.name_translated ? item.name_translated : item.name}
                  </button>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* Settings - Button  */}
      <div className={Style.iconSettings}>
        <button onClick={togglePopup}>
          <Icon.Settings />
          {data?.t?.settings ?? 'Settings'}
        </button>
      </div>

      {/* Settings - Popup  */}
      <Popup title={data?.t?.settings ?? 'Settings'} show={showPopup} onClose={togglePopup}>
        <div>
          <h3>{data?.t?.theme ?? 'Theme'}</h3>

          <div className={Style.menuBlock}>
            <button onClick={toggleTheme}>
              {theme == 'light' ? <Icon.Moon /> : <Icon.Sun />}
              {theme == 'light' ? 'Dark' : 'Light'}
            </button>
            <button onClick={toggleLayout}>
              {layout == '2' ? <Icon.Grid /> : <Icon.Layout />}
              {layout == '2' ? 'Icons' : 'Menu'}
            </button>
          </div>

          <h3>{data?.t?.language ?? 'Language'}</h3>
          <div className={Style.menuBlock}>
            <SelectLanguage />
          </div>

          <h3>{data?.t?.contribute ?? 'Contribute'}</h3>
          <div className={Style.menuBlock}>
            <a href="https://ko-fi.com/findto" target="_blank" rel="noopener noreferrer">
              <Icon.Heart />
              Donate
            </a>
            <a href="https://patreon.com/lucasm" target="_blank" rel="noopener noreferrer">
              <Icon.MessageSquare /> Feedback
            </a>
          </div>
        </div>
      </Popup>
    </header>
  )
}
