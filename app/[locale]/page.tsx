import AppLayout from '@/layouts/AppLayout'
import Banner from '@/components/Banner'
import Search from '@/components/Search'
import { getLocaleData } from '@/utils/getLocaleData'
import WidgetTrends from '@/components/WidgetTrends'
import WidgetCategories from '@/components/WidgetCategories'

export default function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const data = getLocaleData(locale)

  const selectedCategory = data?.categories?.find(
    (category: { name: string }) => category?.name.toLowerCase() === 'home'
  )

  return (
    <AppLayout locale={locale}>
      <Search selectedCategory={selectedCategory} />
      <WidgetTrends />
      <WidgetCategories />
      <Banner />
    </AppLayout>
  )
}
