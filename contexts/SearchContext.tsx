import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

// create Context for global states
const SearchContext = createContext<any>({})

// export as Provider
export function SearchContextProvider({ children }) {
  // default states
  const { locale, pathname } = useRouter()
  const [data, setData] = useState<any>({})
  const [layout, setLayout] = useState<string>('2')
  const [theme, setTheme] = useState<string>('light')
  const [category, setCategory] = useState<string>('Web')
  const [search, setSearch] = useState<string>('google')
  const [searchUrl, setSearchUrl] = useState<string>('')
  const [color, setColor] = useState<string>('#fff')
  const [trends, setTrends] = useState<string>('Trends')
  const [country, setCountry] = useState<string>('US')
  const [inputValue, setInputValue] = useState<string>('')
  const refSearchInput = useRef(null)
  const refSearchTabs = useRef([])

  // load search data by file
  const searchData = require('../locales/' + locale + '.json')

  // scroll to top
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

  useEffect(() => {
    setData(searchData)
    // console.log('LOCALE + DATA SEARCH', locale, searchData)
    setTrends(data?.t?.trends)
  }, [searchData, locale, trends])

  useEffect(() => {
    setCountry(data?.country_code)
    window.localStorage.setItem('country', data?.country_code)
  }, [data])

  // keep Context updated with LocalStorage values
  useEffect(() => {
    const storageLayout = window.localStorage.getItem('layout')
    const storageTheme = window.localStorage.getItem('theme')
    const storageCategory = window.localStorage.getItem('category')
    const storageSearch = window.localStorage.getItem('search')

    storageLayout && setLayout(storageLayout)

    storageTheme && setTheme(storageTheme)

    storageCategory
      ? setCategory(storageCategory)
      : window.localStorage.setItem('category', category)

    storageSearch ? setSearch(storageSearch) : window.localStorage.setItem('search', search)
  }, [category, search])

  // main body color
  useEffect(() => {
    if (color) {
      document.body.style.setProperty('background-color', color)
    }

    if (pathname != '/') {
      document.body.style.setProperty('background-color', '#fff ')
    }
  }, [color, pathname])

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
      }}>
      {children}
    </SearchContext.Provider>
  )
}

// export as Hook function
export function useSearch() {
  return useContext(SearchContext)
}
