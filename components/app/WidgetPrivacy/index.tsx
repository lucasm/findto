import { useEffect, useRef, useState } from 'react'
import Styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../utils/http'
import { useSearch } from '../../../contexts/SearchContext'
import { IconShield } from '../SvgIcons'
import { extractDomain, isValidUrl } from '../../../utils/url'
import Donut from '../Donut'

interface IApiPrivacy {
  name: string
  domains: []
  score: number
  previousScore: number
  trend: string
}

export default function WidgetPrivacy() {
  const { data, searchUrl } = useSearch()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [domain, setDomain] = useState<string | null>(null)
  const [percents, setPercents] = useState<string[]>(['100', '0'])

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
  const definePercents = (valor: number) => {
    if (valor) {
      if (valor > 300 || valor < 850) {
        const porcentagem = ((valor - 300) / (850 - 300)) * 100
        const sobraPorcentagem = 100 - porcentagem
        return [porcentagem.toFixed(0), sobraPorcentagem.toFixed(0)]
      }
    } else {
      return ['100', '0']
    }
  }
  const renderLabel = (score: number) => {
    if (score && typeof score === 'number') {
      if (score >= 300 && score <= 579) {
        return data?.t?.privacyScore[0] ?? 'very poor'
      }
      if (score >= 580 && score <= 669) {
        return data?.t?.privacyScore[1] ?? 'fair'
      }
      if (score >= 670 && score <= 739) {
        return data?.t?.privacyScore[2] ?? 'good'
      }
      if (score >= 740 && score <= 799) {
        return data?.t?.privacyScore[3] ?? 'very good'
      }
      if (score >= 800 && score <= 850) {
        return data?.t?.privacyScore[4] ?? 'exceptional'
      }
    } else {
      return data?.t?.privacyScore[5] ?? 'unavailable'
    }
  }
  const { data: dataPrivacy, error: errorPrivacy } = useSWR<IApiPrivacy>(
    isOpen && domain ? '/api/privacy?url=' + domain : null,
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
    if (dataPrivacy) {
      setPercents(definePercents(dataPrivacy?.score ?? dataPrivacy?.previousScore))
    }
  }, [dataPrivacy])

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
        <IconShield />
        {data?.t?.widgetPrivacy ?? 'Privacy level'}
      </button>

      {isOpen && (
        <div className={Styles.containerDropdown}>
          {!dataPrivacy && !errorPrivacy && <h3>...</h3>}

          {dataPrivacy && (
            <>
              <Donut
                percent={percents[0]}
                percentRest={percents[1]}
                showPercent={dataPrivacy ? true : false}
              />
              <h3>
                {data?.t?.privacyScore[7] ?? 'Privacy level'}
                {': '}
                {renderLabel(dataPrivacy?.score ?? dataPrivacy?.previousScore)}
              </h3>
            </>
          )}

          {errorPrivacy && (
            <>
              <Donut percent="100" percentRest="0" showPercent={false} />
              <h3>
                Ops, {domain} {data?.t?.privacyScore[6] ?? "hasn't been analyzed yet"}
              </h3>
            </>
          )}

          <p className={Styles.credits}>
            {data?.t?.powered ?? 'Powered by'}{' '}
            <a
              href="https://www.privacymonitor.com/?utm_source=findto_app"
              target="_blank"
              rel="noopener">
              Privacy Monitor
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
