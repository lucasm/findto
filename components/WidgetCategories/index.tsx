import { useLocale, useTranslations } from 'next-intl'
import WidgetTemplate from '../WidgetTemplate'
import SearchNav from '../SearchNav'
import { getLocaleData } from '@/utils/getLocaleData'

export default function WidgetCategories() {
  const t = useTranslations('t')
  const locale = useLocale()
  const data = getLocaleData(locale)

  return (
    <WidgetTemplate title={t('categories')}>
      <SearchNav data={data} variant="cards" />
    </WidgetTemplate>
  )
}
