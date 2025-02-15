'use client'

import { useEffect, useState } from 'react'
import Style from './WidgetCarbon.module.css'
import useSWR from 'swr'
import { useTranslations } from 'next-intl'
import { fetcher } from '@/utils/http'
import { extractDomain, isValidUrl } from '@/utils/url'
import { useSearch } from '@/contexts/SearchContext'
import { IconCarbon } from '@/components/SvgIcons'
import Donut from '@/components/Donut'
import WidgetDropdown from '@/components/WidgetDropdown'
import Loader from '../Loader'

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

type DivProps = React.HTMLAttributes<HTMLDivElement>

export default function WidgetCarbon({ className = '', ...props }: DivProps) {
  const { searchUrl, search } = useSearch()
  const t = useTranslations('t')

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [domain, setDomain] = useState<string | null>(null)
  const [percents, setPercents] = useState<string[]>(['30', '70'])

  useEffect(() => {
    if (searchUrl) {
      if (isValidUrl(searchUrl)) {
        setDomain(extractDomain(searchUrl))
      }
    }
  }, [isOpen, searchUrl])

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

  return (
    <WidgetDropdown
      title={t('widgetCarbon.title') ?? 'Carbon'}
      icon={<IconCarbon />}
      isWidgetOpen={(state) => setIsOpen(state)}
      credits={{
        title: 'Website Carbon',
        url: 'https://www.websitecarbon.com',
      }}
      className={className}
      {...props}>
      <div className={Style.container}>
        {!dataCarbon && !errorCarbon && <Loader />}

        {dataCarbon && (
          <>
            <h4>{'* cleaner than other web pages'}</h4>

            <Donut
              percent={percents[0]}
              percentRest={percents[1]}
              showPercent={dataCarbon ? true : false}
            />

            <h3>
              {search}
              {' has '}
              {dataCarbon?.statistics?.co2?.grid?.grams
                ? dataCarbon?.statistics?.co2?.grid?.grams.toFixed(2) + 'g '
                : '?'}
              {dataCarbon?.statistics?.co2?.grid?.grams &&
                'of carbon per visit'}
            </h3>

            <h4>{dataCarbon?.green ? 'Sustainable energy' : 'Dirty energy'}</h4>
          </>
        )}

        {errorCarbon && (
          <h3>
            Ops, {domain} {"hasn't been analyzed yet"}
          </h3>
        )}
      </div>
    </WidgetDropdown>
  )
}
