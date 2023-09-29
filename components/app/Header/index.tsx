import Style from '../../../styles/App.module.css'
import Link from 'next/link'
import SvgLogo from '../../website/SvgLogo'
import { useEffect, useState } from 'react'
import { useSearch } from '../../../contexts/SearchContext'
import { normalizeId } from '../../../utils/formats'
import SelectLanguage from '../SelectLanguage'
import Modal from '../Modal'
import {
  IconSettings,
  IconGlobe,
  IconImage,
  IconVideo,
  IconMusic,
  IconPeople,
  IconSparkle,
  IconLocation,
  IconCart,
  IconCode,
  IconBook,
  IconBriefcase,
  IconNews,
  IconBank,
  IconFeedback,
  IconHeart,
  IconMoon,
  IconSun,
  IconList,
  IconCircles,
  IconMoney,
  IconApps,
  Icon,
} from '../SvgIcons'
import Tooltip from '../Tooltip'

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
    isMobileViewport,
  } = useSearch()

  const [showPopup, setShowPopup] = useState<boolean>(false)
  const titleSettings = data?.t?.settings ?? 'Settings'

  // change header in mobile viewport
  useEffect(() => {
    if (isMobileViewport) {
      if (layout === '2') {
        setLayout('1')
        window.localStorage.setItem('layout', '1')
      }
    }
  }, [isMobileViewport])

  function togglePopup() {
    setShowPopup(!showPopup)
    !isMobileViewport && refSearchInput.current.focus()
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
        return <IconGlobe />
      case 'AI':
        return <IconSparkle />
      case 'Image':
        return <IconImage />
      case 'Videos':
        return <IconVideo />
      case 'Music':
        return <IconMusic />
      case 'Social':
        return <IconPeople />
      case 'Local':
        return <IconLocation />
      case 'Academic':
        return <IconBook />
      case 'Shopping':
        return <IconCart />
      case 'News':
        return <IconNews />
      case 'Job':
        return <IconBriefcase />
      case 'Code':
        return <IconCode />
      case 'Legal':
        return <IconBank />
      case 'Apps':
        return <IconApps />
      case 'Finance':
        return <IconMoney />
      default:
        return <Icon />
    }
  }

  return (
    <header className={Style.header}>
      {/* Logo */}
      <Link href="/" className={Style.logo} onClick={() => refSearchInput.current.focus()}>
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
                  <Tooltip text={item.name_translated ?? item.name} disable={layout === '2'}>
                    <button
                      className={category == item.name ? Style.activeLink : null}
                      onClick={() => handleCategory(item.name, item.name_trends)}
                      name={normalizeId(item.name)}>
                      {handleCategoryIcon(item.name)}
                      {item.name_translated ?? item.name}
                    </button>
                  </Tooltip>
                </li>
              )
          )}
        </ul>
      </nav>

      {/* Settings Button  */}
      <div className={Style.iconSettings}>
        <Tooltip text={titleSettings} disable={isMobileViewport || layout === '2'}>
          <button onClick={togglePopup}>
            <IconSettings />
            {titleSettings}
          </button>
        </Tooltip>
      </div>

      {/* Settings Modal */}
      <Modal isOpen={showPopup} onClose={togglePopup} title={titleSettings}>
        <h3>{data?.t?.theme ?? 'Theme'}</h3>
        <div className={Style.containerSettings}>
          <button onClick={toggleTheme}>
            {theme == 'dark' ? <IconMoon /> : <IconSun />}
            {theme == 'dark' ? 'Dark' : 'Light'}
          </button>

          {!isMobileViewport && (
            <button onClick={toggleLayout}>
              {layout == '1' ? <IconCircles /> : <IconList />}
              {layout == '1' ? 'Icons' : 'List'}
            </button>
          )}
        </div>

        <h3>{data?.t?.language ?? 'Language'}</h3>
        <div className={Style.containerSettings}>
          <SelectLanguage />
        </div>

        <h3>{data?.t?.contribute ?? 'Contribute'}</h3>
        <div className={Style.containerSettings}>
          <a href="https://ko-fi.com/findto" target="_blank" rel="noopener noreferrer">
            <IconHeart />
            {data?.t?.donate ?? 'Donate'}
          </a>
          <a
            href={data?.t?.link_feedback ?? 'https://forms.gle/US69JvUT1qxYkiF58'}
            target="_blank"
            rel="noopener noreferrer">
            <IconFeedback /> {data?.t?.feedback ?? 'Feedback'}
          </a>
        </div>
      </Modal>
    </header>
  )
}
