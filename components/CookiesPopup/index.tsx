'use client'

import { useEffect, useState } from 'react'
import styles from './CookiesPopup.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useSearch } from '@/contexts/SearchContext'

const CookiesPopup = () => {
  const t = useTranslations('t')
  const { inputFocus } = useSearch()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isCookiesAccepted')
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
      localStorage.setItem('isCookiesAccepted', JSON.stringify(true))
    }
    inputFocus()
  }

  return (
    <div
      className={`${styles.cookiesPopup} ${
        isVisible ? styles.slideUp : styles.slideDown
      }`}>
      <p>{t('warnings.cookies')}</p>

      <div>
        <button onClick={handleAccept}>{t('accept')}</button>
      </div>

      <div>
        <p>
          <Link href="/privacy">{t('privacy')}</Link>
        </p>
      </div>
    </div>
  )
}

export default CookiesPopup
