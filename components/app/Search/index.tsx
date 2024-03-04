import React, { useRef, useState, useEffect } from 'react'
import Style from '../../../styles/App.module.css'
import { normalizeId } from '../../../utils/formats'
import { useSearch } from '../../../contexts/SearchContext'
import { useRouter } from 'next/router'
import SearchSuggestions from '../SearchSuggestions'
import SearchVoice from '../SearchVoice'
import { ISearchCategory, ISearch, ISearchChild } from '../../../interfaces/search'
import { IconClose, IconSend } from '../SvgIcons'
import Tooltip from '../Tooltip'
import SearchHeader from '../SearchHeader'

export default function Search() {
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
  } = useSearch()

  const refSearchButton = useRef(null)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isChild, setIsChild] = useState<boolean>(false)
  const [lightColor, setLightColor] = useState<string>('transparent')

  const handleResize = () => {
    if (refSearchInput) {
      refSearchInput.current.style.height = 'auto'
    }
  }
  const handleFocus = () => {
    refSearchInput && refSearchInput.current.focus()
  }
  const handleReset = () => {
    setInputValue('')
    setIsValid(false)
    handleResize()
  }

  function getSearchSource(id: string) {
    const categories = data?.categories

    for (const i in categories) {
      if (category === categories[i].name) {
        for (const j in categories[i]?.data) {
          if (id === normalizeId(categories[i]?.data[j].name)) {
            return categories[i]?.data[j]
          }
        }
      }
    }

    return null
  }
  const handleSearchSource = (id: string) => {
    const searchSource = getSearchSource(id)

    setSearch(id)
    window.localStorage.setItem('search', id)
    setColor(searchSource?.color)
    !isMobileViewport && handleFocus()

    // url
    const action = searchSource?.action
    const additional = searchSource?.additional ?? ''

    setSearchUrl(
      action?.includes('?')
        ? action + inputValue + additional + '&utm_source=findto_app'
        : action + inputValue + additional
    )

    // options
    setIsChild(searchSource?.child ? true : false)
  }
  function renderOptions(id: string) {
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

  const handleValueChange = (event: any) => {
    setInputValue(event.target.value)
    setIsValid(event.target.value !== '' ? true : false)

    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }
  const handleKeyEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && event.shiftKey) {
      // prevents Enter from skipping a line without Shift
    } else if (event.key === 'Enter') {
      event.preventDefault()
      if (isValid) {
        refSearchButton.current.click()
      } else {
        handleFocus()
      }
    }
  }
  const handleOptionChange = (event: any) => {
    console.log(data?.categories?.find((item) => item.name === category)?.data)
  }

  // cache
  useEffect(() => {
    const storedSource = window.localStorage.getItem('search')
    storedSource && handleSearchSource(storedSource)
  }, [handleSearchSource])

  // color
  useEffect(() => {
    if (color) {
      const newColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
      )}, ${parseInt(color.slice(5, 7), 16)}, 0.65)`

      setLightColor(newColor)
    }
  }, [color])

  // resize
  useEffect(() => {
    if (isMobileViewport) {
      handleResize()
    }
  }, [isMobileViewport])

  return (
    <section className={Style.searchContainer}>
      <div
        className={Style.searchContainer2}
        style={{
          background: lightColor,
        }}>
        <SearchHeader
          additionalLeftElement={!isMobileViewport && isChild && renderOptions(search)}
        />

        {/* Tabs */}
        <div className={Style.tabs}>
          {data?.categories?.map((itemCategory: ISearchCategory, index: number) => (
            <ul
              key={index}
              style={{
                display:
                  category === itemCategory.name
                    ? isMobileViewport
                      ? 'inline-block'
                      : 'flex'
                    : 'none',
              }}>
              {itemCategory?.data.map((item: ISearch, index: number) => (
                <li key={index}>
                  <button
                    className={search == normalizeId(item.name) ? 'activeLink' : null}
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

        <div className={Style.searchInputContainer}>
          <div className={Style.searchInput}>
            {/* Placeholder */}
            <div
              className={Style.searchPlaceholder}
              onClick={handleFocus}
              style={{ display: inputValue != '' ? 'none' : 'flex' }}>
              {!isMobileViewport && <figcaption>{data?.t?.search ?? 'Search'}</figcaption>}
              <figure
                style={{
                  backgroundImage: 'url(/images/logos/' + search + '.svg)',
                }}></figure>
            </div>

            {/* Input */}
            <label htmlFor="search">{search ? 'Search ' + search : 'Search input'}</label>
            <textarea
              id="search"
              ref={refSearchInput}
              value={inputValue}
              aria-label="Search"
              className={Style.searchInput}
              placeholder=""
              autoComplete="off"
              maxLength={2000}
              rows={1}
              onChange={handleValueChange}
              onFocus={handleValueChange}
              onKeyDown={handleKeyEnter}
              autoFocus
              required
            />

            <div className={Style.searchActions}>
              {/* Button Reset */}
              <Tooltip text={data?.t?.clear ?? 'Clear'} disable={isMobileViewport}>
                <button
                  type="reset"
                  onClick={handleReset}
                  className={Style.resetButton}
                  style={{ display: isValid ? 'inline-block' : 'none' }}>
                  <IconClose />
                  Clear
                </button>
              </Tooltip>

              {/* Button Voice */}
              <SearchVoice />

              {/* Button Search */}
              <Tooltip text={data?.t?.search ?? 'Search'} disable={isMobileViewport}>
                <a
                  ref={refSearchButton}
                  className={Style.searchButton}
                  href={searchUrl}
                  target="_blank"
                  rel="noopener"
                  onClick={
                    isValid
                      ? undefined
                      : (event) => {
                          event.preventDefault()
                          handleFocus()
                        }
                  }
                  accessKey="s"
                  // style={{ opacity: isValid ? '1' : '.5' }}
                >
                  <IconSend />
                  Search
                </a>
              </Tooltip>
            </div>
          </div>

          <SearchSuggestions locale={locale} term={inputValue} />
        </div>
      </div>
    </section>
  )
}
