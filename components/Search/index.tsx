'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'

import Alert from '@/components/Alert'
import SearchSourceOptions from '@/components/SearchSourceOptions'
import SearchSuggestions from '@/components/SearchSuggestions'
import SearchTitle from '@/components/SearchTitle'
import SearchVoice from '@/components/SearchVoice'
import { IconClose, IconSend } from '@/components/SvgIcons'
import Tooltip from '@/components/Tooltip'
import { useSearch } from '@/contexts/SearchContext'
import { ISearchCategory, ISearchChild } from '@/interfaces/search'
import { normalizeId } from '@/utils/formats'

import SearchSourceIcon from '../SearchSourceIcon'
import Style from './Search.module.css'

interface Props {
  selectedCategory: ISearchCategory
}

export default function Search({ selectedCategory }: Readonly<Props>) {
  const locale = useLocale()
  const t = useTranslations('t')

  const {
    setCategory,
    searchSource,
    setSearchSource,
    searchUrl,
    setSearchUrl,
    inputValue,
    setInputValue,
    isMobileViewport,
    refSearchInput,
    refButtons,
    inputFocus,
  } = useSearch()

  const refSearchButton = useRef<HTMLAnchorElement>(null)

  const [isValid, setIsValid] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchName = selectedCategory?.name_translated || selectedCategory?.name

  const handleResize = useCallback(() => {
    if (refSearchInput.current) {
      refSearchInput.current.style.height = 'auto'
    }
  }, [refSearchInput])

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
        inputFocus()
      }
    }
  }
  const handleSelectedSource = (id: string) => {
    const source = selectedCategory.data?.find(
      (item) => normalizeId(item.name) === id
    )

    if (source) {
      setSearchSource({ ...source, id: id })
      window.localStorage.setItem('search', id)
      inputFocus()
    }
  }
  const handleValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
    setIsValid(event.target.value !== '')

    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }
  const handlePlaceholder = () => {
    if (searchSource?.name) {
      return t('placeholder') + ' ' + searchSource?.name
    }

    return t('placeholder')
  }
  const handleShowWarnings = () => {
    if (selectedCategory?.name === 'Torrent') {
      return <Alert>{t('warnings.torrent')}</Alert>
    }

    if (selectedCategory?.name === 'Darknet') {
      return <Alert>{t('warnings.darknet')}</Alert>
    }
  }

  console.log(searchSource)

  // resize
  useEffect(() => {
    if (isMobileViewport) {
      handleResize()
    }
  }, [isMobileViewport])

  // url
  useEffect(() => {
    const additional = searchSource?.additional ?? ''
    const action = searchSource?.action
    const value = inputValue || ''

    if (action) {
      setSearchUrl(`${action}${encodeURIComponent(value)}${additional}`)
    }
  }, [inputValue, searchSource, setSearchUrl])

  // initial state
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory?.name)

      const sourceId = normalizeId(selectedCategory?.data[0]?.name)

      const storedSource = window.localStorage.getItem('search')

      const isStoredSourceAvailableOnCurrentCategory =
        selectedCategory?.data?.some(
          (item) => normalizeId(item.name) === storedSource
        )

      if (storedSource && isStoredSourceAvailableOnCurrentCategory) {
        handleSelectedSource(storedSource)
      } else {
        handleSelectedSource(sourceId)
        refButtons?.current?.['button_' + sourceId]?.click()
      }
    }
  }, [selectedCategory])

  // focus
  useEffect(() => {
    if (!isFocused) {
      setTimeout(() => {
        inputFocus()
        setIsFocused(true)
      }, 0)
    }
  }, [isFocused, refSearchInput, inputFocus])

  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <SearchTitle
          category={selectedCategory?.name}
          categoryTitle={searchName}
        />

        {/* Input */}
        <div className={Style.containerInput}>
          <div className={Style.input}>
            <div className={Style.textareaContainer}>
              <textarea
                id="search"
                ref={refSearchInput}
                value={inputValue}
                aria-label="Search"
                className={Style.input}
                placeholder={handlePlaceholder()}
                autoComplete="off"
                maxLength={2500}
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

            {/* Button Voice only if user ha NO typed on input */}
            {/* Button Search only if user has typed on input */}
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
                        inputFocus()
                      }
                }
                style={{
                  opacity: isValid ? '1' : '.45',
                  display: isValid ? 'inline-flex' : 'none',
                }}>
                <IconSend />
                {t('search')}
              </a>
            </div>

            <SearchVoice display={!isValid} />
          </div>

          <SearchSuggestions locale={locale} term={inputValue ?? ''} />
        </div>

        {/* Child */}
        {searchSource?.child && (
          <SearchSourceOptions
            options={searchSource?.child.map((item: ISearchChild) => ({
              label: item.name,
              value: item.action,
            }))}
            label={searchSource?.name}
          />
        )}

        {/* Search Source Buttons */}
        <div className={Style.buttons}>
          <ul>
            {selectedCategory?.data.map((source, index) => (
              <li key={source?.name + index}>
                <button
                  type="button"
                  translate="no"
                  className={
                    searchSource?.name === source.name
                      ? Style.buttonActive
                      : undefined
                  }
                  onClick={() => handleSelectedSource(normalizeId(source.name))}
                  ref={(element) => {
                    if (refButtons.current) {
                      refButtons.current['button_' + normalizeId(source.name)] =
                        element
                    }
                  }}>
                  <figure>
                    <SearchSourceIcon name={source?.name} />
                  </figure>
                  {source.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {handleShowWarnings()}
      </div>
    </section>
  )
}
