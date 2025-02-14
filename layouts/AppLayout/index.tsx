import { AppContextProviders } from '@/components/AppContextProviders'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import { ISearchCategory } from '@/interfaces/search'

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
      <body className="sidebar">
        <AppHeader locale={locale} category={category} />

        <main>{children}</main>

        <AppFooter />
      </body>
    </AppContextProviders>
  )
}
