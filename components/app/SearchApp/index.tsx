import React, { useRef, useCallback, useState, useEffect, use } from 'react'
import Style from '../../../styles/App.module.css'
import { normalizeId } from '../../../utils/formats'
import { useSearch } from '../../../contexts/SearchContext'
import { useRouter } from 'next/router'
import SearchSuggestions from '../SearchSuggestions'
import SearchVoice from '../SearchVoice'
import { ISearchCategory, ISearch, ISearchChild } from '../../../interfaces/search'
import { IconClose, IconSend } from '../SvgIcons'
import Tooltip from '../Tooltip'

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
    isMobileViewport,
    setTitleTrends,
  } = useSearch()

  const refSendButton = useRef(null)
  const [isInputActive, setInputActive] = useState<boolean>(false)
  const [isChild, setIsChild] = useState<boolean>(false)
  const [lightColor, setLightColor] = useState<string>('#fff')
  const [title, setTitle] = useState<string>('Busca')

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
      <div className={Style.searchChild}>
        <label htmlFor="options">Select an option</label>
        <select id="options" onChange={handleOptionChange}>
          {source?.child?.map((item: ISearchChild, index: number) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
  // handle search
  const handleSearchProvider = (id: string) => {
    const searchSource = getSearchSource(id)

    setSearch(id)
    window.localStorage.setItem('search', id)
    setColor(searchSource?.color)
    !isMobileViewport && inputFocus()

    // url
    const query = searchSource?.query ? '?' + searchSource?.query + '=' : ''
    const additional = searchSource?.additional ?? ''
    const credits = '&utm_source=findto_app'

    searchSource?.query
      ? setSearchUrl(searchSource?.action + query + inputValue + additional + credits)
      : setSearchUrl(searchSource?.action + inputValue + additional)

    // options
    setIsChild(searchSource?.child ? true : false)
  }
  // handle input
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
    setInputActive(event.target.value !== '' ? true : false)
  }
  // handle key enter
  const handleKey = (event: any) => {
    if (event.key === 'Enter') {
      if (isInputActive) {
        refSendButton.current.click()
      } else {
        inputFocus(event)
      }
    }
  }
  const handleOptionChange = (event: any) => {
    console.log(data?.categories?.find((item) => item.name === category)?.data)
  }

  // cache: state
  useEffect(() => {
    const storedSearch = window.localStorage.getItem('search')

    storedSearch && handleSearchProvider(storedSearch)
  }, [handleSearchProvider])

  // color
  useEffect(() => {
    if (color) {
      const newColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
      )}, ${parseInt(color.slice(5, 7), 16)}, 0.8)`

      setLightColor(newColor)
    }
  }, [color])

  // title
  useEffect(() => {
    if (data && category) {
      const selected = data?.categories?.find((item) => item.name === category)
      setTitle(selected?.name_translated ?? category)
      setTitleTrends(selected?.name_trends)
    }
  }, [data, category])

  return (
    <section className={Style.searchContainer}>
      <div
        className={Style.searchContainer2}
        style={{
          backgroundColor: lightColor,
        }}>
        {/* Title */}
        <h2>{title}</h2>

        {/* Tabs */}
        <div className={Style.tabs}>
          {data?.categories?.map((itemCategory: ISearchCategory, index: number) => (
            <ul key={index} style={category == itemCategory.name ? { display: 'block' } : null}>
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
          <div className={Style.searchInput}>
            {/* Placeholder */}
            <div
              className={Style.searchPlaceholder}
              onClick={() => inputFocus()}
              style={{ display: inputValue != '' ? 'none' : 'flex' }}>
              {!isMobileViewport && <figcaption>{data?.t?.placeholder ?? 'Search on'}</figcaption>}
              <figure
                style={{
                  backgroundImage: 'url(/images/logos/' + search + '.svg)',
                }}></figure>
            </div>

            {/* Input */}
            <label htmlFor="search">{search ? 'Search on ' + search : 'Search input'}</label>
            <input
              id="search"
              ref={refSearchInput}
              type="text"
              value={inputValue}
              aria-label="Search"
              className={Style.searchInput}
              placeholder=""
              autoComplete="off"
              maxLength={100}
              onChange={handleInputChange}
              onFocus={handleInputChange}
              onKeyDown={handleKey}
              autoFocus
              required
            />

            <div className={Style.searchActions}>
              {/* Button Search */}
              <Tooltip text={data?.t?.search ?? 'Search'} disable={isMobileViewport}>
                <a
                  ref={refSendButton}
                  href={searchUrl}
                  target="_blank"
                  onClick={isInputActive ? undefined : (event) => inputFocus(event)}
                  rel="noopener"
                  className={Style.searchButton}
                  accessKey="q">
                  <IconSend />
                  Search
                </a>
              </Tooltip>

              {/* Options */}
              {!isMobileViewport && isChild && renderChild(search)}

              {/* Button Reset */}
              <Tooltip text={data?.t?.clear ?? 'Clear'} disable={isMobileViewport}>
                <button
                  type="reset"
                  onClick={inputReset}
                  className={Style.resetButton}
                  style={{ display: isInputActive ? 'inline-block' : 'none' }}>
                  <IconClose />
                  Clear
                </button>
              </Tooltip>
            </div>
          </div>

          <SearchSuggestions locale={locale} term={inputValue} />

          <div className={Style.footerActions}>
            <SearchVoice />
          </div>
        </div>
      </div>
    </section>
  )
}
