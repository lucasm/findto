import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'

export default function Index() {
  return (
    <LayoutApp
      title="Decentralized Search Assistant"
      description="Findto is an assistant for decentralized web search. Get control of sources, AI and privacy.">
      <Search />
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
