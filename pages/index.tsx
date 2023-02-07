import AppLayout from '../components/AppLayout'
import AppFooter from '../components/AppFooter'
import SearchApp from '../components/SearchApp'
import SearchTrends from '../components/SearchTrends'

export default function Index() {
  return (
    <AppLayout
      title="Decentralized Search"
      description="Findto is an open source decentralized search app.">
      <SearchApp />

      <SearchTrends />

      <AppFooter />
    </AppLayout>
  )
}
