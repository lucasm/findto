import { useEffect, useRef, useState } from 'react'
import Styles from '../WidgetPrivacy/WidgetPrivacy.module.css'
import StylesHeader from '../Header/Header.module.css'
import { useTranslations } from 'next-intl'
import WidgetDropdown from '@/components/WidgetDropdown'
import { IconArrowExternal, IconShield } from '../SvgIcons'
import { useSearch } from '@/contexts/SearchContext'

type DivProps = React.HTMLAttributes<HTMLDivElement>

export default function WidgetProtection({
  className = '',
  ...props
}: DivProps) {
  const t = useTranslations('t')

  const { search, domain } = useSearch()

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <WidgetDropdown
      title={t('widgetProtection.title')}
      icon={<IconShield />}
      isWidgetOpen={(state) => setIsOpen(state)}
      className={className}
      {...props}>
      <div className={Styles.container} ref={containerRef}>
        {isOpen && (
          <div className={Styles.container}>
            <p>{t('widgetProtection.description')}</p>

            <div className={StylesHeader.containerSettings}>
              <div>
                <h3>
                  {t('widgetProtection.source')}: {search}
                </h3>

                <a
                  href={'https://sitecheck.sucuri.net/results/' + domain}
                  rel="noreferrer noopener"
                  target="_blank">
                  <IconArrowExternal />
                  {t('widgetProtection.security')}
                </a>

                <a
                  href={
                    'https://www.websitecarbon.com/website/' +
                    domain.replace('.', '-')
                  }
                  rel="noreferrer noopener"
                  target="_blank">
                  <IconArrowExternal />
                  {t('widgetProtection.carbon')}
                </a>

                <a
                  href={'https://privacyscanner.aesirx.io/result/' + domain}
                  rel="noreferrer noopener"
                  target="_blank">
                  <IconArrowExternal />
                  {t('widgetProtection.privacy')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </WidgetDropdown>
  )
}
