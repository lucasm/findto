import Style from '../../../styles/App.module.css'
import StyleWidget from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { fetcher } from '../../../utils/http'
import { useSearch } from '../../../contexts/SearchContext'
import { Eye, AlertTriangle, ThumbsUp, Shield } from 'react-feather'
import { ReactNode, useEffect, useState } from 'react'

interface IApiPrivacy {
  name: string
  domains: []
  score: number
  previousScore: number
  trend: string
}

export default function WidgetPrivacy() {
  const { searchUrl } = useSearch()

  const [domain, setDomain] = useState<string | null>(null)
  const [icon, setIcon] = useState<ReactNode>(null)
  const [label, setLabel] = useState<string>()
  const [percents, setPercents] = useState<string[]>(['0', '100'])

  // function extractDomain(url: string) {
  //   try {
  //     const domain = new URL(url).hostname.replace(/^www\./, '')
  //     return domain
  //   } catch (error) {
  //     console.error('Erro ao extrair o domínio:', error.message)
  //     return null
  //   }
  // }

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
  function calcPercent(valor: number) {
    if (valor < 300 || valor > 850) {
      return ['0', '100']
    } else {
      const porcentagem = ((valor - 300) / (850 - 300)) * 100
      const sobraPorcentagem = 100 - porcentagem
      return [porcentagem.toFixed(0), sobraPorcentagem.toFixed(0)]
    }
  }
  function defineLabels(score: number) {
    if (score) {
      if (score >= 300 && score <= 579) {
        setLabel('Very poor')
        setIcon(<AlertTriangle />)
      }
      if (score >= 580 && score <= 669) {
        setLabel('Fair')
        setIcon(<AlertTriangle />)
      }
      if (score >= 670 && score <= 739) {
        setLabel('Good')
        setIcon(<ThumbsUp />)
      }
      if (score >= 740 && score <= 799) {
        setLabel('Very good')
        setIcon(<ThumbsUp />)
      }
      if (score >= 800 && score <= 850) {
        setLabel('Exceptional')
        setIcon(<Shield />)
      }
    } else {
      setLabel('Not found')
      setIcon(null)
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

  const { data, error, isLoading } = useSWR(domain ? '/api/privacy?url=' + domain : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  useEffect(() => {
    // console.log(data)

    defineLabels(data?.score)
    setPercents(calcPercent(data?.score))
  }, [data])

  return (
    <div className={Style.widget}>
      <h2>
        <Eye /> Privacy
      </h2>
      <div className={StyleWidget.container}>
        <div className={StyleWidget.donut}>
          <figure>{icon}</figure>
          <p>{isLoading ? '...' : label}</p>

          <svg width="100%" height="100%" viewBox="0 0 40 40" className={StyleWidget.donut}>
            <circle cx="20" cy="20" r="14.4" fill="rgb(255 255 255 / 5%)"></circle>
            <circle
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              strokeWidth="3.5"></circle>
            {/* for change donut make changes here in dasharray */}
            <circle
              className={StyleWidget.donutSegment}
              cx="20"
              cy="20"
              r="15.91549430918954"
              fill="transparent"
              strokeWidth="3.5"
              strokeDasharray={data ? percents[0] + ' ' + percents[1] : '0 100'}
              strokeDashoffset="25"
              stroke="rgb(255 255 255 / 30%)"
              rx="250"></circle>
            <g>
              <text y="50%" transform="translate(0, 8.5)">
                <tspan x="50%" textAnchor="middle" className={StyleWidget.donutPercent}>
                  {data ? percents[0] : ''}
                </tspan>
              </text>
            </g>
          </svg>
        </div>

        {error && <div>Score not found to {domain}</div>}
      </div>
    </div>
  )
}
