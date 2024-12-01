import { AppContextProviders } from '@/components/AppContextProviders'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import CookiesPopup from '@/components/CookiesPopup'

export default function AppLayout({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: string
}) {
  return (
    <AppContextProviders>
      <AppHeader locale={locale} />

      <main>{children}</main>

      <CookiesPopup />
      <AppFooter />
    </AppContextProviders>
  )
}
