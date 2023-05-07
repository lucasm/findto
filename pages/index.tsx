import AppLayout from '../components/AppLayout'
import AppFooter from '../components/app/Footer'
import SearchApp from '../components/SearchApp'
import SearchTrends from '../components/SearchTrends'

export default function Index() {
  return (
    <AppLayout
      title="AI Decentralized Search"
      description="Findto is a decentralized search with AI, open source and free.">
      <SearchApp />

      <SearchTrends />

      {/* <div className={Style.infos}>
        <Link href="/about">
          <div>
            <h2>{data?.t?.about_title ?? 'Welcome to the decentralized search'}</h2>
            <p>About</p>
          </div>
        </Link>
        <Link href="/contribute">
          <div>
            <h2>{data?.t?.contribute_title ?? 'Contribute with Findto'}</h2>
          </div>
        </Link>
      </div> */}

      <AppFooter />
    </AppLayout>
  )
}
