import { getCategoryIcon } from '@/utils/handleCategoryIcon'
import SearchLogo from '../SearchLogo'
import Welcome from '../Welcome'
import Style from './SearchTitle.module.css'
// import BlurBackground from '../BlurBackground'

interface SearchTitleProps {
  category: string
  categoryTitle: string
}

export default function SearchTitle({
  category,
  categoryTitle,
}: Readonly<SearchTitleProps>) {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        {/* <BlurBackground /> */}
        <SearchLogo externalIcon={getCategoryIcon(category)()} />
        {category == 'Home' ? <Welcome /> : <h1>{categoryTitle}</h1>}
      </div>
    </div>
  )
}
