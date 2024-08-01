import { useEffect, useState } from 'react'
import Style from './SearchHeader.module.css'
import { useSearch } from '../../../contexts/SearchContext'

interface BannerProps {
  additionalLeftElement?: React.ReactNode
}

export default function SearchHeader({ additionalLeftElement }: BannerProps) {
  const { data, category, search, color, setTitleTrends } = useSearch()
  const [titleSearch, setTitleSearch] = useState<string>('')

  // title
  useEffect(() => {
    if (data && category) {
      const selected = data?.categories?.find((item) => item.name === category)
      setTitleTrends(selected?.name_trends)
      setTitleSearch(selected?.name_translated ?? selected?.name)
    }
  }, [data, category])

  return (
    <div className={Style.container}>
      <div>
        <h1
        // style={{
        //   background: color,
        // }}
        >
          {titleSearch}
        </h1>

        {/* <div
          className={Style.searchPlaceholder}

        >
          <figure
            style={{
              backgroundImage: 'url(/images/logos/' + search + '.svg)',
            }}></figure>
        </div> */}
      </div>

      <div>{additionalLeftElement && additionalLeftElement}</div>
    </div>
  )
}
