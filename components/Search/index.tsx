'use client'

import { useRef, useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import Style from './Search.module.css'
import { normalizeId } from '@/utils/formats'
import { useSearch } from '@/contexts/SearchContext'
import { IconClose, IconSend } from '@/components/SvgIcons'
import SearchSuggestions from '@/components/SearchSuggestions'
import SearchVoice from '@/components/SearchVoice'
import Tooltip from '@/components/Tooltip'
import SearchTitle from '@/components/SearchTitle'
import { ISearchCategory, ISearch, ISearchChild } from '@/interfaces/search'
import Welcome from '../Welcome'
import SearchOptions from '../SearchOptions'
import { useTheme } from 'next-themes'

interface Props {
  selectedCategory: ISearchCategory
}

export default function Search({ selectedCategory }: Readonly<Props>) {
  const locale = useLocale()
  const t = useTranslations('t')
  const { resolvedTheme } = useTheme()
  const searchParams = useSearchParams()
  const query = searchParams?.get('q')

  const {
    setCategory,
    setSearch,
    searchUrl,
    setSearchUrl,
    inputValue,
    setInputValue,
    setTitleTrends,
    isMobileViewport,
    refSearchInput,
    refButtons,
  } = useSearch()

  const refSearchButton = useRef<HTMLAnchorElement>(null)
  const [searchSource, setSearchSource] = useState<ISearch>()
  const [isValid, setIsValid] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchName = selectedCategory?.name_translated || selectedCategory?.name

  const handleResize = () => {
    if (refSearchInput) {
      refSearchInput.current.style.height = 'auto'
    }
  }
  const handleFocus = () => {
    if (refSearchInput.current) {
      refSearchInput.current.focus()
    }
  }
  const handleReset = () => {
    setInputValue('')
    setIsValid(false)
    handleResize()
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
  const handleSelectedSource = (id: string) => {
    const source = selectedCategory.data?.find(
      (item) => normalizeId(item.name) === id
    )
    setSearchSource(source)

    setSearch(id)
    window.localStorage.setItem('search', id)

    handleFocus()
  }
  const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
    setIsValid(event.target.value !== '')

    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }

  const searchPlaceholder = () => {
    // t('search') + ' ' + searchSource?.name || ''

    if (searchSource?.name) {
      return t('placeholder') + ' ' + searchSource?.name
    }

    return t('placeholder')
  }

  // resize
  useEffect(() => {
    if (isMobileViewport) {
      handleResize()
    }
  }, [isMobileViewport])

  // query
  useEffect(() => {
    if (query) {
      setInputValue(query)
    }
  }, [query])

  // url
  useEffect(() => {
    const additional = searchSource?.additional ?? ''
    const action = searchSource?.action

    if (action) {
      setSearchUrl(`${action}${encodeURIComponent(inputValue)}${additional}`)
    }
  }, [inputValue, searchSource])

  // initial state
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory?.name)
      setTitleTrends(selectedCategory?.name_trends)

      // window.localStorage.setItem('category', selectedCategory?.name)
      // const storedSource = window.localStorage.getItem('search')

      const sourceId = normalizeId(selectedCategory?.data[0]?.name)

      handleSelectedSource(sourceId)
      refButtons?.current?.['button_' + sourceId]?.click()
    }
  }, [selectedCategory])

  // focus
  useEffect(() => {
    if (!isFocused) {
      setTimeout(() => {
        handleFocus()
        setIsFocused(true)
      }, 0)
    }
  }, [isFocused, refSearchInput])

  return (
    <section className={Style.container}>
      <div className={Style.searchContainer2}>
        {/* <div>
          <WidgetCarbon />
          <WidgetPrivacy />
        </div> */}

        <SearchTitle>
          <div>
            {selectedCategory?.name == 'Home' ? (
              <Welcome />
            ) : (
              <h1>{searchName}</h1>
            )}
          </div>
          <div>
            <h2>{t('componentWelcome.whatDoYouWant')}</h2>
          </div>
        </SearchTitle>

        {/* Input */}
        <div className={Style.searchInputContainer}>
          <div className={Style.searchInput}>
            {/* <div>
              <figure
                className={Style.searchLogo}
                style={{
                  backgroundImage: searchSource?.name
                    ? 'url(/images/logos/' +
                      normalizeId(searchSource?.name) +
                      '.svg)'
                    : undefined,
                }}></figure>
            </div> */}

            <div className={Style.textareaContainer}>
              <label
                htmlFor="search"
                style={{ display: inputValue != '' ? 'none' : 'flex' }}>
                {t('search') + ' ' + searchSource?.name}
              </label>

              <textarea
                id="search"
                ref={refSearchInput}
                value={inputValue}
                aria-label="Search"
                className={Style.searchInput}
                placeholder={searchPlaceholder()}
                autoComplete="off"
                maxLength={2000}
                rows={1}
                onChange={handleValue}
                onFocus={handleValue}
                onKeyDown={handleKeyEnter}
                required
              />

              <div className={Style.searchActions}>
                {/* Button Reset */}
                <Tooltip text={t('clear')} disable={isMobileViewport}>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className={Style.resetButton}
                    style={{ display: isValid ? 'flex' : 'none' }}>
                    <IconClose />
                    {t('clear')}
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* render Button Voice only if user ha no typed on input */}
            {!isValid && <SearchVoice />}

            {/* render Search Button only if user has typed on input */}
            {isValid && (
              <div>
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
                  style={{ opacity: isValid ? '1' : '.45' }}>
                  <IconSend />
                  {t('search')}
                </a>
              </div>
            )}
          </div>

          <SearchSuggestions locale={locale} term={inputValue} />
        </div>

        {/* Buttons */}
        <div className={Style.buttons}>
          <ul>
            {selectedCategory?.data.map((source, index) => (
              <li key={source?.name + index}>
                <button
                  className={
                    searchSource?.name === source.name
                      ? Style.buttonActive
                      : undefined
                  }
                  onClick={() => handleSelectedSource(normalizeId(source.name))}
                  ref={(element) => {
                    refButtons.current['button_' + normalizeId(source.name)] =
                      element
                  }}
                  translate="no">
                  <figure
                    style={{
                      backgroundImage: source?.name
                        ? 'url(/images/logos/' +
                          normalizeId(source?.name) +
                          '.svg)'
                        : undefined,
                      filter:
                        resolvedTheme === 'dark' &&
                        searchSource?.name === source.name
                          ? 'invert(1)'
                          : 'none',
                    }}></figure>

                  {source.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Child */}
        {searchSource?.child && (
          <SearchOptions
            options={searchSource?.child.map((item: ISearchChild) => ({
              label: item.name,
              value: item.action,
            }))}
            id={normalizeId(searchSource?.name)}
            label={searchSource?.name}
          />
        )}
      </div>
    </section>
  )
}
