'use client'

import Styles from './WidgetFeed.module.css'
import { useEffect, useState, useCallback, useRef } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils/http'
import { useSearch } from '@/contexts/SearchContext'
import type { ITrendsItem } from '@/interfaces/trends'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useTranslations } from 'next-intl'
import { IconClose } from '../SvgIcons'
import { ISearchCategory } from '@/interfaces/search'

interface Props {
  selectedCategory: ISearchCategory
}

export default function WidgetFeed({ selectedCategory }: Props) {
  const t = useTranslations('t')
  const { sizeWindow } = useSearch()
  const [maxSlides, setMaxSlides] = useState<number>(5.5)
  const [margin, setMargin] = useState<number>(24)
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined)
  const [channelsIds, setChannelsIds] = useState<string | null>(null)
  const [shouldFetch, setShouldFetch] = useState(false)
  const videoPlayer = useRef<HTMLDivElement | null>(null)

  const categoryVideoChannels = selectedCategory?.youtube_channels
  const categoryTitle = selectedCategory?.name

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
  }, [categoryVideoChannels])

  const { data: dataTrends, error: errorTrends } = useSWR(
    shouldFetch && channelsIds
      ? `/api/stories/?channels=${encodeURIComponent(channelsIds)}`
      : null,
    fetcher,
    { revalidateOnFocus: false } // evita revalidações desnecessárias
  )

  const scrollToVideo = () => {
    if (videoPlayer.current) {
      const topPosition =
        videoPlayer.current.getBoundingClientRect().top + window.scrollY - 20
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

  useEffect(() => {
    if (sizeWindow.width < 480) {
      setMaxSlides(3.75)
      setMargin(8)
    } else if (sizeWindow.width < 940) {
      setMaxSlides(4.5)
      setMargin(16)
    } else {
      setMaxSlides(5.5)
      setMargin(24)
    }
  }, [sizeWindow])

  if (shouldFetch && dataTrends) {
    return (
      <section
        className={Styles.container + ' ' + Styles[`trends${categoryTitle}`]}>
        {categoryTitle !== 'Home' && (
          <div className={Styles.title}>
            <h2>Stories</h2>
          </div>
        )}

        {errorTrends && <div>Error</div>}

        {dataTrends && (
          <>
            {videoUrl && (
              <div ref={videoPlayer} className={Styles.videoPlayer}>
                <button className={Styles.closeButton} onClick={closeVideo}>
                  Fechar <IconClose />
                </button>
                <iframe
                  width="100%"
                  height="100%"
                  src={'https://www.youtube.com/embed/' + videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            )}
            <Swiper
              slidesPerView={maxSlides}
              spaceBetween={margin}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Pagination]}
              className={Styles.slide}>
              {dataTrends?.data?.map((item: ITrendsItem, index: number) => (
                <SwiperSlide key={index}>
                  <button onClick={() => item.url && openVideo(item.url)}>
                    {item.image && (
                      <figure
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}></figure>
                    )}
                    {item.title && <span>{item.title}</span>}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={Styles.credits}>
              <p>
                {t('powered')}{' '}
                <a
                  href="https://www.youtube.com/?utm_source=findto_app"
                  target="_blank"
                  rel="noopener">
                  YouTube
                </a>
              </p>
            </div>
          </>
        )}
      </section>
    )
  }

  return null
}
