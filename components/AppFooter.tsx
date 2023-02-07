import Style from '../styles/App.module.css'
import Link from 'next/link'
import { ArrowRight } from 'react-feather'
import { useSearch } from '../contexts/SearchContext'

export default function AppFooter() {
  const { color } = useSearch()

  return (
    <section style={{ background: color }}>
      <div className={Style.container}>
        <div className={Style.infos}>
          <Link href="/about">
            <div>
              <h2>About search decentralized </h2>
              {/* <p>
              About <ArrowRight />
            </p> */}
            </div>
          </Link>
          <Link href="/contribute">
            <div>
              <h2>Contribute with Findto</h2>
            </div>
          </Link>
        </div>

        <p className={Style.infosLegal}>
          <Link href="/about">Findto</Link> | <Link href="/terms">Terms</Link> |{' '}
          <Link href="/privacy">Privacy</Link> | Findto is an open source decentralized search app
          that redirects to external sources. Data and trademarks of third-parties are used but not
          endorsed or certified by them. All rights reserved.
        </p>
      </div>
    </section>
  )
}
