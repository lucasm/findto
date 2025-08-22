'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { useSearch } from '@/contexts/SearchContext'

import styles from './CookiesPopup.module.css'

const CookiesPopup = () => {
  const t = useTranslations('t')
  const { inputFocus, isBrowserClientSide } = useSearch()
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    if (isBrowserClientSide) {
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
    if (isBrowserClientSide) {
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
