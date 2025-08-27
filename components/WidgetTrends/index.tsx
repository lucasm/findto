'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import useSWR from 'swr'

import Button from '@/components/Button'
import ButtonGeolocation from '@/components/ButtonGeolocation'
import Card from '@/components/Card'
import { IconFeedback } from '@/components/SvgIcons'
import WidgetTemplate from '@/components/WidgetTemplate'
import { useSearch } from '@/contexts/SearchContext'
import { ITrends } from '@/interfaces/trends'
import { fetcher } from '@/utils/http'

import Styles from './WidgetTrends.module.css'

interface Props {
  title: string
}

export default function SearchTrends({ title }: Readonly<Props>) {
  const t = useTranslations('t')
  const { category, putValue, country, locale, userLocation } = useSearch()

  // Chave dinâmica para SWR
  const swrKey = useMemo<string | null>(() => {
    const isWebish =
      category === 'Home' || category === 'AI' || category === 'Web'

    if (isWebish) {
      return country ? `/api/trends/web/?country=${country}` : null
    }

    if (category === 'Social') {
      return country ? `/api/trends/social/?country=${country}` : null
    }

    if (category === 'Videos') {
      return locale ? `/api/trends/videos/?country=${locale}` : null
    }

    if (category === 'Image') {
      return `/api/trends/images`
    }

    if (category === 'Music') {
      return country ? `/api/trends/audio?country=${country}` : null
    }

    if (category === 'Shopping') {
      return country ? `/api/trends/shopping?country=${country}` : null
    }

    if (category === 'Local') {
      const { latitude, longitude } = userLocation
      if (latitude && longitude) {
        return `/api/trends/local?latitude=${latitude}&longitude=${longitude}&language=${locale}`
      }
      return null
    }

    if (category === 'Academic') {
      return country ? `/api/trends/academic?country=${country}` : null
    }

    if (category === 'Code') {
      return `/api/trends/code`
    }

    if (category === 'Job') {
      return country ? `/api/trends/jobs?country=${country}` : null
    }

    if (category === 'News') {
      return country ? `/api/trends/news?country=${country}` : null
    }

    if (category === 'Finance') {
      return country ? `/api/trends/finance?country=${country}` : null
    }

    if (category === 'Legal') {
      return country ? `/api/trends/legal?country=${country}` : null
    }

    if (category === 'Apps') {
      return country ? `/api/trends/apps?country=${country}` : null
    }

    if (category === 'Games') {
      // Mantém a exigência de `country` como no seu código original
      return country ? `/api/trends/games` : null
    }

    return null
  }, [category, country, locale, userLocation])

  // Opções específicas (ex.: Local não revalida ao focar)
  const swrOptions =
    category === 'Local' ? { revalidateOnFocus: false } : undefined

  const { data: dataTrends, error: errorTrends } = useSWR<ITrends>(
    swrKey,
    fetcher,
    swrOptions
  )

  const classNameContainer = useMemo(() => {
    const base = [Styles.container]

    const grid4 =
      category === 'Videos' ||
      category === 'Image' ||
      category === 'Music' ||
      category === 'Games'
    const isApps = category === 'Apps'
    const isShopping = category === 'Shopping'
    const isCode = category === 'Code'
    const isLocal = category === 'Local'
    const isNews = category === 'News' || category === 'Finance'

    if (grid4) base.push(Styles.grid4)
    if (isApps) base.push(Styles.grid6, Styles.trendsApps)
    if (isShopping) base.push(Styles.grid4, Styles.trendsShopping)
    if (isCode) base.push(Styles.grid2, Styles.trendsCode)
    if (isLocal) base.push(Styles.grid2, Styles.trendsLocal)
    if (isNews) base.push(Styles.grid2, Styles.trendsNews)

    return base.join(' ')
  }, [category])

  const flexDirection = useMemo<'row' | 'column'>(() => {
    const isColumn =
      category === 'Videos' ||
      category === 'Image' ||
      category === 'Music' ||
      category === 'Games' ||
      category === 'Shopping' ||
      category === 'Apps'
    return isColumn ? 'column' : 'row'
  }, [category])

  if (dataTrends || category === 'Local') {
    const credits = dataTrends?.credits_title
      ? {
          title: dataTrends.credits_title ?? '',
          url: dataTrends.credits_url ?? '',
        }
      : undefined

    return (
      <WidgetTemplate title={title || t('trends')} credits={credits}>
        {category === 'Local' && <ButtonGeolocation />}

        <ul className={classNameContainer}>
          {dataTrends?.data?.map((item, index) => (
            <li key={`${item?.title}-${index}`}>
              <Card
                title={item.title}
                author={(index + 1).toString()}
                imageUrl={item.image}
                onClick={() =>
                  item.url
                    ? window.open(item.url, '_blank')
                    : putValue(item.title)
                }
                flexDirection={flexDirection}
              />
            </li>
          ))}
        </ul>
      </WidgetTemplate>
    )
  }

  if (errorTrends) {
    return (
      <WidgetTemplate title={title || t('trends')}>
        <Button
          color="black"
          url={`mailto:feedback@findto.app?subject=Error on API of category ${category}`}>
          <>
            <IconFeedback />
            {t('feedback.title') + ' API ' + category}
          </>
        </Button>
      </WidgetTemplate>
    )
  }

  return null
}
