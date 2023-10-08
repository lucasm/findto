import { useEffect, useState } from 'react'
import Style from './SearchVoice.module.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSearch } from '../../../contexts/SearchContext'
import { IconMic } from '../SvgIcons'
import Tooltip from '../Tooltip'
import Modal from '../Modal'

export default function SearchVoice() {
  const { data, putValue, isMobileViewport } = useSearch()
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition()
  const [hasVoiceSupport, setHasVoiceSupport] = useState<boolean>(false)
  const title = data?.t?.voice ?? 'Voice'

  useEffect(() => {
    if (typeof window !== 'undefined' && browserSupportsSpeechRecognition) {
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

  // voice
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
            title={data?.t?.voiceSearch[0] ?? 'Listening...'}>
            <div className={Style.buttonListening}></div>
            <h2 className={Style.transcriptContainer}>{transcript}</h2>
          </Modal>

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
        </div>
      )}
    </>
  )
}
