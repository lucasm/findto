import React, { useRef, useCallback, useState, useEffect } from 'react'
import Style from '../../../styles/App.module.css'
import * as Icon from 'react-feather'
import { normalizeId } from '../../../utils/formats'
import { useSearch } from '../../../contexts/SearchContext'
import { useRouter } from 'next/router'
import SearchSuggestions from '../SearchSuggestions'
import SearchVoice from '../SearchVoice'
import { ISearchCategory, ISearch, ISearchChild } from '../../../interfaces/search'

export default function SearchApp() {
  const { locale } = useRouter()
  const {
    data,
    category,
    search,
    setSearch,
    searchUrl,
    setSearchUrl,
    color,
    setColor,
    refSearchInput,
    refSearchTabs,
    inputValue,
    setInputValue,
  } = useSearch()

  const refSendButton = useRef(null)
  const [isInputActive, setInputActive] = useState<boolean>(false)
  const [isChild, setIsChild] = useState<boolean>(false)

  // focus
  const inputFocus = useCallback(
    (event?: any) => {
      if (event) {
        event.preventDefault()
      }
      refSearchInput.current.focus()
    },
    [refSearchInput]
  )

  // reset
  const inputReset = (): void => {
    setInputValue('')
    setInputActive(false)
  }

  // get search provider
  function getSearchSource(id: string) {
    for (const i in data?.categories) {
      if (category == data?.categories[i].name) {
        for (const j in data?.categories[i]?.data) {
          if (id == normalizeId(data?.categories[i]?.data[j].name)) {
            return data?.categories[i]?.data[j]
          }
        }
      }
    }
  }

  // render child
  function renderChild(id: string) {
    const source = getSearchSource(id)
    return (
      <select className={Style.searchChild}>
        {source?.child?.map((item: ISearchChild, index: number) => (
          <option key={index}>{item.name}</option>
        ))}
      </select>
    )
  }

  // handle search
  const handleSearchProvider = (id: string) => {
    const searchSource = getSearchSource(id)

    setSearch(id)
    window.localStorage.setItem('search', id)
    setColor(searchSource?.color)
    inputFocus()

    // url
    const query: string = searchSource?.query ? '?' + searchSource?.query + '=' : '?q='
    const additional: string = searchSource?.additional ?? ''
    const credits: string = '&utm_source=findto_app'

    searchSource?.query === false
      ? setSearchUrl(searchSource?.action + inputValue + additional)
      : setSearchUrl(searchSource?.action + query + inputValue + additional + credits)

    // child options select
    setIsChild(searchSource?.child ? true : false)
  }

  // handle input active + value
  const handleInputChange = (event: any): void => {
    setInputValue(event.target.value)

    if (event.target.value !== '') {
      setInputActive(true)
    } else {
      setInputActive(false)
    }
  }

  // handle key enter
  const handleKey = (event: any): void => {
    if (event.key === 'Enter') {
      if (isInputActive) {
        refSendButton.current.click()
      } else {
        inputFocus(event)
      }
    }
  }

  // cache: state
  useEffect(() => {
    if (window.localStorage.getItem('search')) {
      handleSearchProvider(window.localStorage.getItem('search'))
    }
  }, [handleSearchProvider])

  return (
    <section id="searchApp">
      {/* Search */}
      <div className={Style.searchContainer} style={{ background: color }}>
        {/* Tabs */}
        <div id={Style.tabs}>
          {data?.categories?.map((itemCategory: ISearchCategory, index: number) => (
            <ul
              key={index}
              style={category == itemCategory.name ? { display: 'inline-block' } : null}>
              {itemCategory?.data.map((item: ISearch, index: number) => (
                <li key={index}>
                  <button
                    className={search == normalizeId(item.name) ? Style.activeLink : null}
                    onClick={() => handleSearchProvider(normalizeId(item.name))}
                    ref={
                      index === 0
                        ? (element) => {
                            refSearchTabs.current['tab_' + itemCategory.name] = element
                          }
                        : undefined
                    }>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className={Style.searchInputContainer}>
          {/* Image */}
          <figure
            className={Style.searchImg}
            style={{
              backgroundImage: 'url(/images/logos/' + search + '.svg)',
            }}>
            {/* Child */}
            {isChild && renderChild(search)}
          </figure>

          {/* Input */}
          <div className={Style.searchInput}>
            <label htmlFor="searchInput">Search input</label>
            <input
              ref={refSearchInput}
              type="text"
              id="searchInput"
              value={inputValue}
              aria-label="Search"
              className={Style.searchInput}
              placeholder={''}
              autoComplete="off"
              maxLength={100}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onKeyDown={handleKey}
              autoFocus
              required
            />

            {/* Button Search */}
            <a
              ref={refSendButton}
              href={searchUrl}
              target="_blank"
              onClick={isInputActive ? undefined : (event) => inputFocus(event)}
              rel="noopener"
              className={Style.searchButton}
              accessKey="q">
              <Icon.Search />
              Search
            </a>

            {/* Button Reset */}
            <button
              type="reset"
              onClick={inputReset}
              className={Style.resetButton}
              style={{ display: isInputActive ? 'inline-block' : 'none' }}>
              <Icon.X />
              Reset
            </button>
          </div>

          <SearchSuggestions locale={locale} term={inputValue} />
          <SearchVoice />
        </div>
      </div>
    </section>
  )
}
