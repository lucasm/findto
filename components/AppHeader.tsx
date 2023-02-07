import Style from '../styles/App.module.css'
import * as Icon from 'react-feather'
import Link from 'next/link'
import SvgLogo from '../components/website/SvgLogo'
import { useState } from 'react'
import { useSearch } from '../contexts/SearchContext'
import { normalizeId } from '../utils/formats'

export default function AppHeader() {
  const {
    data,
    layout,
    setLayout,
    theme,
    setTheme,
    category,
    setCategory,
    color,
    setTrends,
    refSearchTabs,
    refSearchInput,
  } = useSearch()
  const [menuActive, setMenuActive] = useState<boolean>(false)

  // Theme Color
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
  // Theme Layout
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
  // Menu
  function toggleMenu() {
    setMenuActive(!menuActive)
  }
  // Category
  function handleCategory(category: string, name_trends: string) {
    setCategory(category)
    window.localStorage.setItem('category', category)
    setTrends(name_trends)

    refSearchTabs?.current?.['tab_' + category].click()
  }
  function setCategoryIcon(category: string) {
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
      {/* Logo */}
      <Link
        href="/"
        id="logo"
        className={Style.logo}
        onClick={() => refSearchInput.current.focus()}>
        <SvgLogo fill={color} />
        Findto
      </Link>
      <nav className={Style.nav} id="nav">
        {/* Categories */}
        <ul>
          {data?.categories?.map(
            (item: any, index: number) =>
              item.active == true && (
                <li key={index}>
                  <button
                    className={category == item.name ? Style.activeLink : null}
                    onClick={() => handleCategory(item.name, item.name_trends)}
                    name={normalizeId(item.name)}>
                    {setCategoryIcon(item.name)}
                    {item.name_translated ? item.name_translated : item.name}
                  </button>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* Settings */}
      <div className={Style.iconSettings}>
        <button onClick={toggleMenu}>
          <Icon.Settings />
          Settings
        </button>
      </div>

      {/* Settings Popup */}
      <div className={menuActive ? Style.menuBox + ' ' + Style.menuBoxActive : Style.menuBox}>
        <div className={Style.menu}>
          <button className={Style.close} onClick={toggleMenu}>
            <Icon.X />
            Close
          </button>

          <h3>Settings</h3>

          <div className={Style.menuBlock}>
            <h4>Appearance</h4>

            <button onClick={toggleLayout}>
              {layout == '1' ? <Icon.Grid /> : <Icon.Layout />}
              {layout == '1' ? 'Icons' : 'List'}
            </button>

            <button onClick={toggleTheme}>
              {theme == 'dark' ? <Icon.Moon /> : <Icon.Sun />}
              {theme == 'dark' ? 'Dark' : 'Light'}
            </button>
          </div>

          <div className={Style.menuBlock}>
            <h4>Language</h4>
          </div>
        </div>
      </div>
    </header>
  )
}
