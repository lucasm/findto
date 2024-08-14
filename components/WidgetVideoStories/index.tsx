'use client'

import { useEffect, useState, useCallback, useRef, useMemo } from 'react'
import Styles from './WidgetVideoStories.module.css'
import { fetcher } from '@/utils/http'
import useSWR from 'swr'
import { useSearch } from '@/contexts/SearchContext'
import Loader from '../Loader'
import { IconClose } from '../SvgIcons'
import type { ITrendsItem } from '@/interfaces/trends'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useTranslations } from 'next-intl'

export default function WidgetVideoStories() {
  const t = useTranslations('t')
  const { data, category, sizeWindow } = useSearch()
  const [maxSlides, setMaxSlides] = useState<number>(5.5)
  const [margin, setMargin] = useState<number>(24)
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined)
  const [channelsIds, setChannelsIds] = useState<string | null>(null)
  const [shouldFetch, setShouldFetch] = useState(false)
  const videoPlayer = useRef<HTMLDivElement | null>(null)

  const isValidCategory = useMemo(() => {
    return (
      category === 'Social' ||
      category === 'Videos' ||
      category === 'Music' ||
      category === 'Local' ||
      category === 'News' ||
      category === 'Academic' ||
      category === 'Code' ||
      category === 'Finance' ||
      category === 'Legal'
    )
  }, [category])

  const selectedCategory = useMemo(() => {
    return data?.find((item: { name: string }) => item.name === category)
      ?.youtube_channels
  }, [category, data])

  useEffect(() => {
    if (selectedCategory) {
      const ids = selectedCategory.map((item: any) => item.id).join(',')
      setChannelsIds(ids)
      setShouldFetch(true) // ativa o fetch
    } else {
      setChannelsIds(null)
      setShouldFetch(false) // desativa o fetch
    }
  }, [selectedCategory])

  const { data: dataTrends, error: errorTrends } = useSWR(
    shouldFetch && channelsIds
      ? `/api/stories/?channels=${encodeURIComponent(channelsIds)}`
      : null,
    fetcher,
    { revalidateOnFocus: false } // evita revalidações desnecessárias
  )

  const scrollToVideoPlayer = () => {
    if (videoPlayer.current) {
      const topPosition =
        videoPlayer.current.getBoundingClientRect().top + window.scrollY - 20
      window.scrollTo({ top: topPosition, behavior: 'smooth' })
    }
  }

  const openVideo = useCallback((url: string) => {
    setVideoUrl(url)

    setTimeout(() => {
      scrollToVideoPlayer()
    }, 300) // delay
  }, [])

  const closeVideo = useCallback(() => {
    setVideoUrl(undefined)
  }, [])

  useEffect(() => {
    closeVideo()
  }, [category])

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

  if (shouldFetch) {
    return (
      <section className={Styles.container + ' ' + Styles[`trends${category}`]}>
        <div className={Styles.title}>
          <h2>Stories</h2>
        </div>

        {!dataTrends && !errorTrends && <Loader />}
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
