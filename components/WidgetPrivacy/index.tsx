'use client'
import { useEffect, useRef, useState } from 'react'
import Styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import useSWR from 'swr'
import { useSearch } from '@/contexts/SearchContext'
import { fetcher } from '@/utils/http'
import { extractDomain, isValidUrl } from '@/utils/url'
import Donut from '@/components/Donut'
import WidgetDropdown from '@/components/WidgetDropdown'
import Loader from '../Loader'

interface IApiPrivacy {
  name: string
  domains: []
  score: number
  previousScore: number
  trend: string
}
type DivProps = React.HTMLAttributes<HTMLDivElement>

export default function WidgetPrivacy({ className = '', ...props }: DivProps) {
  const { searchUrl } = useSearch()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [domain, setDomain] = useState<string | null>(null)
  const [percents, setPercents] = useState<string[]>(['100', '0'])

  useEffect(() => {
    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
      }
    }
  }, [isOpen, searchUrl])

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
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
    }

    return ['100', '0']
  }
  const renderLabel = (score: number) => {
    if (score && typeof score === 'number') {
      if (score >= 300 && score <= 579) {
        return 'very poor'
      }
      if (score >= 580 && score <= 669) {
        return 'fair'
      }
      if (score >= 670 && score <= 739) {
        return 'good'
      }
      if (score >= 740 && score <= 799) {
        return 'very good'
      }
      if (score >= 800 && score <= 850) {
        return 'exceptional'
      }
    } else {
      return 'unavailable'
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
      setPercents(
        definePercents(dataPrivacy?.score ?? dataPrivacy?.previousScore)
      )
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
    <WidgetDropdown
      title="Privacy"
      //   icon={<IconShield />}
      isWidgetOpen={(state) => setIsOpen(state)}
      credits={{
        title: 'Privacy Monitor',
        url: 'https://www.privacymonitor.com/',
      }}
      className={className}
      {...props}>
      <div className={Styles.container} ref={containerRef}>
        {isOpen && (
          <div className={Styles.container}>
            {!dataPrivacy && !errorPrivacy && <Loader />}

            {dataPrivacy && (
              <>
                <Donut
                  percent={percents[0]}
                  percentRest={percents[1]}
                  showPercent={dataPrivacy ? true : false}
                />
                <h3>
                  {'Privacy level: '}
                  {renderLabel(
                    dataPrivacy?.score ?? dataPrivacy?.previousScore
                  )}
                </h3>
              </>
            )}

            {errorPrivacy && (
              <>
                <Donut percent="100" percentRest="0" showPercent={false} />
                <h3>
                  Ops, {domain} {" hasn't been analyzed yet"}
                </h3>
              </>
            )}
          </div>
        )}
      </div>
    </WidgetDropdown>
  )
}
