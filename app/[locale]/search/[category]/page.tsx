import { Metadata } from 'next/types'

import Banner from '@/components/Banner'
import Search from '@/components/Search'
import WidgetCategories from '@/components/WidgetCategories'
import WidgetTrends from '@/components/WidgetTrends'
import WidgetVideoStories from '@/components/WidgetVideoStories'
import { ISearchCategory } from '@/interfaces/search'
import AppLayout from '@/layouts/AppLayout'
import { getLocaleData } from '@/utils/getLocaleData'

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
