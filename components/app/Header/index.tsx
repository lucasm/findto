import Style from './Header.module.css'
import Link from 'next/link'
import SvgLogo from '../../website/SvgLogo'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
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
  IconMoney,
  IconApps,
  Icon,
  IconMore,
} from '../SvgIcons'
import Tooltip from '../Tooltip'

export default function AppHeader() {
  const router = useRouter()
  const { view } = router.query
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

  const titleSettings = data?.t?.settings ?? 'Settings'
  const [showModal, setShowModal] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [menuItens, setMenuItens] = useState<any>(null)
  const [submenuItems, setSubmenuItems] = useState<any>(null)
  const submenuRef = useRef<HTMLDivElement>(null)
  const [maxItemsInHeader, setMaxItemsInHeader] = useState(data?.categories?.length)
  const [pageHeight, setPageHeight] = useState(0)

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen)
  }
  const toggleModal = () => {
    setShowModal(!showModal)
    !isMobileViewport && refSearchInput.current.focus()
  }
  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }
  const handleCategory = (category: string) => {
    try {
      refSearchTabs?.current?.['tab_' + category]?.click()
      setCategory(category)
      window.localStorage.setItem('category', category)
      router.push({
        query: { view: category },
      })
    } catch (error) {
      console.error('Error loading category ' + category, error)
      refSearchTabs?.current?.['tab_Web']?.click()
    }
  }
  const handleCategoryIcon = (category: string) => {
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
  const renderMenuItem = (name, nameTranslated) => {
    return (
      <button
        className={category === name ? 'activeLink' : null}
        onClick={() => handleCategory(name)}
        name={normalizeId(name)}>
        {handleCategoryIcon(name)}
        {nameTranslated ?? name}
      </button>
    )
  }

  // largura da página
  useEffect(() => {
    // largura inicial da página
    setPageHeight(window.innerWidth)

    const handleResize = () => {
      // atualiza a largura da página quando a janela é redimensionada
      setPageHeight(window.innerWidth)
    }

    // evento de redimensionamento da janela
    window.addEventListener('resize', handleResize)

    // remove o ouvinte de evento quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // limite de itens no menu de navegação
  useEffect(() => {
    if (!isMobileViewport && pageHeight > 0) {
      if (pageHeight < 1100) {
        setMaxItemsInHeader(7)
      } else if (pageHeight < 1200) {
        setMaxItemsInHeader(8)
      } else {
        setMaxItemsInHeader(9)
      }
    }

    // se houver mais itens no menu do que o limite move para o submenu
    if (!isMobileViewport && data?.categories?.length > maxItemsInHeader) {
      const remainingItems = data?.categories?.slice(maxItemsInHeader)
      setMenuItens(data?.categories?.slice(0, maxItemsInHeader))
      setSubmenuItems(remainingItems)
    } else {
      setMenuItens(data?.categories)
      setSubmenuItems([])
    }
  }, [data, isMobileViewport, pageHeight, maxItemsInHeader])

  // url param
  useEffect(() => {
    if (view) {
      const paramView = Array.isArray(view) ? view[0] : view
      handleCategory(paramView)
    }
  }, [view])

  // header by viewport
  useEffect(() => {
    if (isMobileViewport) {
      if (layout === '2') {
        setLayout('1')
        window.localStorage.setItem('layout', '1')
      }
    } else {
      if (layout === '1') {
        setLayout('2')
        window.localStorage.setItem('layout', '2')
      }
    }
  }, [isMobileViewport])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (submenuRef.current) {
        if (!submenuRef.current.contains(event.target as Node)) {
          setIsSubmenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className={Style.header}>
      <Link href="/" className={Style.logo} onClick={() => refSearchInput.current.focus()}>
        <SvgLogo />
        Findto
      </Link>

      <div className={Style.iconSettings}>
        <button onClick={toggleModal}>
          <IconSettings />
          {titleSettings}
        </button>
      </div>

      <nav className={Style.nav}>
        <ul>
          {menuItens?.map(
            (item: any, index: number) =>
              item.active == true && (
                <li key={index}>{renderMenuItem(item.name, item.name_translated)}</li>
              )
          )}
        </ul>

        <div className={Style.submenu} ref={submenuRef}>
          {submenuItems?.length > 0 && (
            <button onClick={toggleSubmenu}>
              <IconMore /> {data?.t?.more ?? 'More'}
            </button>
          )}

          {isSubmenuOpen && (
            <ul>
              {submenuItems?.map(
                (item, index: number) =>
                  item.active == true && (
                    <li key={index}>{renderMenuItem(item.name, item.name_translated)}</li>
                  )
              )}
            </ul>
          )}
        </div>
      </nav>

      <Modal title={titleSettings} isOpen={showModal} onClose={toggleModal}>
        <div className={Style.containerSettings}>
          <h3>{data?.t?.theme ?? 'Theme'}</h3>

          <button onClick={toggleTheme}>
            {theme == 'dark' ? <IconMoon /> : <IconSun />}
            {theme == 'dark' ? 'Dark' : 'Light'}
          </button>
        </div>

        <div className={Style.containerSettings}>
          <h3>{data?.t?.language ?? 'Language'}</h3>

          <SelectLanguage />
        </div>

        <div className={Style.containerSettings}>
          <h3>{data?.t?.contribute ?? 'Contribute'}</h3>

          <a
            href={data?.t?.link_feedback ?? 'https://forms.gle/US69JvUT1qxYkiF58'}
            target="_blank"
            rel="noopener noreferrer">
            <IconFeedback /> {data?.t?.feedback ?? 'Feedback'}
          </a>
          <a href="https://ko-fi.com/findto" target="_blank" rel="noopener noreferrer">
            <IconHeart />
            {data?.t?.donate ?? 'Donate'}
          </a>
        </div>
      </Modal>
    </header>
  )
}
