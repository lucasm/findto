import Style from './SearchNav.module.css'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { normalizeId } from '@/utils/formats'
import { ISearchCategory } from '@/interfaces/search'
import { getCategoryIcon } from '@/utils/handleCategoryIcon'

interface Props {
  data: { categories: ISearchCategory[] }
  variant?: 'vertical' | 'cards' | 'sidebar'
  selectedCategory?: ISearchCategory
}

const SearchNav = ({ data, variant, selectedCategory }: Props) => {
  const locale = useLocale()

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
                  <figure>{getCategoryIcon(category?.name)()}</figure>
                  <span>{category?.name_translated || category?.name}</span>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

export default SearchNav
