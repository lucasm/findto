import { useEffect, useState } from 'react'
import Style from './SearchVoice.module.css'
import * as Icon from 'react-feather'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useSearch } from '../../../contexts/SearchContext'

export default function SearchVoice() {
  const { putValue } = useSearch()

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition()

  const [hasVoiceSupport, setHasVoiceSupport] = useState<boolean>(false)

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
    <div>
      {hasVoiceSupport && (
        <div>
          <button
            className={listening ? `${Style.button} ${Style.buttonActive}` : Style.button}
            accessKey="2"
            aria-label={listening ? 'Turn off microphone' : 'Voice search'}
            aria-pressed={listening ? true : false}
            title="Voice search"
            onClick={handleSpeechRecognition}>
            <Icon.Mic />
            Voice search
          </button>
          <h2 className={Style.transcript}>{listening && transcript}</h2>
        </div>
      )}
    </div>
  )
}
