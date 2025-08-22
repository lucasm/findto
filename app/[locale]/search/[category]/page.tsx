import AppLayout from '@/layouts/AppLayout'
import Search from '@/components/Search'
import WidgetVideoStories from '@/components/WidgetVideoStories'
import WidgetTrends from '@/components/WidgetTrends'
import Banner from '@/components/Banner'
import { Metadata } from 'next/types'
import { getLocaleData } from '@/utils/getLocaleData'
import { ISearchCategory } from '@/interfaces/search'
import WidgetCategories from '@/components/WidgetCategories'

interface PageParams {
  locale: string
  category: string
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const data = await getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: ISearchCategory) =>
      category?.name.toLowerCase() === params.category.toLowerCase()
  )

  const categoryTitle =
    selectedCategory?.name_seo ||
    selectedCategory?.name_translated ||
    selectedCategory?.name ||
    'Findto'

  const categoryDescription =
    selectedCategory?.description ||
    `Search decentralized on ${categoryTitle} with the best sources available.`

  return {
    title: categoryTitle,
    description: categoryDescription,
  }
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const data = await getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: ISearchCategory) =>
      category?.name.toLowerCase() === params.category.toLowerCase()
  )

  return (
    <AppLayout locale={params.locale} category={selectedCategory}>
      <Search selectedCategory={selectedCategory} />

      <WidgetTrends title={selectedCategory?.name_trends} />
      <WidgetVideoStories selectedCategory={selectedCategory} />
      <WidgetCategories />
      <Banner />
    </AppLayout>
  )
}
