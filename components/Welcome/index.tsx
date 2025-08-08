import { useTranslations } from 'next-intl'

const Welcome = () => {
  const t = useTranslations('t')
  const nowDate = new Date()
  const hours = nowDate.getHours()

  // Define message based on the time of day
  function getGreetingByHour(hour: number): string {
    if (hour >= 4 && hour < 12) {
      return t('welcome.goodMorning') // Bom dia
    }

    if (hour >= 12 && hour < 18) {
      return t('welcome.goodEvening') // Boa tarde
    }

    return t('welcome.goodNight') // Boa noite (modo descanso)
  }
  const greeting = getGreetingByHour(hours)

  return <h1>{greeting}</h1>
}

export default Welcome
