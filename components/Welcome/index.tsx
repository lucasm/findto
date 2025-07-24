import { useTranslations } from 'next-intl'

const Welcome = () => {
  const t = useTranslations('t')
  const nowDate = new Date()
  const hours = nowDate.getHours()

  // Define message based on the time of day
  let message
  if (hours < 12) {
    message = t('welcome.goodMorning')
  } else if (hours < 18) {
    message = t('welcome.goodEvening')
  } else {
    message = t('welcome.goodNight')
  }

  return <h1>{message}</h1>
}

export default Welcome
