import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ISearchCategory } from '@/interfaces/search'
import CookiesPopup from '@/components/CookiesPopup'
import { SearchProvider } from '@/contexts/SearchContext'
import { getBooleanFromCookie } from '@/utils/getBooleanFromCookie'

export default async function AppLayout({
  children,
  locale,
  category,
}: Readonly<{
  children: React.ReactNode
  locale: string
  category: ISearchCategory
}>) {
  const isSidebarOpenDefault = await getBooleanFromCookie('isSidebarOpen')

  return (
    <SearchProvider isSidebarOpenDefault={isSidebarOpenDefault}>
      <div className={isSidebarOpenDefault ? 'app sidebar' : 'app'}>
        <Header locale={locale} category={category} />
        <main>{children}</main>
        <Footer />
        <CookiesPopup />
      </div>
    </SearchProvider>
  )
}
