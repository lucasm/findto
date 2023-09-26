import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

// create Context for global states
const SearchContext = createContext<any>({})

// export as Provider
export function SearchContextProvider({ children }) {
  const { locale } = useRouter()
  const [data, setData] = useState<any>({})
  const [layout, setLayout] = useState<string>('1')
  const [theme, setTheme] = useState<string>('light')
  const [category, setCategory] = useState<string>('Web')
  const [search, setSearch] = useState<string>('google')
  const [searchUrl, setSearchUrl] = useState<string>('')
  const [color, setColor] = useState<string>('#fff')
  const [trends, setTrends] = useState<string>('Trends')
  const [country, setCountry] = useState<string>('US')
  const [permissionLocation, setPermissionLocation] = useState<boolean>(false)
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()
  const [inputValue, setInputValue] = useState<string>('')
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false)
  const refSearchInput = useRef(null)
  const refSearchTabs = useRef([])

  // load search data by file
  const searchData = require('../locales/' + locale + '.json')

  function scrollToTop() {
    const isBrowser = () => typeof window !== 'undefined'
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // set value to input
  function putValue(value: string) {
    refSearchInput.current.value = value
    refSearchInput.current.focus()
    scrollToTop()
  }

  // viewport
  function useWindowSize() {
    // https://stackoverflow.com/questions/63406435/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
  }
  const sizeWindow = useWindowSize()

  // mobile viewport
  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow.width <= 940) {
        setIsMobileViewport(true)
      } else {
        setIsMobileViewport(false)
      }
    }
  }, [sizeWindow])

  // locale
  useEffect(() => {
    setData(searchData)
    // console.log('LOCALE + DATA SEARCH', locale, searchData)
    setTrends(data?.t?.trends)
  }, [searchData, locale, trends])

  useEffect(() => {
    setCountry(data?.country_code)
    window.localStorage.setItem('country', data?.country_code)
  }, [data])

  // theme
  useEffect(() => {
    if (theme) {
      const root = document.documentElement

      root.style.setProperty(
        '--color-bg-white',
        theme === 'dark' ? 'var(--color-dark-2)' : 'var(--color-white)'
      )
      root.style.setProperty(
        '--color-bg-grey',
        theme === 'dark' ? 'var(--color-dark)' : 'var(--color-grey)'
      )
      root.style.setProperty(
        '--color-text-black',
        theme === 'dark' ? 'var(--color-white)' : 'var(--color-black)'
      )
      root.style.setProperty(
        '--color-black-translucent',
        theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)'
      )
    }
  }, [theme])

  // sync with LocalStorage
  useEffect(() => {
    const storedLayout = window.localStorage.getItem('layout')
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedCategory = window.localStorage.getItem('category')
    const storedSearch = window.localStorage.getItem('search')

    storedLayout && setLayout(storedLayout)

    storedTheme ? setTheme(storedTheme) : setTheme(prefersDarkMode ? 'dark' : 'light')

    storedCategory ? setCategory(storedCategory) : window.localStorage.setItem('category', category)

    storedSearch ? setSearch(storedSearch) : window.localStorage.setItem('search', search)
  }, [category, search])

  return (
    <SearchContext.Provider
      value={{
        refSearchInput,
        refSearchTabs,
        putValue,
        inputValue,
        setInputValue,
        data,
        layout,
        setLayout,
        theme,
        setTheme,
        search,
        setSearch,
        searchUrl,
        setSearchUrl,
        category,
        setCategory,
        color,
        setColor,
        trends,
        setTrends,
        country,
        locale,
        permissionLocation,
        setPermissionLocation,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        isMobileViewport,
      }}>
      {children}
    </SearchContext.Provider>
  )
}

// export as Hook function
export function useSearch() {
  return useContext(SearchContext)
}
