'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type ConsentState = boolean | null // null = não decidido ainda

interface CookiesConsentContextValue {
  isAccepted: ConsentState
  isHydrated: boolean
  openPopup: () => void
  accept: () => void
  reject: () => void
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

const LOCALSTORAGE_KEY = 'isCookiesAccepted'

const CookiesConsentContext = createContext<CookiesConsentContextValue | null>(
  null
)

export const CookiesConsentContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isAccepted, setIsAccepted] = useState<ConsentState>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hidrata apenas no client e carrega valor real do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY)
      setIsAccepted(saved ? JSON.parse(saved) : null)
    } catch {
      setIsAccepted(null)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  // --- Consent helpers (Google Consent Mode v2 + Clarity ConsentV2) ---
  const applyGranted = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
    window.clarity?.('consentv2', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }

  const applyDenied = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
    window.clarity?.('consentv2', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    })
    // Opcional: apagar cookies/sessão do Clarity (API antiga)
    // window.clarity?.('consent', false)
  }

  const accept = () => {
    setIsAccepted(true)
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(true))
    } catch {
      // Ignore write errors (e.g., private mode)
    }
    applyGranted()
  }

  const reject = () => {
    setIsAccepted(false)
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(false))
    } catch {
      // Ignore write errors (e.g., private mode)
    }
    applyDenied()
  }

  const openPopup = () => setIsAccepted(null)

  return (
    <CookiesConsentContext.Provider
      value={{ isAccepted, isHydrated, openPopup, accept, reject }}>
      {children}
    </CookiesConsentContext.Provider>
  )
}

export const useCookiesConsent = () => {
  const ctx = useContext(CookiesConsentContext)
  if (!ctx)
    throw new Error(
      'useCookiesConsent must be used within CookiesConsentContextProvider'
    )
  return ctx
}
