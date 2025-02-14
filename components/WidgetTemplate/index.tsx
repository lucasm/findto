import { useTranslations } from 'next-intl'
import { ReactElement, ReactNode } from 'react'
import Styles from './WidgetTemplate.module.css'

interface ICredits {
  title: string
  url: string
}

interface WidgetTemplateProps {
  title: string
  children?: ReactNode
  icon?: ReactElement
  credits?: ICredits
  hideTitle?: boolean
}

export default function WidgetTemplate({
  title,
  children,
  credits,
  icon,
  hideTitle,
}: WidgetTemplateProps) {
  const t = useTranslations('t')

  return (
    <section className={Styles.container}>
      {!hideTitle && (
        <div className={Styles.title}>
          {icon}
          <h3>{title}</h3>
        </div>
      )}

      {children}

      <div className={Styles.credits}>
        {credits && (
          <p>
            {t('powered')}{' '}
            <a
              href={credits?.url ? credits?.url + '?utm_source=findto_app' : ''}
              target="_blank"
              rel="noopener">
              {credits?.title ?? ''}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
