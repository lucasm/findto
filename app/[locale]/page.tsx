import Banner from '@/components/Banner'
import Search from '@/components/Search'
import WidgetCategories from '@/components/WidgetCategories'
import WidgetTrends from '@/components/WidgetTrends'
import AppLayout from '@/layouts/AppLayout'
import { getLocaleData } from '@/utils/getLocaleData'

export default async function Page(props: {
  params: Promise<{ locale: string }>
}) {
  const params = await props.params
  const { locale } = params
  const data = await getLocaleData(locale)

  const selectedCategory = data?.categories?.find(
    (category: { name: string }) => category?.name.toLowerCase() === 'home'
  )

  return (
    <AppLayout locale={locale} category={selectedCategory}>
      <Search selectedCategory={selectedCategory} />
      <WidgetTrends title={selectedCategory?.name_trends} />
      <WidgetCategories />
      <Banner />
    </AppLayout>
  )
}
