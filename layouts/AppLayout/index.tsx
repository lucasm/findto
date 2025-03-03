import { AppContextProviders } from '@/components/AppContextProviders'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import { ISearchCategory } from '@/interfaces/search'
import CookiesPopup from '@/components/CookiesPopup'

export default function AppLayout({
  children,
  locale,
  category,
}: {
  children: React.ReactNode
  locale: string
  category: ISearchCategory
}) {
  return (
    <AppContextProviders>
      <AppHeader locale={locale} category={category} />

      <main className="sidebar">{children}</main>
      <div className="sidebar">
        <AppFooter />
      </div>
      <CookiesPopup />
    </AppContextProviders>
  )
}
