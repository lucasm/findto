import AppLayout from '@/layouts/AppLayout'
import Search from '@/components/Search'
import WidgetVideoStories from '@/components/WidgetVideoStories'
import WidgetTrends from '@/components/WidgetTrends'
import Banner from '@/components/Banner'
import CookiesPopup from '@/components/CookiesPopup'

export default function Page() {
  return (
    <AppLayout>
      <Search />

      <WidgetVideoStories />
      <WidgetTrends />

      {/* <WidgetContainer>
        <WidgetPrivacy />
        <WidgetCarbon />
      </WidgetContainer> */}

      <Banner />
      <CookiesPopup />
    </AppLayout>
  )
}
