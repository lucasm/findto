import { useLocale, useTranslations } from 'next-intl'

import { getLocaleData } from '@/utils/getLocaleData'

import SearchNav from '../SearchNav'
import WidgetTemplate from '../WidgetTemplate'

export default function WidgetCategories() {
  const t = useTranslations('t')
  const locale = useLocale()
  const data = getLocaleData(locale)

  return (
    <WidgetTemplate
      title={t('categories')}
      //   icon={<IconNew />}
    >
      <SearchNav data={data} variant="cards" />
    </WidgetTemplate>
  )
}
