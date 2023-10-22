import Link from 'next/link'
import { useSearch } from '../../../contexts/SearchContext'
import Styles from './Banner.module.css'

export default function Banner() {
  const { data } = useSearch()

  return (
    <section className={Styles.container}>
      <div>
        <h3>{data?.t?.banner[0] ?? 'Building a better Web'}</h3>
        {/* <p>{data?.t?.banner[1] ?? 'Search, discover and help the planet'}</p> */}
      </div>
      <div>
        <Link href="/about">{data?.t?.learnMore ?? 'Learn more'}</Link>
        <Link href="https://ko-fi.com/findto" target="_blank" rel="noopener">
          ❤︎ {data?.t?.donate ?? 'Donate'}
        </Link>
      </div>
    </section>
  )
}
