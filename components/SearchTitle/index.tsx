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
        {/* <SvgLogo /> */}
        {category == 'Home' ? <Welcome /> : <h1>{categoryTitle}</h1>}
      </div>
      {/* <div>
            <h2>{t('componentWelcome.whatDoYouWant')}</h2>
          </div> */}
    </div>
  )
}
