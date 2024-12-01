import AppLayout from '@/layouts/AppLayout'
import Search from '@/components/Search'
import WidgetVideoStories from '@/components/WidgetVideoStories'
import WidgetTrends from '@/components/WidgetTrends'
import Banner from '@/components/Banner'
import { Metadata } from 'next/types'
import { getLocaleData } from '@/utils/getLocaleData'
import { ISearchCategory } from '@/interfaces/search'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const data = await getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: ISearchCategory) =>
      category?.name.toLowerCase() === params.category,
  )

  const categoryTitle =
    selectedCategory?.name_translated || selectedCategory?.name || 'Findto'

  return {
    title: `${categoryTitle}`,
    description: `Search decentralized on ${categoryTitle} with the best sources available.`,
  }
}

export default function Page({ params }: any) {
  const data = getLocaleData(params.locale)
  const selectedCategory = data?.categories?.find(
    (category: any) => category?.name.toLowerCase() === params.category,
  )

  return (
    <AppLayout locale={params.locale}>
      <Search selectedCategory={selectedCategory} />

      <WidgetVideoStories selectedCategory={selectedCategory} />
      <WidgetTrends />

      <Banner />

      {/* <>
        <WidgetPrivacy />
        <WidgetCarbon />
      </> */}
    </AppLayout>
  )
}
