// import BlurBackground from '@/components/BlurBackground'
import SvgLogo from '@/components/SvgLogo'
import Welcome from '@/components/Welcome'
import { getCategoryIcon } from '@/utils/handleCategoryIcon'

import Style from './SearchTitle.module.css'

interface SearchTitleProps {
  category: string
  categoryTitle: string
}

export default function SearchTitle({
  category,
  categoryTitle,
}: Readonly<SearchTitleProps>) {
  const handleIcon = () => {
    if (category === 'Home') {
      return <SvgLogo />
    }
    return getCategoryIcon(category)()
  }

  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <figure className={Style.icon}>
          {handleIcon()}
          {/* <BlurBackground /> */}
          {/* <div
        className="fixed -z-10 w-[820px] h-[10rem] rounded-full blur-2xl opacity-90 animate-pulse-slow
         bg-[linear-gradient(90deg,var(--color-red)_14%,var(--color-orange)_28%,var(--color-yellow)_42%,var(--color-green)_56%,var(--color-blue)_70%,var(--color-purple)_84%,var(--color-pink)_98%)]"></div> */}
        </figure>

        {category == 'Home' ? <Welcome /> : <h1>{categoryTitle}</h1>}
      </div>
    </div>
  )
}
