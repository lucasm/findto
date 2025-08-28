'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { useCookiesConsent } from '@/contexts/CookiesConsentContext'

import styles from './CookiesPopup.module.css'

const ANIMATION_DURATION = 300 // ms (igual ao seu CSS transition)

const CookiesPopup = () => {
  const t = useTranslations('t')
  const { isAccepted, isHydrated, accept, reject } = useCookiesConsent()
  const [isClosing, setIsClosing] = useState(false)

  if (!isHydrated) return null
  if (isAccepted !== null && !isClosing) return null

  const handleClose = (action: () => void) => {
    setIsClosing(true)
    setTimeout(() => {
      action()
      setIsClosing(false) // reseta para próxima vez que abrir
    }, ANIMATION_DURATION)
  }

  return (
    <div
      className={`${styles.cookiesPopup} ${
        isClosing ? styles.slideDown : styles.slideUp
      }`}
      role="dialog"
      aria-live="polite"
      aria-label={t('warnings.cookies')}>
      <p>{t('warnings.cookies')}</p>

      <div className={styles.actions}>
        <button onClick={() => handleClose(accept)}>{t('accept')}</button>
        <button onClick={() => handleClose(reject)}>{t('reject')}</button>
      </div>

      <div className={styles.links}>
        <p>
          <Link href="/privacy">{t('privacy')}</Link>
        </p>
      </div>
    </div>
  )
}

export default CookiesPopup
