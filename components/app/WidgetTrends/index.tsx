import Styles from './WidgetTrends.module.css'
import { fetcher } from '../../../utils/http'
import useSWR from 'swr'
import { useSearch } from '../../../contexts/SearchContext'
import { TrendingUp } from 'react-feather'
import Loader from '../Loader'
import WidgetContainer from '../WidgetContainer'
import { ITrends, ITrendsItem } from '../../../interfaces/trends'
import { useEffect, useState } from 'react'

export default function SearchTrends() {
  const { data, category, putValue, country, locale } = useSearch()
  const [dataTrends, setDataTrends] = useState<ITrends>(null)
  const [errorTrends, setErrorTrends] = useState<any>(null)

  // Web
  function useApiWeb() {
    const { data, error } = useSWR(country ? `/api/trends/web/?country=${country}` : null, fetcher)

    return {
      dataWeb: data,
      errorWeb: error,
    }
  }
  const { dataWeb, errorWeb } = useApiWeb()

  // Social
  function useApiSocial() {
    const { data, error } = useSWR(
      () => (category === 'Social' ? `/api/trends/social/?country=${country}` : null),
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
      () => (locale && category === 'Videos' ? `/api/trends/videos/?country=${locale}` : null),
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
    const { data, error } = useSWR(category === 'Images' && `/api/trends/images`, fetcher)

    return {
      dataImages: data,
      errorImages: error,
    }
  }
  const { dataImages, errorImages } = useApiImages()

  // Music
  function useApiAudio() {
    const { data, error } = useSWR(category === 'Music' && `/api/trends/audio`, fetcher)

    return {
      dataAudio: data,
      errorAudio: error,
    }
  }
  const { dataAudio, errorAudio } = useApiAudio()

  // News
  function useApiNews() {
    const { data, error } = useSWR(
      country && category === 'News' ? `/api/trends/news?country=${country}` : null,
      fetcher
    )

    return {
      dataNews: data,
      errorNews: error,
    }
  }
  const { dataNews, errorNews } = useApiNews()

  // Shopping
  function useApiShopping() {
    const { data, error } = useSWR(category === 'Shopping' ? `/api/trends/shopping` : null, fetcher)

    return {
      dataShopping: data,
      errorShopping: error,
    }
  }
  const { dataShopping, errorShopping } = useApiShopping()

  // Code
  function useApiCode() {
    const { data, error } = useSWR(category === 'Code' ? `/api/trends/code` : null, fetcher)

    return {
      dataCode: data,
      errorCode: error,
    }
  }
  const { dataCode, errorCode } = useApiCode()

  // Academic
  const useApiAcademic = () => {
    const { data, error } = useSWR(
      country && category === 'Academic' ? `/api/trends/academic?country=${country}` : null,
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
      country && category === 'Jobs' ? `/api/trends/jobs?country=${country}` : null,
      fetcher
    )

    return {
      dataJobs: data,
      errorJobs: error,
    }
  }
  const { dataJobs, errorJobs } = useApiJobs()

  // change API
  useEffect(() => {
    setDataTrends(null)
    setErrorTrends(null)

    switch (category) {
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
      case 'Images':
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
      case 'Jobs':
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
      default: {
        dataWeb && setDataTrends(dataWeb)
        errorWeb && setErrorTrends(errorWeb)
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
    dataAcademic,
    errorAcademic,
    dataJobs,
    errorJobs,
    dataCode,
    errorCode,
    dataNews,
    errorNews,
  ])

  return (
    <WidgetContainer
      title={data?.t?.trends ?? 'Trends'}
      icon={<TrendingUp />}
      creditTitle={dataTrends?.credits_title ?? ''}
      creditUrl={dataTrends?.credits_url ?? ''}>
      <>
        {!dataTrends && !errorTrends && <Loader />}
        {errorTrends && <div>Error</div>}
        {dataTrends && (
          <div className={Styles.container}>
            <ul>
              {dataTrends.data?.map((item: ITrendsItem, index: number) => (
                <li key={index}>
                  {item.url ? (
                    <button onClick={() => window.open(item.url, '_blank')}>{item.title}</button>
                  ) : (
                    <button onClick={() => putValue(item.title)}>{item.title}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    </WidgetContainer>
  )
}
