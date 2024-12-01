import Styles from './Banner.module.css'
import { useLocale, useTranslations } from 'next-intl'
import { getLocaleData } from '@/utils/getLocaleData'
import SearchNav from '../SearchNav'
import Button from '../Button'
import SvgLogo from '../SvgLogo'

export default function Banner() {
  const t = useTranslations('t')
  const locale = useLocale()
  const data = getLocaleData(locale)

  return (
    <section className={Styles.container}>
      <div className={Styles.containerBanner}>
        <div>
          <h3>{t('componentBanner.title')}</h3>
          <p>{t('componentBanner.description')}</p>
        </div>

        <SearchNav data={data} variant="cards" />

        <div className={Styles.buttonsContainer}>
          <Button url="/about" color="black">
            <>
              <SvgLogo />
              {t('learnMore')}
            </>
          </Button>

          {/* <Button external url="https://patreon.com/findto" color="black">
            {t('donate')}
          </Button> */}
        </div>
      </div>
    </section>
  )
}
