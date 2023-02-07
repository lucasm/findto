import Style from '../styles/App.module.css'
import { fetcher } from '../utils/http'
import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import { useSearch } from '../contexts/SearchContext'
import { TrendingUp } from 'react-feather'
import Loader from './website/Loader'
import { ITrends, IItem } from '../types/trends'

export default function SearchTrends() {
  const { category, putValue, trends, country, locale } = useSearch()

  function renderItems(data: ITrends) {
    return (
      <ul>
        {data.data?.map((item: IItem, index: number) => (
          <li key={index}>
            <button onClick={() => putValue(item.title)}>{item.title}</button>
          </li>
        ))}
        <p>
          Powered by
          {/*eslint-disable-next-line react/jsx-no-target-blank*/}
          <a href={data.credits_url} target="_blank" rel="noopener">
            {data.credits_title}
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

  function renderByCategory() {
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
      case 'Jobs': {
        return getJobs()
      }
      default: {
        return getWeb()
      }
    }
  }

  return (
    <section>
      <div className={Style.widgetSearchTrends + ' ' + Style.container} id="trends">
        <h2>
          <TrendingUp /> {trends}
        </h2>
        {renderByCategory()}
      </div>
    </section>
  )
}
