export const getLocaleData = (locale: string) => {
  const localeSearchSources = require('../locales/' + locale + '.json')

  return localeSearchSources
}
