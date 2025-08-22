import CookiesPopup from '@/components/CookiesPopup'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { SearchContextProvider } from '@/contexts/SearchContext'
import { ISearchCategory } from '@/interfaces/search'
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
    <SearchContextProvider isSidebarOpenDefault={isSidebarOpenDefault}>
      <div className={isSidebarOpenDefault ? 'app sidebar' : 'app'}>
        <Header locale={locale} category={category} />
        <main>{children}</main>
        <Footer />
        <CookiesPopup />
      </div>
    </SearchContextProvider>
  )
}
