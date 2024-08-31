'use client'

import 'regenerator-runtime/runtime'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Style from './SearchVoice.module.css'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import { useSearch } from '@/contexts/SearchContext'
import { IconMic } from '../SvgIcons'
import Tooltip from '../Tooltip'
import Modal from '../Modal'

export default function SearchVoice() {
  const { putValue, isMobileViewport } = useSearch()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition()
  const t = useTranslations('t')
  const [hasVoiceSupport, setHasVoiceSupport] = useState<boolean>(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      browserSupportsSpeechRecognition &&
      isMicrophoneAvailable
    ) {
      setHasVoiceSupport(true)
    }
  }, [])

  function handleSpeechRecognition() {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening()
    }
  }

  useEffect(() => {
    if (!listening) {
      putValue(transcript)
      resetTranscript()
    }
  }, [listening])

  return (
    <>
      {hasVoiceSupport && (
        <div>
          <Modal
            isOpen={listening}
            onClose={() => resetTranscript()}
            title={
              isMicrophoneAvailable
                ? t('componentVoiceSearch.speak')
                : t('componentVoiceSearch.allow')
            }>
            {isMicrophoneAvailable && (
              <>
                <div className={Style.buttonListening}></div>
                <h2 className={Style.transcriptContainer}>{transcript}</h2>
              </>
            )}
          </Modal>

          <Tooltip
            text={t('componentVoiceSearch.voice')}
            disable={isMobileViewport}>
            <button
              className={
                listening
                  ? `${Style.button} ${Style.buttonActive}`
                  : Style.button
              }
              accessKey="2"
              aria-pressed={listening ? true : false}
              onClick={handleSpeechRecognition}>
              <IconMic />
              {t('componentVoiceSearch.voice')}
            </button>
          </Tooltip>
        </div>
      )}
    </>
  )
}
