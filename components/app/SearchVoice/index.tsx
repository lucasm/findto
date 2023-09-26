import { useEffect, useState } from 'react'
import Style from './SearchVoice.module.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSearch } from '../../../contexts/SearchContext'
import { IconMic } from '../SvgIcons'
import Tooltip from '../Tooltip'

export default function SearchVoice() {
  const { data, putValue, isMobileViewport } = useSearch()
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
  const [hasVoiceSupport, setHasVoiceSupport] = useState<boolean>(false)
  const title = data?.t?.voice ?? 'Voice search'

  useEffect(() => {
    if (typeof window !== 'undefined' && browserSupportsSpeechRecognition) {
      setHasVoiceSupport(true)
    }
  }, [])

  useEffect(() => {
    if (!listening) {
      putValue(transcript)
      resetTranscript()
    }
  }, [listening])

  function handleSpeechRecognition() {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening()
    }
  }

  return (
    <>
      {hasVoiceSupport && (
        <>
          <Tooltip text={title} disable={isMobileViewport}>
            <button
              className={listening ? `${Style.button} ${Style.buttonActive}` : Style.button}
              accessKey="2"
              aria-label={listening ? 'Turn off microphone' : title}
              aria-pressed={listening ? true : false}
              onClick={handleSpeechRecognition}>
              <IconMic />
              {title}
            </button>
          </Tooltip>

          <div className={Style.transcriptContainer}>
            <h2>{listening && transcript}</h2>
          </div>
        </>
      )}
    </>
  )
}
