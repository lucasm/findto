import { useEffect, useState } from 'react'
import Style from './SearchHeader.module.css'
import { useSearch } from '../../../contexts/SearchContext'
import WidgetPrivacy from '../WidgetPrivacy'
import WidgetCarbon from '../WidgetCarbon'

interface BannerProps {
  additionalLeftElement?: React.ReactNode
}

export default function SearchHeader({ additionalLeftElement }: BannerProps) {
  const { data, category, search, setTitleTrends } = useSearch()
  const [titleSearch, setTitleSearch] = useState<string>('Search')

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
        <h1>{titleSearch}</h1>
      </div>

      <div>
        {additionalLeftElement && additionalLeftElement}
        <WidgetPrivacy />
        <WidgetCarbon />
      </div>
    </div>
  )
}
