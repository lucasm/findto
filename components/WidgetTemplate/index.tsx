import { useTranslations } from 'next-intl'

import Styles from './WidgetTemplate.module.css'

export interface ICredits {
  title: string
  url: string
}

interface WidgetTemplateProps {
  title: string
  children?: React.ReactNode
  rightChildren?: React.ReactNode
  icon?: React.ReactNode
  credits?: ICredits
  hideTitle?: boolean
}

export default function WidgetTemplate({
  title,
  children,
  rightChildren,
  credits,
  icon,
  hideTitle,
}: Readonly<WidgetTemplateProps>) {
  const t = useTranslations('t')

  return (
    <section className={Styles.container}>
      {!hideTitle && (
        <div className={Styles.title}>
          {icon}
          <h2>{title}</h2>
          {rightChildren && <div>{rightChildren}</div>}
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
