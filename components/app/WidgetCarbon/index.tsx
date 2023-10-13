import { useEffect, useRef, useState } from 'react'
import Styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../utils/http'
import { useSearch } from '../../../contexts/SearchContext'
import { IconLeaf } from '../SvgIcons'
import { extractDomain, isValidUrl } from '../../../utils/url'
import Donut from '../Donut'

interface IApiCarbon {
  url: string
  green: boolean
  bytes: number
  cleanerThan: number
  statistics: {
    adjustedBytes: number
    energy: number
    co2: {
      grid: {
        grams: number
        litres: number
      }
      renewable: {
        grams: number
        litres: number
      }
    }
  }
  timestamp: number
}

export default function WidgetCarbon() {
  const { data, searchUrl } = useSearch()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [label, setLabel] = useState<string>()
  const [domain, setDomain] = useState<string | null>(null)
  const [percents, setPercents] = useState<string[]>(['30', '70'])

  const handleClick = () => {
    setIsOpen(!isOpen)

    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
      }
    }
  }
  const handleOutsideClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const { data: dataCarbon, error: errorCarbon } = useSWR<IApiCarbon>(
    isOpen && domain ? '/api/carbon?url=' + searchUrl : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: true,
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
    }
  )

  useEffect(() => {
    if (dataCarbon) {
      const percent = (dataCarbon?.cleanerThan % 1).toFixed(2).slice(2)
      const resto = 100 - Number(percent)
      setPercents([percent, String(resto)])
    }
  }, [dataCarbon])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className={Styles.container} ref={containerRef}>
      <button
        onClick={handleClick}
        aria-expanded={isOpen}
        className={isOpen ? Styles.openedButton : ''}>
        <IconLeaf />
        {data?.t?.carbon ?? 'Carbon'}
      </button>

      {isOpen && (
        <div className={Styles.containerDropdown}>
          {!dataCarbon && !errorCarbon && <h3>...</h3>}

          {dataCarbon && (
            <>
              <Donut
                percent={percents[0]}
                percentRest={percents[1]}
                showPercent={dataCarbon ? true : false}
              />

              <h4>
                {'* '}
                {data?.t?.carbonScore[0] ?? 'cleaner than other web pages'}
              </h4>

              <h3>
                {dataCarbon?.statistics?.co2?.grid?.grams
                  ? dataCarbon?.statistics?.co2?.grid?.grams.toFixed(2) + 'g '
                  : '?'}

                {dataCarbon?.statistics?.co2?.grid?.grams &&
                  (data?.t?.carbonScore[1] ?? 'of carbon per visit')}
              </h3>

              <h4>
                {dataCarbon?.green
                  ? data?.t?.carbonScore[2] ?? 'Sustainable energy'
                  : data?.t?.carbonScore[3] ?? 'Dirty energy'}
              </h4>
            </>
          )}

          {errorCarbon && (
            <h3>
              Ops, {domain} {data?.t?.carbonScore[4] ?? "hasn't been analyzed yet"}
            </h3>
          )}

          <p className={Styles.credits}>
            {data?.t?.powered ?? 'Powered by'}{' '}
            <a
              href={'https://www.websitecarbon.com/?utm_source=findto_app'}
              target="_blank"
              rel="noopener">
              Website Carbon
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
