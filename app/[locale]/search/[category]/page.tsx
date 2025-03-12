import AppLayout from '@/layouts/AppLayout'
import Search from '@/components/Search'
import WidgetVideoStories from '@/components/WidgetVideoStories'
import WidgetTrends from '@/components/WidgetTrends'
import Banner from '@/components/Banner'
import { Metadata } from 'next/types'
import { getLocaleData } from '@/utils/getLocaleData'
import { ISearchCategory } from '@/interfaces/search'

interface PageParams {
  locale: string
  category: string
}

interface PageProps {
  params: PageParams
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: ISearchCategory) =>
      category?.name.toLowerCase() === params.category.toLowerCase()
  )

  const categoryTitle =
    selectedCategory?.name_translated || selectedCategory?.name || 'Findto'

  const categoryDescription =
    selectedCategory?.description ||
    `Search decentralized on ${categoryTitle} with the best sources available.`

  return {
    title: categoryTitle,
    description: categoryDescription,
  }
}

export default async function Page({ params }: PageProps) {
  const data = await getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: ISearchCategory) =>
      category?.name.toLowerCase() === params.category.toLowerCase()
  )

  return (
    <AppLayout locale={params.locale} category={selectedCategory}>
      <Search selectedCategory={selectedCategory} />

      <WidgetTrends />
      <WidgetVideoStories selectedCategory={selectedCategory} />
      <Banner />
    </AppLayout>
  )
}
