const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['i.ytimg.com'],
  },
})
