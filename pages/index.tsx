import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'
import WidgetPrivacy from '../components/app/WidgetPrivacy'
import WidgetCarbon from '../components/app/WidgetCarbon'
import WidgetContainer from '../components/app/WidgetContainer'

export default function Index() {
  return (
    <LayoutApp
      title="Open Source AI Search"
      description="Findto is an assistant for decentralized Web & AI search. Explore a healthier internet with control over algorithms, privacy, and carbon.">
      <Search />

      <WidgetTrends />

      <WidgetContainer>
        <WidgetPrivacy />
        <WidgetCarbon />
      </WidgetContainer>

      <Banner />
    </LayoutApp>
  )
}
