import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { createContext, useContext, useState, useEffect, useRef } from 'react'

// create Context for global state
interface SearchContextType {
  refSearchInput: React.RefObject<HTMLTextAreaElement>
  refButtons: React.RefObject<{ [key: string]: HTMLButtonElement | null }>
  putValue: (value: string) => void
  inputValue: string | undefined
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  searchUrl: string
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  country: string | null
  locale: string
  permissionLocation: boolean
  setPermissionLocation: React.Dispatch<React.SetStateAction<boolean>>
  latitude: number | undefined
  setLatitude: React.Dispatch<React.SetStateAction<number | undefined>>
  longitude: number | undefined
  setLongitude: React.Dispatch<React.SetStateAction<number | undefined>>
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMobileViewport: boolean
  sizeWindow: { width: number; height: number }
  titleTrends: string
  setTitleTrends: React.Dispatch<React.SetStateAction<string>>
  inputFocus: () => void
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType)

// export as Provider
export function SearchProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale()
  const c = useTranslations('country')
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

  const refSearchInput = useRef<HTMLTextAreaElement>(null)
  const refButtons = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [inputValue, setInputValue] = useState<string | undefined>(undefined)

  const searchParams = useSearchParams()
  const query = searchParams?.get('q')

  const inputFocus = () => {
    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.focus()
    }
  }
  const scrollToTop = () => {
    const isBrowser = () => typeof window !== 'undefined'
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const putValue = (value: string) => {
    // Remove traços e apenas os espaços adjacentes ao traço
    const sanitizedValue: string = value
      .toLowerCase()
      .replace(/\s*-\s*/g, ' ')
      .replace(/[#:‑]/g, '')

    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.value = sanitizedValue
      inputElement.focus()
    }
    scrollToTop()
  }
  const useWindowSize = () => {
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

  const isClientSide = typeof window !== 'undefined'

  // LocalStorage: initial values
  useEffect(() => {
    setCountry(c('code'))

    if (isClientSide) {
      const savedInputValue = window.localStorage.getItem('inputValue')
      setInputValue(savedInputValue ? JSON.parse(savedInputValue) : '')
    }
  }, [])

  useEffect(() => {
    if (inputValue !== undefined) {
      window.localStorage.setItem('inputValue', JSON.stringify(inputValue))
    }
  }, [inputValue])

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

  // LocalStorage: search source
  useEffect(() => {
    if (isClientSide) {
      const storedSearch = window.localStorage.getItem('search')

      if (storedSearch) {
        setSearch(storedSearch)
      } else {
        window.localStorage.setItem('search', search)
      }
    }
  }, [category, search])

  // sidebar
  useEffect(() => {
    const sidebars = document.querySelectorAll('.sidebar')
    sidebars.forEach((sidebar) => {
      if (!isMobileViewport && isSidebarOpen) {
        sidebar.classList.remove('sidebarClosed')
      } else {
        sidebar.classList.add('sidebarClosed')
      }
    })
  }, [isSidebarOpen, isMobileViewport])

  // query
  useEffect(() => {
    if (query) {
      setInputValue(query)
    }
  }, [query])

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
