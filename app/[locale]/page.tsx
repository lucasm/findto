import AppLayout from '@/layouts/AppLayout'

import Search from '@/components/Search'
import Banner from '@/components/Banner'
import WidgetContainer from '@/components/WidgetContainer'
import WidgetPrivacy from '@/components/WidgetPrivacy'
import WidgetCarbon from '@/components/WidgetCarbon'
import WidgetTrends from '@/components/WidgetTrends'
import CookiesPopup from '@/components/CookiesPopup'
import WidgetVideoStories from '@/components/WidgetVideoStories'

export default function PageIndex() {
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
