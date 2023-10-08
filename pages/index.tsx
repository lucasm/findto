import LayoutApp from '../components/app/LayoutApp'
import SearchApp from '../components/app/SearchApp'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'

export default function Index() {
  return (
    <LayoutApp
      title="Decentralized Search Assistant"
      description="Findto is an assistant for decentralized web search. Get control of sources, AI and privacy.">
      <SearchApp />
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
