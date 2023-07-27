import styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../utils/http'
import { useSearch } from '../../../contexts/SearchContext'
import { Shield, Eye, AlertTriangle, ThumbsUp } from 'react-feather'
import { useEffect, useState } from 'react'
import WidgetContainer from '../WidgetContainer'

interface IApiPrivacy {
  name: string
  domains: []
  score: number
  previousScore: number
  trend: string
}

export default function WidgetPrivacy() {
  const { data, searchUrl } = useSearch()

  const [domain, setDomain] = useState<string | null>(null)
  const [label, setLabel] = useState<string>()
  const [percents, setPercents] = useState<string[]>(['30', '70'])

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
      return ['30', '70']
    }
  }
  function defineLabels(score: number) {
    if (score) {
      if (score >= 300 && score <= 579) {
        setLabel('Very Poor')
      }
      if (score >= 580 && score <= 669) {
        setLabel('Fair')
      }
      if (score >= 670 && score <= 739) {
        setLabel('Good')
      }
      if (score >= 740 && score <= 799) {
        setLabel('Very Good')
      }
      if (score >= 800 && score <= 850) {
        setLabel('Exceptional')
      }
    } else {
      setLabel('Unavailable')
    }
  }

  useEffect(() => {
    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
        console.log('domain', searchUrl)
      }
    }
  }, [searchUrl])

  function usePrivacy() {
    const { data, error } = useSWR<IApiPrivacy>(
      domain ? '/api/privacy?url=' + domain : null,
      fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
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
    // console.log(dataPrivacy)
    defineLabels(dataPrivacy?.score)
    setPercents(definePercents(dataPrivacy?.score))
  }, [dataPrivacy])

  return (
    <WidgetContainer
      title={data?.t?.privacy ?? 'Privacy'}
      icon={<Shield />}
      creditTitle="Privacy Monitor"
      creditUrl="https://www.privacymonitor.com/?utm_source=findto_app">
      <div className={styles.container}>
        <div className={styles.donut}>
          <svg width="100%" height="100%" viewBox="0 0 40 40" className={styles.donut}>
            <circle cx="20" cy="20" r="15" fill="rgb(0 0 0 / 2.5%)"></circle>
            {/* for change donut, change dasharray */}
            <circle
              className={styles.donutSegment}
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              stroke="#000"
              strokeWidth="2"
              strokeDasharray={percents[0] + ' ' + percents[1]}
              strokeDashoffset="25"
              strokeLinecap="round"
              rx="250"></circle>
            <g>
              <text y="50%" x="50%" transform="translate(0, 1.5)">
                <tspan textAnchor="middle" className={styles.donutPercent}>
                  {dataPrivacy ? percents[0] : '?'}
                </tspan>
                {dataPrivacy && <tspan className={styles.donutPercentSymbol}>%</tspan>}
              </text>
            </g>
          </svg>
        </div>

        <p>{isLoadingPrivacy ? '...' : label}</p>
        {/* {dataPrivacy && <p>{domain}</p>} */}
        {/* {isErrorPrivacy && <p> Error {domain}</p>} */}
      </div>
    </WidgetContainer>
  )
}
