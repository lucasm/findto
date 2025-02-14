import { useLocale } from 'next-intl'
import { createContext, useContext, useState, useEffect, useRef } from 'react'

// create Context for global state
const SearchContext = createContext<any>({})

// export as Provider
export function SearchContextProvider({ children }: { children: any }) {
  const locale = useLocale()
  // load search sources file by locale
  const localeSearchSources = require('../locales/' + locale + '.json')
  const [country, setCountry] = useState<string | null>(null)
  const [category, setCategory] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [searchUrl, setSearchUrl] = useState<string>('')
  const [titleTrends, setTitleTrends] = useState<string>('')
  const [permissionLocation, setPermissionLocation] = useState<boolean>(false)
  const [latitude, setLatitude] = useState<number>()
  const [longitude, setLongitude] = useState<number>()

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false)

  const refSearchInput = useRef(null)
  const refButtons = useRef([])
  const [inputValue, setInputValue] = useState<string | undefined>(undefined)

  const inputFocus = () => {
    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.focus()
    }
  }

  useEffect(() => {
    // Lê o localStorage apenas quando o componente monta
    if (typeof window !== 'undefined') {
      const savedSearchValue = window.localStorage.getItem('inputValue')
      setInputValue(savedSearchValue ? JSON.parse(savedSearchValue) : '')
    }
  }, [])

  useEffect(() => {
    if (inputValue !== undefined) {
      window.localStorage.setItem('inputValue', JSON.stringify(inputValue))
    }
  }, [inputValue])

  function scrollToTop() {
    const isBrowser = () => typeof window !== 'undefined'
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function putValue(value: string) {
    // Remove traços e apenas os espaços adjacentes ao traço
    const sanitizedValue: string = value
      .replace(/\s*-\s*/g, ' ')
      .replace(/[#:‑]/g, '')

    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.value = sanitizedValue
      inputElement.focus()
    }
    scrollToTop()
  }
  function useWindowSize() {
    // https://stackoverflow.com/questions/63406435/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
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

  // country
  useEffect(() => {
    window.localStorage.setItem('country', localeSearchSources?.country_code)
  }, [localeSearchSources])

  // state: from local storage
  useEffect(() => {
    const countryStorage = localStorage.getItem('country')
    setCountry(countryStorage)
  }, [])

  // mobile viewport
  useEffect(() => {
    if (sizeWindow.width) {
      if (sizeWindow.width <= 768) {
        setIsMobileViewport(true)
      } else {
        setIsMobileViewport(false)
      }
    }
  }, [sizeWindow])

  // sync with LocalStorage
  useEffect(() => {
    const storedSearch = window.localStorage.getItem('search')

    if (storedSearch) {
      setSearch(storedSearch)
    } else {
      window.localStorage.setItem('search', search)
    }
  }, [category, search])

  // sidebar
  useEffect(() => {
    if (!isMobileViewport && isSidebarOpen) {
      document.body.style.marginLeft = '250px'
    } else {
      document.body.style.marginLeft = '0'
    }
  }, [isSidebarOpen, isMobileViewport])

  return (
    <SearchContext.Provider
      value={{
        refSearchInput,
        refButtons,
        putValue,
        inputValue,
        setInputValue,
        search,
        setSearch,
        searchUrl,
        setSearchUrl,
        category,
        setCategory,
        country,
        locale,
        permissionLocation,
        setPermissionLocation,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        isSidebarOpen,
        setIsSidebarOpen,
        isMobileViewport,
        sizeWindow,
        titleTrends,
        setTitleTrends,
        inputFocus,
      }}>
      {children}
    </SearchContext.Provider>
  )
}

// export as Hook function
export function useSearch() {
  return useContext(SearchContext)
}
