import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'

export default function Index() {
  return (
    <LayoutApp
      title="Decentralized Web & AI Search"
      description="Findto is an assistant for decentralized Web & AI search. Explore a healthier internet with control over algorithms, privacy, and carbon.">
      <Search />
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
