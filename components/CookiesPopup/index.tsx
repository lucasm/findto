'use client'

import { useEffect, useState } from 'react'
import styles from './CookiesPopup.module.css'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

const CookiesPopup = () => {
  const locale = useLocale()
  const t = useTranslations('t')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cookiesAccepted')
      return saved ? JSON.parse(saved) : false
    } else {
      return false
    }
  })

  useEffect(() => {
    if (!isAccepted) {
      setIsVisible(true)
    }
  }, [isAccepted])

  const handleAccept = () => {
    setIsAccepted(true)
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiesAccepted', JSON.stringify(true))
    }
  }

  return (
    <div
      className={`${styles.cookiesPopup} ${
        isVisible ? styles.slideUp : styles.slideDown
      }`}>
      <p>
        {t('componentCookiesPopup.title')}{' '}
        <Link href="/privacy">{t('privacy')}</Link>
        {'.'}
      </p>
      <div>
        <button onClick={handleAccept}>{t('accept')}</button>
      </div>
    </div>
  )
}

export default CookiesPopup
