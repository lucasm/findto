'use client'

import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react'

import { ISearch } from '@/interfaces/search'
import { IUserLocation } from '@/interfaces/user'
import { extractDomain, isValidUrl } from '@/utils/url'

interface ISearchContext {
  refSearchInput: React.RefObject<HTMLTextAreaElement | null>
  refButtons: React.RefObject<{ [key: string]: HTMLButtonElement | null }>
  putValue: (value: string) => void
  inputValue: string | undefined
  setInputValue: React.Dispatch<React.SetStateAction<string | undefined>>
  searchSource: ISearch | undefined
  setSearchSource: React.Dispatch<React.SetStateAction<ISearch | undefined>>
  searchUrl: string
  setSearchUrl: React.Dispatch<React.SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  country: string | null
  locale: string
  permissionLocation: boolean
  setPermissionLocation: React.Dispatch<React.SetStateAction<boolean>>
  userLocation: IUserLocation
  setUserLocation: React.Dispatch<React.SetStateAction<IUserLocation>>
  isBrowserClientSide: boolean
  isMobileViewport: boolean
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  sizeWindow: { width: number; height: number }
  inputFocus: () => void
}
interface ISearchContextProvider {
  children: React.ReactNode
  isSidebarOpenDefault: boolean
}

// create Context for global state
const SearchContext = createContext<ISearchContext>({} as ISearchContext)

// export as Provider
export function SearchContextProvider({
  children,
  isSidebarOpenDefault,
}: Readonly<ISearchContextProvider>) {
  const locale = useLocale()
  const c = useTranslations('country')
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')

  const [country, setCountry] = useState<string | null>(null)
  const [category, setCategory] = useState<string>('')
  const [searchSource, setSearchSource] = useState<ISearch>()
  const [searchUrl, setSearchUrl] = useState<string>('')

  const [permissionLocation, setPermissionLocation] = useState<boolean>(false)
  const [userLocation, setUserLocation] = useState<IUserLocation>({
    latitude: undefined,
    longitude: undefined,
  })

  const isBrowserClientSide = typeof window !== 'undefined'
  const [isSidebarOpen, setIsSidebarOpen] = useState(isSidebarOpenDefault)
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false)

  const refSearchInput = useRef<HTMLTextAreaElement>(null)
  const refButtons = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [inputValue, setInputValue] = useState<string>()

  const inputFocus = useCallback(() => {
    const inputElement = refSearchInput.current as HTMLInputElement | null
    if (inputElement) {
      inputElement.focus()
    }
  }, [refSearchInput])
  const scrollToTop = () => {
    if (!isBrowserClientSide) return
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

  // LocalStorage: initial values
  useEffect(() => {
    setCountry(c('code'))

    if (isBrowserClientSide) {
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

  // isMobileViewport
  useEffect(() => {
    if (sizeWindow.width) {
      if (sizeWindow.width <= 1024) {
        setIsMobileViewport(true)
      } else {
        setIsMobileViewport(false)
      }
    }
  }, [sizeWindow])

  // query
  useEffect(() => {
    if (query) {
      setInputValue(query)
    }
  }, [query])

  // searchUrl
  useEffect(() => {
    if (searchUrl && isValidUrl(searchUrl) && searchSource) {
      setSearchSource({ ...searchSource, domain: extractDomain(searchUrl) })
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
      searchUrl,
      setSearchUrl,
      category,
      setCategory,
      country,
      locale,
      permissionLocation,
      setPermissionLocation,
      userLocation,
      setUserLocation,
      isBrowserClientSide,
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
      searchUrl,
      setSearchUrl,
      category,
      setCategory,
      country,
      locale,
      permissionLocation,
      setPermissionLocation,
      userLocation,
      setUserLocation,
      isBrowserClientSide,
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
