'use client'

import { useRef, useState, useEffect } from 'react'
import Style from './Search.module.css'
import { normalizeId } from '@/utils/formats'
import { useSearch } from '@/contexts/SearchContext'
import SearchTitle from '@/components/SearchTitle'
import { IconClose, IconSend } from '@/components/SvgIcons'
import SearchSuggestions from '@/components/SearchSuggestions'
import SearchVoice from '@/components/SearchVoice'
import Tooltip from '@/components/Tooltip'
import { ISearchCategory, ISearch, ISearchChild } from '@/interfaces/search'
import { useLocale, useTranslations } from 'next-intl'

export default function Search() {
  const locale = useLocale()
  const t = useTranslations('t')
  const {
    data,
    category,
    search,
    setSearch,
    searchUrl,
    setSearchUrl,
    refSearchInput,
    refSearchTabs,
    inputValue,
    setInputValue,
    isMobileViewport,
  } = useSearch()

  const refSearchButton = useRef<HTMLAnchorElement>(null)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isChild, setIsChild] = useState<boolean>(false)

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

  const getSearchSource = (id: string) => {
    const searchCategory = data?.find(
      (item: ISearchCategory) => item.name === category
    )
    const source = searchCategory?.data?.find(
      (item: ISearch) => normalizeId(item.name) === id
    )
    return source
  }
  const handleSearchSource = (id: string) => {
    const search = getSearchSource(id)

    setSearch(id)
    window.localStorage.setItem('search', id)

    const add = search?.additional ?? ''

    setSearchUrl(search?.action + inputValue + add)

    // options
    setIsChild(search?.child ? true : false)

    !isMobileViewport && handleFocus()
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
        refSearchButton.current?.click()
      } else {
        handleFocus()
      }
    }
  }
  const handleOptionChange = (event: any) => {
    console.log(
      data?.find((item: { name: any }) => item.name === category)?.data
    )
  }

  // cache
  useEffect(() => {
    const storedSource = window.localStorage.getItem('search')
    storedSource && handleSearchSource(storedSource)
  }, [handleSearchSource])

  // resize
  useEffect(() => {
    if (isMobileViewport) {
      handleResize()
    }
  }, [isMobileViewport])

  return (
    <section className={Style.searchContainer}>
      <div className={Style.searchContainer2}>
        <SearchTitle
          additionalLeftElement={
            !isMobileViewport && isChild && renderOptions(search)
          }
        />

        <div className={Style.searchInputContainer}>
          <div className={Style.searchInput}>
            {/* Placeholder */}
            <div
              className={Style.searchPlaceholder}
              onClick={handleFocus}
              style={{ display: inputValue != '' ? 'none' : 'flex' }}>
              {/* {!isMobileViewport && (
                  <figcaption>{t('placeholder')}</figcaption>
                )} */}
              <figure
                style={{
                  backgroundImage: 'url(/images/logos/' + search + '.svg)',
                }}></figure>
            </div>

            {/* Input */}
            <label htmlFor="search">
              {search ? 'Search ' + search : 'Search input'}
            </label>
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
              <Tooltip text={t('clear')} disable={isMobileViewport}>
                <button
                  type="reset"
                  onClick={handleReset}
                  className={Style.resetButton}
                  style={{ display: isValid ? 'inline-block' : 'none' }}>
                  <IconClose />
                  {t('clear')}
                </button>
              </Tooltip>

              {/* Button Voice */}
              <SearchVoice />

              {/* Button Search */}
              <Tooltip text={t('search')} disable={isMobileViewport}>
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
                  {t('search')}
                </a>
              </Tooltip>
            </div>
          </div>

          <SearchSuggestions locale={locale} term={inputValue} />
        </div>

        {/* Tabs */}
        <div className={Style.tabs}>
          {data?.map((itemCategory: ISearchCategory, index: number) => (
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
                    className={
                      search == normalizeId(item.name)
                        ? 'activeLink'
                        : undefined
                    }
                    onClick={() => handleSearchSource(normalizeId(item.name))}
                    ref={
                      index === 0
                        ? (element) => {
                            refSearchTabs.current['tab_' + itemCategory.name] =
                              element
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
      </div>
    </section>
  )
}
