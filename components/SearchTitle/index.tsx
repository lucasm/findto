import BlurBackground from '../BlurBackground'
import Welcome from '../Welcome'
import Style from './SearchTitle.module.css'

interface SearchTitleProps {
  category: string
  categoryTitle: string
}

export default function SearchTitle({
  category,
  categoryTitle,
}: SearchTitleProps) {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <BlurBackground />
        {category == 'Home' ? <Welcome /> : <h1>{categoryTitle}</h1>}
      </div>
    </div>
  )
}
