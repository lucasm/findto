'use client'

import Styles from './WidgetTrends.module.css'
import { fetcher } from '@/utils/http'
import useSWR from 'swr'
import { useSearch } from '@/contexts/SearchContext'
import ButtonGeolocation from '@/components/ButtonGeolocation'
import Alert from '@/components/Alert'
import { ITrends, ITrendsItem } from '@/interfaces/trends'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function SearchTrends() {
  const t = useTranslations('t')
  const { category, putValue, country, locale, latitude, longitude } =
    useSearch()
  const [dataTrends, setDataTrends] = useState<ITrends | null>(null)
  const [errorTrends, setErrorTrends] = useState<any>(null)

  // Web
  function useApiWeb() {
    const isValidCategory =
      category === 'Home' || category === 'AI' || category === 'Web'

    const { data, error } = useSWR(
      !!country && isValidCategory
        ? `/api/trends/web/?country=${country}`
        : null,
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
        ? `/api/trends/local?latitude=${latitude}&longitude=${longitude}&language=${locale}`
        : null,
      fetcher,
      {
        revalidateOnFocus: false,
      },
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
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
      fetcher,
    )

    return {
      dataGames: data,
      errorGames: error,
    }
  }
  const { dataGames, errorGames } = useApiGames()

  // call API
  useEffect(() => {
    setDataTrends(null)
    setErrorTrends(null)

    switch (category) {
      case 'Home':
      case 'Web':
      case 'AI': {
        dataWeb && setDataTrends(dataWeb)
        errorWeb && setErrorTrends(errorWeb)
      }
      case 'Social':
        {
          dataSocial && setDataTrends(dataSocial)
          errorSocial && setErrorTrends(errorSocial)
        }
        break
      case 'Videos':
        {
          dataVideos && setDataTrends(dataVideos)
          errorVideos && setErrorTrends(errorVideos)
        }
        break
      case 'Image':
        {
          dataImages && setDataTrends(dataImages)
          errorImages && setErrorTrends(errorImages)
        }
        break
      case 'Music':
        {
          dataAudio && setDataTrends(dataAudio)
          errorAudio && setErrorTrends(errorAudio)
        }
        break
      case 'Shopping':
        {
          dataShopping && setDataTrends(dataShopping)
          errorShopping && setErrorTrends(errorShopping)
        }
        break
      case 'Local':
        {
          if (latitude && longitude) {
            dataLocal && setDataTrends(dataLocal)
            errorLocal && setErrorTrends(errorLocal)
          }
        }
        break
      case 'Academic':
        {
          dataAcademic && setDataTrends(dataAcademic)
          errorAcademic && setErrorTrends(errorAcademic)
        }
        break
      case 'Code':
        {
          dataCode && setDataTrends(dataCode)
          errorCode && setErrorTrends(errorCode)
        }
        break
      case 'Job':
        {
          dataJobs && setDataTrends(dataJobs)
          errorJobs && setErrorTrends(errorJobs)
        }
        break
      case 'News':
        {
          dataNews && setDataTrends(dataNews)
          errorNews && setErrorTrends(errorNews)
        }
        break
      case 'Finance':
        {
          dataFinance && setDataTrends(dataFinance)
          errorFinance && setErrorTrends(errorFinance)
        }
        break
      case 'Legal':
        {
          dataLegal && setDataTrends(dataLegal)
          errorLegal && setErrorTrends(errorLegal)
        }
        break
      case 'Apps':
        {
          dataApps && setDataTrends(dataApps)
          errorApps && setErrorTrends(errorApps)
        }
        break
      case 'Games':
        {
          dataGames && setDataTrends(dataGames)
          errorGames && setErrorTrends(errorGames)
        }
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
    dataLocal,
    errorLocal,
    latitude,
    longitude,
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

  if (category === 'Torrent') {
    return <Alert>{t('warnings.torrent')}</Alert>
  }

  if (category === 'Darknet') {
    return <Alert>{t('warnings.darknet')}</Alert>
  }

  if (dataTrends || errorTrends || category === 'Local') {
    return (
      <section className={Styles.container + ' ' + Styles[`trends${category}`]}>
        <div className={Styles.title}>
          {/* <IconTrending /> */}
          <h3>{t('trends')}</h3>
        </div>

        {category === 'Local' && <ButtonGeolocation />}

        {dataTrends && (
          <ul>
            {dataTrends?.data?.map((item: ITrendsItem, index: number) => (
              <li key={index}>
                <button
                  onClick={() =>
                    item.url
                      ? window.open(item.url, '_blank')
                      : putValue(item.title.toLowerCase())
                  }>
                  <span>{index + 1}</span>
                  {item.image && <img src={item.image} alt="" />}
                  {item.title && <span>{item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className={Styles.credits}>
          {errorTrends && <p>Error on API</p>}
          {dataTrends && (
            <p>
              {t('powered')}{' '}
              <a
                href={
                  dataTrends?.credits_url
                    ? dataTrends?.credits_url + '?utm_source=findto_app'
                    : ''
                }
                target="_blank"
                rel="noopener">
                {dataTrends?.credits_title ?? ''}
              </a>
            </p>
          )}
        </div>
      </section>
    )
  }

  return null
}
