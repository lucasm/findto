import Style from '../styles/App.module.css'
import { fetcher } from '../utils/http'
import useSWR from 'swr'
import { useSearch } from '../contexts/SearchContext'
import { TrendingUp } from 'react-feather'
import Loader from './website/Loader'
import { ITrends, ITrendsItem } from '../types/trends'

export default function SearchTrends() {
  const { data, category, putValue, country, locale } = useSearch()

  function renderItems(trends: ITrends) {
    return (
      <ul>
        {trends.data?.map((item: ITrendsItem, index: number) => (
          <li key={index}>
            <button onClick={() => putValue(item.title)}>{item.title}</button>
          </li>
        ))}
        <p>
          {data?.t?.powered ?? 'Powered by'}

          <a href={trends.credits_url} target="_blank" rel="noopener">
            {trends.credits_title}
          </a>
        </p>
      </ul>
    )
  }

  // Web
  function useApiWeb() {
    const { data, error } = useSWR(country ? `/api/trends/web/?country=${country}` : null, fetcher)

    return {
      dataWeb: data,
      isLoadingWeb: !error && !data,
      isErrorWeb: error,
    }
  }
  const { dataWeb, isLoadingWeb, isErrorWeb } = useApiWeb()
  function getWeb() {
    return (
      <>
        {isErrorWeb && <div>Error</div>}
        {isLoadingWeb && <Loader />}
        {dataWeb && renderItems(dataWeb)}
      </>
    )
  }

  // Videos
  function useApiVideos() {
    const { data, error } = useSWR(
      () => (locale && category === 'Videos' ? `/api/trends/videos/?country=${locale}` : null),
      fetcher
    )

    return {
      dataVideos: data,
      isLoadingVideos: !error && !data,
      isErrorVideos: error,
    }
  }
  const { dataVideos, isLoadingVideos, isErrorVideos } = useApiVideos()
  function getVideos() {
    return (
      <>
        {isErrorVideos && <div>Error</div>}
        {isLoadingVideos && <Loader />}

        {dataVideos && renderItems(dataVideos)}
      </>
    )
  }

  // Images
  function useApiImages() {
    const { data, error } = useSWR(category === 'Images' ? `/api/trends/images` : null, fetcher)

    return {
      dataImages: data,
      isLoadingImages: !error && !data,
      isErrorImages: error,
    }
  }
  const { dataImages, isLoadingImages, isErrorImages } = useApiImages()
  function getImages() {
    return (
      <>
        {isErrorImages && <div>Error</div>}
        {isLoadingImages && <Loader />}
        {dataImages && renderItems(dataImages)}
      </>
    )
  }

  // Audio
  function useApiAudio() {
    const { data, error } = useSWR(category === 'Music' ? `/api/trends/audio` : null, fetcher)

    return {
      dataAudio: data,
      isLoadingAudio: !error && !data,
      isErrorAudio: error,
    }
  }
  const { dataAudio, isLoadingAudio, isErrorAudio } = useApiAudio()
  function getAudio() {
    return (
      <>
        {isErrorAudio && <div>Error</div>}
        {isLoadingAudio && <Loader />}
        {dataAudio && renderItems(dataAudio)}
      </>
    )
  }

  // News
  function useApiNews() {
    const { data, error } = useSWR(
      country && category === 'News' ? `/api/trends/news?country=${country}` : null,
      fetcher
    )

    return {
      dataNews: data,
      isLoadingNews: !error && !data,
      isErrorNews: error,
    }
  }
  const { dataNews, isLoadingNews, isErrorNews } = useApiNews()
  function getNews() {
    return (
      <>
        {isErrorNews && <div>Error</div>}
        {isLoadingNews && <Loader />}
        {dataNews && renderItems(dataNews)}
      </>
    )
  }

  // Jobs
  function useApiJobs() {
    const { data, error } = useSWR(
      country && category === 'Jobs' ? `/api/trends/jobs?country=${country}` : null,
      fetcher
    )

    return {
      dataJobs: data,
      isLoadingJobs: !error && !data,
      isErrorJobs: error,
    }
  }
  const { dataJobs, isLoadingJobs, isErrorJobs } = useApiJobs()
  function getJobs() {
    return (
      <>
        {isErrorJobs && <div>Error</div>}
        {isLoadingJobs && <Loader />}
        {dataJobs && renderItems(dataJobs)}
      </>
    )
  }

  // Shopping
  function useApiShopping() {
    const { data, error } = useSWR(category === 'Shopping' ? `/api/trends/shopping` : null, fetcher)

    return {
      dataShopping: data,
      isLoadingShopping: !error && !data,
      isErrorShopping: error,
    }
  }
  const { dataShopping, isLoadingShopping, isErrorShopping } = useApiShopping()
  function getShopping() {
    return (
      <>
        {isErrorShopping && <div>Error</div>}
        {isLoadingShopping && <Loader />}
        {dataShopping && renderItems(dataShopping)}
      </>
    )
  }

  // Code
  function useApiCode() {
    const { data, error } = useSWR(category === 'Code' ? `/api/trends/code` : null, fetcher)

    return {
      dataCode: data,
      isLoadingCode: !error && !data,
      isErrorCode: error,
    }
  }
  const { dataCode, isLoadingCode, isErrorCode } = useApiCode()
  function getCode() {
    return (
      <>
        {isErrorCode && <div>Error</div>}
        {isLoadingCode && <Loader />}
        {dataCode && renderItems(dataCode)}
      </>
    )
  }

  // Academic
  function useApiAcademic() {
    const { data, error } = useSWR(
      country && category === 'Academic' ? `/api/trends/academic?country=${country}` : null,
      fetcher
    )

    return {
      dataAcademic: data,
      isLoadingAcademic: !error && !data,
      isErrorAcademic: error,
    }
  }
  const { dataAcademic, isLoadingAcademic, isErrorAcademic } = useApiAcademic()
  function getAcademic() {
    return (
      <>
        {isErrorAcademic && <div>Error</div>}
        {isLoadingAcademic && <Loader />}
        {dataAcademic && renderItems(dataAcademic)}
      </>
    )
  }

  function renderTrendsCategory() {
    switch (category) {
      case 'Web': {
        return getWeb()
      }
      case 'Videos': {
        return getVideos()
      }
      case 'Images': {
        return getImages()
      }
      case 'Music': {
        return getAudio()
      }
      case 'News': {
        return getNews()
      }
      case 'Shopping': {
        return getShopping()
      }
      case 'Code': {
        return getCode()
      }
      case 'Jobs': {
        return getJobs()
      }
      case 'Academic': {
        return getAcademic()
      }
      default: {
        return getWeb()
      }
    }
  }

  return (
    <div className={Style.widgetSearchTrends + ' container'} id="trends">
      <h2>
        <TrendingUp /> {data?.t?.trends ?? 'Trends'}
      </h2>
      {renderTrendsCategory()}
    </div>
  )
}
