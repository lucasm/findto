import { useTranslations } from 'next-intl'

import Button from '@/components/Button'
import SvgLogo from '@/components/SvgLogo'

import Styles from './Banner.module.css'

export default function Banner() {
  const t = useTranslations('t')

  return (
    <section className={Styles.container}>
      <div className={Styles.containerBanner}>
        <div>
          <h3>{t('metadata.title')}</h3>
          <p>{t('metadata.description')}</p>
        </div>

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
