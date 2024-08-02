import Link from 'next/link'
import { useSearch } from '../../../contexts/SearchContext'
import Styles from './Banner.module.css'
import { IconHeart } from '../SvgIcons'

export default function Banner() {
  const { data } = useSearch()

  return (
    <section className={Styles.container}>
      <div>
        <h3>{data?.t?.banner[0] ?? 'A new way to search on Web and AI'}</h3>
        <p>
          {data?.t?.banner[1] ??
            'Findto is an assistant for people to control web search algorithms and AIs. Discover more. Help the planet.'}
        </p>
      </div>
      <div>
        <Link href="/about">{data?.t?.learnMore ?? 'Learn more'}</Link>
        <Link href="https://ko-fi.com/findto" target="_blank" rel="noopener">
          <IconHeart /> {data?.t?.donate ?? 'Donate'}
        </Link>
      </div>
    </section>
  )
}
