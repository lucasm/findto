import Link from 'next/link'
import Styles from './Banner.module.css'
import { IconHeart } from '../SvgIcons'
import { useTranslations } from 'next-intl'

export default function Banner() {
  const t = useTranslations('t')

  return (
    <section className={Styles.container}>
      <div>
        <h3>{t('componentBanner.title')}</h3>
        <p>{t('componentBanner.description')}</p>
      </div>

      <div>
        <Link href="/about">{t('learnMore')} </Link>
        <Link href="https://ko-fi.com/findto" target="_blank" rel="noopener">
          <IconHeart /> {t('donate')}
        </Link>
      </div>
    </section>
  )
}
