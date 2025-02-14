'use client'

import { useSearch } from '@/contexts/SearchContext'
import styles from './HeaderSidebar.module.css'
import SearchNav from '../SearchNav'
import { useLocale } from 'next-intl'
import { getLocaleData } from '@/utils/getLocaleData'
import { ISearchCategory } from '@/interfaces/search'

interface Props {
  category: ISearchCategory
}

const HeaderSidebar = ({ category }: Props) => {
  const { isSidebarOpen } = useSearch()

  const locale = useLocale()
  const data = getLocaleData(locale)

  return (
    <>
      {/* Overlay */}
      {/* {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )} */}

      <nav className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <SearchNav data={data} variant="sidebar" selectedCategory={category} />
      </nav>
    </>
  )
}

export default HeaderSidebar
