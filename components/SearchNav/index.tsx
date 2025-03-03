import Style from './SearchNav.module.css'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import {
  IconHome,
  IconAI,
  IconWeb,
  IconImage,
  IconVideo,
  IconMusic,
  IconSocial,
  IconLocal,
  IconShopping,
  IconCode,
  IconAcademic,
  IconJob,
  IconNews,
  IconLegal,
  IconFinance,
  IconApps,
  IconGames,
  IconTorrent,
  IconDarknet,
  Icon,
} from '@/components/SvgIcons'
import { normalizeId } from '@/utils/formats'
import { ISearchCategory } from '@/interfaces/search'

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
        return <IconAI />
      case 'Web':
        return <IconWeb />
      case 'Image':
        return <IconImage />
      case 'Videos':
        return <IconVideo />
      case 'Music':
        return <IconMusic />
      case 'Social':
        return <IconSocial />
      case 'Local':
        return <IconLocal />
      case 'Academic':
        return <IconAcademic />
      case 'Shopping':
        return <IconShopping />
      case 'News':
        return <IconNews />
      case 'Job':
        return <IconJob />
      case 'Code':
        return <IconCode />
      case 'Legal':
        return <IconLegal />
      case 'Apps':
        return <IconApps />
      case 'Finance':
        return <IconFinance />
      case 'Games':
        return <IconGames />
      case 'Torrent':
        return <IconTorrent />
      case 'Darknet':
        return <IconDarknet />
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
