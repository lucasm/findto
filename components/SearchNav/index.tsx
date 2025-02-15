import Style from './SearchNav.module.css'
import Link from 'next/link'
import {
  IconSparkle,
  IconGlobe,
  IconImage,
  IconVideo,
  IconMusic,
  IconPeople,
  IconLocation,
  IconCart,
  IconCode,
  IconAcademic,
  IconBriefcase,
  IconNews,
  IconBank,
  IconFinance,
  IconApps,
  IconDownload,
  IconGames,
  Icon,
  IconMetaverse,
  IconLock,
  IconHome,
} from '@/components/SvgIcons'
import { normalizeId } from '@/utils/formats'
import { ISearchCategory } from '@/interfaces/search'
import { useLocale } from 'next-intl'

interface Props {
  data: { categories: ISearchCategory[] }
  variant?: 'vertical' | 'cards' | 'sidebar'
  selectedCategory?: ISearchCategory
}

const SearchNav = ({ data, variant, selectedCategory }: Props) => {
  const locale = useLocale()
  const handleCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Home':
        return <IconHome />
      case 'AI':
        return <IconSparkle />
      case 'Web':
        return <IconGlobe />
      case 'Image':
        return <IconImage />
      case 'Videos':
        return <IconVideo />
      case 'Music':
        return <IconMusic />
      case 'Social':
        return <IconPeople />
      case 'Local':
        return <IconLocation />
      case 'Academic':
        return <IconAcademic />
      case 'Shopping':
        return <IconCart />
      case 'News':
        return <IconNews />
      case 'Job':
        return <IconBriefcase />
      case 'Code':
        return <IconCode />
      case 'Legal':
        return <IconBank />
      case 'Apps':
        return <IconApps />
      case 'Finance':
        return <IconFinance />
      case 'Games':
        return <IconGames />
      case 'Torrent':
        return <IconDownload />
      case 'Metaverse':
        return <IconMetaverse />
      case 'Darknet':
        return <IconLock />
      default:
        return <Icon />
    }
  }

  const navClass = `${Style.nav} ${variant && Style[variant]}`

  const hasActiveClass = (categoryName: string) => {
    return selectedCategory?.name === categoryName && variant !== 'cards'
  }

  return (
    <div className={navClass}>
      <ul>
        {data.categories?.map(
          (category, index) =>
            category?.active === true && (
              <li key={index}>
                <Link
                  className={hasActiveClass(category?.name) ? Style.active : ''}
                  href={
                    '/' + locale + '/search/' + normalizeId(category?.name)
                  }>
                  <figure>{handleCategoryIcon(category?.name)}</figure>
                  {category?.name_translated || category?.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

export default SearchNav
