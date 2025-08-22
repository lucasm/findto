'use client'

import 'regenerator-runtime/runtime'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import { useSearch } from '@/contexts/SearchContext'

import Style from './SearchVoice.module.css'
import Modal from '../Modal'
import { IconMic } from '../SvgIcons'
import Tooltip from '../Tooltip'

interface Props {
  display: boolean
}

export default function SearchVoice(
  { display }: Readonly<Props> = { display: true }
) {
  const { putValue, isMobileViewport, isBrowserClientSide } = useSearch()
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition()
  const t = useTranslations('t')
  const [hasVoiceSupport, setHasVoiceSupport] = useState<boolean>(false)

  const [permission, setPermission] = useState<'granted' | 'denied' | 'prompt'>(
    'prompt'
  )

  // Função para verificar a permissão do microfone
  async function checkMicrophonePermission() {
    try {
      const permissionStatus = await navigator.permissions.query({
        name: 'microphone' as PermissionName,
      })
      setPermission(permissionStatus.state)

      // Atualiza o estado sempre que a permissão mudar
      permissionStatus.onchange = () => setPermission(permissionStatus.state)
    } catch (error) {
      console.error('Erro ao verificar permissão do microfone:', error)
    }
  }

  useEffect(() => {
    checkMicrophonePermission()
  }, [])

  useEffect(() => {
    if (
      isBrowserClientSide &&
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
              permission === 'granted' ? t('voice.speak') : t('voice.allow')
            }>
            {isMicrophoneAvailable && (
              <>
                <div className={Style.buttonListening}></div>
                <h3 className={Style.transcriptContainer}>{transcript}</h3>
              </>
            )}
          </Modal>

          <Tooltip text={t('voice.voice')} disable={isMobileViewport}>
            <button
              type="button"
              className={
                listening
                  ? `${Style.button} ${Style.buttonActive}`
                  : Style.button
              }
              aria-pressed={listening ? true : false}
              onClick={handleSpeechRecognition}
              style={{ display: display ? 'inline-flex' : 'none' }}>
              <IconMic />
              {t('voice.voice')}
            </button>
          </Tooltip>
        </div>
      )}
    </>
  )
}
