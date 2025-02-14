import { useLocale, useTranslations } from 'next-intl'
import WidgetTemplate from '../WidgetTemplate'
import SearchNav from '../SearchNav'
import { getLocaleData } from '@/utils/getLocaleData'
import { IconCategories } from '../SvgIcons'

export default function WidgetCategories() {
  const t = useTranslations('t')
  const locale = useLocale()
  const data = getLocaleData(locale)

  return (
    <WidgetTemplate title={t('categories')} icon={<IconCategories />}>
      <SearchNav data={data} variant="cards" />
    </WidgetTemplate>
  )
}
