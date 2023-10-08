import { useEffect, useRef, useState } from 'react'
import Styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../utils/http'
import { useSearch } from '../../../contexts/SearchContext'
import { IconShield } from '../SvgIcons'

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
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [domain, setDomain] = useState<string | null>(null)
  const [label, setLabel] = useState<string>()
  const [percents, setPercents] = useState<string[]>(['30', '70'])

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }
  const handleOutsideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  function isValidUrl(url: string) {
    try {
      new URL(url)
      return true
    } catch (_) {
      return false
    }
  }
  function extractDomain(url: string) {
    let hostname

    // find & remove protocol (http, ftp...) and get hostname
    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2]
    } else {
      hostname = url.split('/')[0]
    }

    // find & remove port number
    hostname = hostname.split(':')[0]

    // find & remove "?"
    hostname = hostname.split('?')[0]

    // find & remove "www"
    hostname = hostname.replace(/^www\./, '')

    // check filter
    const listDomains = ['.com.br', '.co.uk']

    if (!listDomains.some((item) => url.includes(item))) {
      let hostnames = hostname.split('.')
      hostname = hostnames[hostnames.length - 2] + '.' + hostnames[hostnames.length - 1]
    }

    return hostname
  }
  function definePercents(valor: number) {
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
  function defineLabels(score: number) {
    if (score) {
      if (score >= 300 && score <= 579) {
        setLabel(data?.t?.privacyScore[0] ?? 'very poor')
      }
      if (score >= 580 && score <= 669) {
        setLabel(data?.t?.privacyScore[1] ?? 'fair')
      }
      if (score >= 670 && score <= 739) {
        setLabel(data?.t?.privacyScore[2] ?? 'good')
      }
      if (score >= 740 && score <= 799) {
        setLabel(data?.t?.privacyScore[3] ?? 'very good')
      }
      if (score >= 800 && score <= 850) {
        setLabel(data?.t?.privacyScore[4] ?? 'exceptional')
      }
    } else {
      setLabel(data?.t?.privacyScore[5] ?? 'unavailable')
    }
  }
  function usePrivacy() {
    const { data, error } = useSWR<IApiPrivacy>(
      domain ? '/api/privacy?url=' + domain : null,
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

    return {
      dataPrivacy: data,
      isLoadingPrivacy: !error && !data,
      isErrorPrivacy: error,
    }
  }
  const { dataPrivacy, isLoadingPrivacy, isErrorPrivacy } = usePrivacy()

  useEffect(() => {
    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
        // console.log('domain', searchUrl)
      }
    }
  }, [searchUrl])

  useEffect(() => {
    defineLabels(dataPrivacy?.score ?? dataPrivacy?.previousScore)
    setPercents(definePercents(dataPrivacy?.score ?? dataPrivacy?.previousScore))
  }, [dataPrivacy])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <div className={Styles.container} ref={dropdownRef}>
      <button onClick={handleButtonClick} aria-expanded={isOpen}>
        <IconShield />
        {data?.t?.privacy ?? 'Privacy'}
        {': '}
        {dataPrivacy ? percents[0] + '%' : '---'}{' '}
      </button>

      {isOpen && (
        <div className={Styles.containerDropdown}>
          <div className={Styles.donut}>
            <svg width="100%" height="100%" viewBox="0 0 40 40" className={Styles.donut}>
              {/* for change donut, change dasharray */}
              <circle
                className={Styles.donutSegment}
                cx="20"
                cy="20"
                r="16"
                fill="transparent"
                stroke="#000"
                strokeWidth="2.5"
                strokeDasharray={percents[0] + ' ' + percents[1]}
                strokeDashoffset="25"
                strokeLinecap="round"
                rx="250"></circle>
              <g>
                <text y="50%" x="50%" transform="translate(0, 2)">
                  <tspan textAnchor="middle" className={Styles.donutPercent}>
                    {dataPrivacy ? percents[0] : '?'}
                  </tspan>
                  {dataPrivacy && <tspan className={Styles.donutPercentSymbol}>%</tspan>}
                </text>
              </g>
            </svg>
          </div>

          {isLoadingPrivacy && <h3>...</h3>}

          {dataPrivacy && (
            <h3>
              {data?.t?.privacy ?? 'Privacy'}
              {':'} {label}
            </h3>
          )}

          {isErrorPrivacy && (
            <h3>
              Ops, {domain} {data?.t?.privacyScore[6] ?? "hasn't been analyzed yet"}
            </h3>
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
