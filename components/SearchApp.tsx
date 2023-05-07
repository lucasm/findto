import React, { useRef, useCallback, useState, useEffect } from 'react'
import Style from '../styles/App.module.css'
import * as Icon from 'react-feather'
import { normalizeId } from '../utils/formats'
import { useSearch } from '../contexts/SearchContext'
import { useRouter } from 'next/router'
import SearchSuggestions from './SearchSuggestions'
import { ISearchCategory, ISearch, ISearchChild } from '../types/search'

export default function SearchApp() {
  const { locale, locales, defaultLocale } = useRouter()
  const {
    data,
    category,
    search,
    setSearch,
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
  const [searchUrl, setSearchUrl] = useState<string>('')

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

  // get search source
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
  const handleSearchSource = (id: string) => {
    const searchSource = getSearchSource(id)

    setSearch(id)
    window.localStorage.setItem('search', id)
    setColor(searchSource?.color)
    inputFocus()

    // url
    const urlQuery: string = searchSource?.query ? '?' + searchSource?.query + '=' : '?q='
    const urlAdditional: string = searchSource?.additional ? searchSource?.additional : ''
    const urlSource: string = '&utm_source=findto_app'

    if (searchSource?.query === false) {
      setSearchUrl(searchSource?.action + inputValue + urlAdditional)
    } else {
      setSearchUrl(searchSource?.action + urlQuery + inputValue + urlAdditional + urlSource)
    }

    // child
    if (searchSource?.child) {
      setIsChild(true)
    } else {
      setIsChild(false)
    }
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

  // state
  useEffect(() => {
    if (window.localStorage.getItem('search')) {
      handleSearchSource(window.localStorage.getItem('search'))
    }
  }, [handleSearchSource])

  return (
    <section>
      <div id="searchApp">
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
                    onClick={() => handleSearchSource(normalizeId(item.name))}
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

        {/* Search */}
        <div className={Style.searchContainer}>
          <figure
            className={Style.searchImg}
            style={{
              backgroundImage: 'url(/images/logos/' + search + '.svg)',
            }}>
            {/* Child */}
            {isChild ? renderChild(search) : null}
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

            {/* Button Send */}
            <a
              ref={refSendButton}
              href={searchUrl}
              target="_blank"
              onClick={isInputActive ? undefined : (event) => inputFocus(event)}
              rel="noopener"
              className={Style.searchButton}
              accessKey="q">
              <Icon.Search />
              Send
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

          {/* Button Voice */}
          {/* onClick="reco.toggleStartStop(); openVoiceTranscript()" */}
          {/* <div>
            <button
              id="voice-button"
              className={Style.voiceButton}
              accessKey="2"
              aria-label="Voice search"
              title="Voice search">
              <Icon.Mic />
              Voice
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
