'use client'

import Styles from './WidgetTrends.module.css'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearch } from '@/contexts/SearchContext'
import useSWR from 'swr'
import { fetcher } from '@/utils/http'
import ButtonGeolocation from '@/components/ButtonGeolocation'
import WidgetTemplate from '@/components/WidgetTemplate'
import { ITrends } from '@/interfaces/trends'

interface Props {
  title: string
}

export default function SearchTrends({ title }: Readonly<Props>) {
  const t = useTranslations('t')
  const { category, putValue, country, locale, userLocation } = useSearch()
  const [dataTrends, setDataTrends] = useState<ITrends | null>(null)
  const [errorTrends, setErrorTrends] = useState<Error | null>(null)

  // Web
  function useApiWeb() {
    const isValidCategory =
      category === 'Home' || category === 'AI' || category === 'Web'

    const { data, error } = useSWR(
      !!country && isValidCategory
        ? `/api/trends/web/?country=${country}`
        : null,
      fetcher
    )

    return {
      dataWeb: data,
      errorWeb: error,
    }
  }
  const { dataWeb, errorWeb } = useApiWeb()

  // Social
  function useApiSocial() {
    const { data, error } = useSWR(
      () =>
        category === 'Social' ? `/api/trends/social/?country=${country}` : null,
      fetcher
    )

    return {
      dataSocial: data,
      errorSocial: error,
    }
  }
  const { dataSocial, errorSocial } = useApiSocial()

  // Videos
  function useApiVideos() {
    const { data, error } = useSWR(
      () =>
        locale && category === 'Videos'
          ? `/api/trends/videos/?country=${locale}`
          : null,
      fetcher
    )

    return {
      dataVideos: data,
      errorVideos: error,
    }
  }
  const { dataVideos, errorVideos } = useApiVideos()

  // Images
  function useApiImages() {
    const { data, error } = useSWR(
      category === 'Image' && `/api/trends/images`,
      fetcher
    )

    return {
      dataImages: data,
      errorImages: error,
    }
  }
  const { dataImages, errorImages } = useApiImages()

  // Music
  function useApiAudio() {
    const { data, error } = useSWR(
      country && category === 'Music' && `/api/trends/audio?country=${country}`,
      fetcher
    )

    return {
      dataAudio: data,
      errorAudio: error,
    }
  }
  const { dataAudio, errorAudio } = useApiAudio()

  // News
  function useApiNews() {
    const { data, error } = useSWR(
      country && category === 'News'
        ? `/api/trends/news?country=${country}`
        : null,
      fetcher
    )

    return {
      dataNews: data,
      errorNews: error,
    }
  }
  const { dataNews, errorNews } = useApiNews()

  // Finance
  function useApiFinance() {
    const { data, error } = useSWR(
      country && category === 'Finance'
        ? `/api/trends/finance?country=${country}`
        : null,
      fetcher
    )

    return {
      dataFinance: data,
      errorFinance: error,
    }
  }
  const { dataFinance, errorFinance } = useApiFinance()

  // Shopping
  function useApiShopping() {
    const { data, error } = useSWR(
      category === 'Shopping'
        ? `/api/trends/shopping?country=${country}`
        : null,
      fetcher
    )

    return {
      dataShopping: data,
      errorShopping: error,
    }
  }
  const { dataShopping, errorShopping } = useApiShopping()

  // Local
  function useApiLocal() {
    const { data, error } = useSWR(
      category === 'Local'
        ? `/api/trends/local?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&language=${locale}`
        : null,
      fetcher,
      {
        revalidateOnFocus: false,
      }
    )

    return {
      dataLocal: data,
      loadingLocal: !data && !error,
      errorLocal: error,
    }
  }
  const { dataLocal, errorLocal } = useApiLocal()

  // Code
  function useApiCode() {
    const { data, error } = useSWR(
      category === 'Code' ? `/api/trends/code` : null,
      fetcher
    )

    return {
      dataCode: data,
      errorCode: error,
    }
  }
  const { dataCode, errorCode } = useApiCode()

  // Academic
  const useApiAcademic = () => {
    const { data, error } = useSWR(
      country && category === 'Academic'
        ? `/api/trends/academic?country=${country}`
        : null,
      fetcher
    )

    return {
      dataAcademic: data,
      errorAcademic: error,
    }
  }
  const { dataAcademic, errorAcademic } = useApiAcademic()

  // Jobs
  function useApiJobs() {
    const { data, error } = useSWR(
      country && category === 'Job'
        ? `/api/trends/jobs?country=${country}`
        : null,
      fetcher
    )

    return {
      dataJobs: data,
      errorJobs: error,
    }
  }
  const { dataJobs, errorJobs } = useApiJobs()

  // Legal
  function useApiLegal() {
    const { data, error } = useSWR(
      country && category === 'Legal'
        ? `/api/trends/legal?country=${country}`
        : null,
      fetcher
    )

    return {
      dataLegal: data,
      errorLegal: error,
    }
  }
  const { dataLegal, errorLegal } = useApiLegal()

  // Apps
  function useApiApps() {
    const { data, error } = useSWR(
      country && category === 'Apps'
        ? `/api/trends/apps?country=${country}`
        : null,
      fetcher
    )

    return {
      dataApps: data,
      errorApps: error,
    }
  }
  const { dataApps, errorApps } = useApiApps()

  // Games
  function useApiGames() {
    const { data, error } = useSWR(
      country && category === 'Games' ? `/api/trends/games` : null,
      fetcher
    )

    return {
      dataGames: data,
      errorGames: error,
    }
  }
  const { dataGames, errorGames } = useApiGames()

  // call APIs
  useEffect(() => {
    setDataTrends(null)
    setErrorTrends(null)

    switch (category) {
      case 'Home':
      case 'Web':
      case 'AI':
        if (dataWeb) setDataTrends(dataWeb)
        if (errorWeb) setErrorTrends(errorWeb)
        break
      case 'Social':
        if (dataSocial) setDataTrends(dataSocial)
        if (errorSocial) setErrorTrends(errorSocial)
        break
      case 'Videos':
        if (dataVideos) setDataTrends(dataVideos)
        if (errorVideos) setErrorTrends(errorVideos)
        break
      case 'Image':
        if (dataImages) setDataTrends(dataImages)
        if (errorImages) setErrorTrends(errorImages)
        break
      case 'Music':
        if (dataAudio) setDataTrends(dataAudio)
        if (errorAudio) setErrorTrends(errorAudio)
        break
      case 'Shopping':
        if (dataShopping) setDataTrends(dataShopping)
        if (errorShopping) setErrorTrends(errorShopping)
        break
      case 'Local':
        if (userLocation.latitude && userLocation.longitude) {
          if (dataLocal) setDataTrends(dataLocal)
          if (errorLocal) setErrorTrends(errorLocal)
        }
        break
      case 'Academic':
        if (dataAcademic) setDataTrends(dataAcademic)
        if (errorAcademic) setErrorTrends(errorAcademic)
        break
      case 'Code':
        if (dataCode) setDataTrends(dataCode)
        if (errorCode) setErrorTrends(errorCode)
        break
      case 'Job':
        if (dataJobs) setDataTrends(dataJobs)
        if (errorJobs) setErrorTrends(errorJobs)
        break
      case 'News':
        if (dataNews) setDataTrends(dataNews)
        if (errorNews) setErrorTrends(errorNews)
        break
      case 'Finance':
        if (dataFinance) setDataTrends(dataFinance)
        if (errorFinance) setErrorTrends(errorFinance)
        break
      case 'Legal':
        if (dataLegal) setDataTrends(dataLegal)
        if (errorLegal) setErrorTrends(errorLegal)
        break
      case 'Apps':
        if (dataApps) setDataTrends(dataApps)
        if (errorApps) setErrorTrends(errorApps)
        break
      case 'Games':
        if (dataGames) setDataTrends(dataGames)
        if (errorGames) setErrorTrends(errorGames)
        break
      default: {
        break
      }
    }
  }, [
    category,
    dataWeb,
    errorWeb,
    dataSocial,
    errorSocial,
    dataVideos,
    errorVideos,
    dataImages,
    errorImages,
    dataAudio,
    errorAudio,
    dataShopping,
    errorShopping,
    userLocation,
    dataLocal,
    errorLocal,
    dataAcademic,
    errorAcademic,
    dataJobs,
    errorJobs,
    dataCode,
    errorCode,
    dataNews,
    errorNews,
    dataFinance,
    errorFinance,
    dataApps,
    errorApps,
    dataLegal,
    errorLegal,
    dataGames,
    errorGames,
  ])

  const handleClassName = (category: string) => {
    switch (category) {
      case 'Videos':
      case 'Music':
      case 'Image':
      case 'News':
      case 'Finance':
      case 'Games':
        return Styles.container + ' ' + Styles.grid4
      case 'Apps':
        return Styles.container + ' ' + Styles.grid5 + ' ' + Styles.trendsApps
      case 'Shopping':
        return (
          Styles.container + ' ' + Styles.grid4 + ' ' + Styles.trendsShopping
        )
      case 'Code':
        return Styles.container + ' ' + Styles.grid2 + ' ' + Styles.trendsCode
      case 'Local':
        return Styles.container + ' ' + Styles.grid2 + ' ' + Styles.trendsLocal
      default:
        return Styles.container
    }
  }

  if (dataTrends || errorTrends || category === 'Local') {
    return (
      <WidgetTemplate
        title={title || t('trends')}
        credits={
          dataTrends?.credits_title
            ? {
                title: dataTrends?.credits_title ?? '',
                url: dataTrends?.credits_url ?? '',
              }
            : undefined
        }>
        {/* title: 'Error on Trends API ' + category,
                url:
                  'mailto:feedback@findto.app?subject=Error on Trends API' +
                  category, */}
        {category === 'Local' && <ButtonGeolocation />}

        {dataTrends && (
          <ul className={handleClassName(category)}>
            {dataTrends?.data?.map((item, index) => (
              <li key={item?.title + index}>
                <button
                  type="button"
                  onClick={() =>
                    item.url
                      ? window.open(item.url, '_blank')
                      : putValue(item.title)
                  }>
                  <span>{index + 1}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {item.image && <img src={item.image} alt="" />}
                  {item.title && <span> {item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        )}
      </WidgetTemplate>
    )
  }

  return null
}
