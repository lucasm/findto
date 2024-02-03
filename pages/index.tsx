import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'

export default function Index() {
  return (
    <LayoutApp
      title="Decentralized Search"
      description="Findto is a decentralized search assistant. Explore a healthier Web with control of search, AI, privacy and carbon.">
      <Search />
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
