'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { extractDomain, isValidUrl } from '@/utils/url'
import { ISearch } from '@/interfaces/search'

interface UserLocation {
  latitude: number | undefined
  longitude: number | undefined
}

// create Context for global state
interface ISearchContext {
  refSearchInput: React.RefObject<HTMLTextAreaElement | null>
  refButtons: React.RefObject<{ [key: string]: HTMLButtonElement | null }>
  putValue: (value: string) => void
  inputValue: string | undefined
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>
  searchSource: ISearch | undefined
  setSearchSource: React.Dispatch<React.SetStateAction<ISearch | undefined>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  domain: string
  setDomain: React.Dispatch<React.SetStateAction<string>>
  searchUrl: string
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  country: string | null
  locale: string
  permissionLocation: boolean
  setPermissionLocation: React.Dispatch<React.SetStateAction<boolean>>
  userLocation: UserLocation
  setUserLocation: React.Dispatch<React.SetStateAction<UserLocation>>
  isMobileViewport: boolean
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  sizeWindow: { width: number; height: number }
  inputFocus: () => void
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext)

// export as Provider
export function SearchProvider({
  children,
  isSidebarOpenDefault,
}: Readonly<{
  children: React.ReactNode
  isSidebarOpenDefault: boolean
}>) {
  const locale = useLocale()
  const c = useTranslations('country')
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')

  const [country, setCountry] = useState<string | null>(null)
  const [category, setCategory] = useState<string>('')
  const [searchSource, setSearchSource] = useState<ISearch | undefined>()
  const [search, setSearch] = useState<string>('')
  const [domain, setDomain] = useState<string>('')
  const [searchUrl, setSearchUrl] = useState<string>('')

  const [permissionLocation, setPermissionLocation] = useState<boolean>(false)
  const [userLocation, setUserLocation] = useState<UserLocation>({
    latitude: undefined,
    longitude: undefined,
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebarOpenDefault)
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false)

  const refSearchInput = useRef<HTMLTextAreaElement>(null)
  const refButtons = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [inputValue, setInputValue] = useState<string | undefined>(undefined)

  const inputFocus = useCallback(() => {
    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.focus()
    }
  }, [refSearchInput])
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

      const savedSidebarOpen = window.localStorage.getItem('isSidebarOpen')

      if (savedSidebarOpen !== null) {
        setIsSidebarOpen(savedSidebarOpen === 'true')
      }
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
      if (sizeWindow.width <= 1024) {
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
  //   useEffect(() => {
  //     const app = document.querySelector('.app')

  //     console.log('executou')

  //     if (isMobileViewport && isSidebarOpen) {
  //       app?.classList.remove('sidebar')
  //     }
  //     if (!isMobileViewport && isSidebarOpen) {
  //       app?.classList.add('sidebar')
  //     }
  //   }, [isSidebarOpen, isMobileViewport])

  // query
  useEffect(() => {
    if (query) {
      setInputValue(query)
    }
  }, [query])

  useEffect(() => {
    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
      }
    }
  }, [searchUrl])

  const contextValue = useMemo(
    () => ({
      refSearchInput,
      refButtons,
      putValue,
      inputValue,
      setInputValue,
      searchSource,
      setSearchSource,
      search,
      setSearch,
      searchUrl,
      setSearchUrl,
      domain,
      setDomain,
      category,
      setCategory,
      country,
      locale,
      permissionLocation,
      setPermissionLocation,
      userLocation,
      setUserLocation,
      isMobileViewport,
      isSidebarOpen,
      setIsSidebarOpen,
      sizeWindow,
      inputFocus,
    }),
    [
      refSearchInput,
      refButtons,
      putValue,
      inputValue,
      setInputValue,
      searchSource,
      setSearchSource,
      search,
      setSearch,
      searchUrl,
      setSearchUrl,
      domain,
      setDomain,
      category,
      setCategory,
      country,
      locale,
      permissionLocation,
      setPermissionLocation,
      userLocation,
      setUserLocation,
      isMobileViewport,
      isSidebarOpen,
      setIsSidebarOpen,
      sizeWindow,
      inputFocus,
    ]
  )

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

// export as Hook function
export function useSearch() {
  return useContext(SearchContext)
}
