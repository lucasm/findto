'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState, useCallback, useRef } from 'react'
import useSWR from 'swr'

import Card from '@/components/Card'
import { ISearchCategory } from '@/interfaces/search'
import type { ITrendsItem } from '@/interfaces/trends'
import { fetcher } from '@/utils/http'

import Styles from './WidgetVideoStories.module.css'
import { IconClose } from '../SvgIcons'
import WidgetTemplate from '../WidgetTemplate'

interface Props {
  selectedCategory: ISearchCategory
}

const WidgetVideoStories = ({ selectedCategory }: Readonly<Props>) => {
  const t = useTranslations('t')

  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined)
  const [channelsIds, setChannelsIds] = useState<string | null>(null)
  const [shouldFetch, setShouldFetch] = useState(false)
  const videoPlayer = useRef<HTMLDivElement | null>(null)

  const categoryVideoChannels = selectedCategory?.youtube_channels

  useEffect(() => {
    closeVideo()

    if (categoryVideoChannels) {
      const ids = categoryVideoChannels
        .map((item: { id: string }) => item.id)
        .join(',')
      setChannelsIds(ids)
      setShouldFetch(true)
    }

    if (!categoryVideoChannels) {
      setChannelsIds(null)
      setShouldFetch(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryVideoChannels])

  const { data: dataTrends, error: errorTrends } = useSWR(
    shouldFetch && channelsIds
      ? `/api/stories/?channels=${encodeURIComponent(channelsIds)}`
      : null,
    fetcher,
    { revalidateOnFocus: false } // evita revalidações desnecessárias
  )

  const credits = dataTrends
    ? {
        title: 'YouTube',
        url: 'https://www.youtube.com/?utm_source=findto_app',
      }
    : undefined

  const scrollToVideo = () => {
    if (videoPlayer.current) {
      const topPosition =
        videoPlayer.current.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }
  const openVideo = useCallback((url: string) => {
    setVideoUrl(url)
    setTimeout(() => {
      scrollToVideo()
    }, 300) // delay
  }, [])
  const closeVideo = useCallback(() => {
    setVideoUrl(undefined)
  }, [])

  if (!shouldFetch || !dataTrends) return null

  return (
    <WidgetTemplate
      title={selectedCategory?.name_stories || t('stories')}
      credits={credits}
      rightChildren={
        videoUrl ? (
          <button
            className={Styles.closeButton}
            onClick={closeVideo}
            aria-label="Close">
            <IconClose />
          </button>
        ) : undefined
      }>
      <section className={Styles.container}>
        {errorTrends && (
          <p>Error loading content. Please report this feedback.</p>
        )}

        {videoUrl && (
          <div ref={videoPlayer} className={Styles.videoPlayer}>
            <iframe
              title={`Player ${videoUrl}`}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoUrl}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        )}

        <ul className={Styles.cards}>
          {dataTrends?.data?.map((item: ITrendsItem, index: number) => (
            <li key={item?.title + index}>
              <Card
                author={item.author}
                title={item.title || ''}
                imageUrl={item.image || ''}
                imageAspectRatio="aspectRatioVideo"
                flexDirection="column"
                onClick={() => item.url && openVideo(item.url)}
              />
            </li>
          ))}
        </ul>
      </section>
    </WidgetTemplate>
  )
}

export default WidgetVideoStories
