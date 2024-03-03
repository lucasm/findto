/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
  i18n: {
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      't0.gstatic.com',
      't1.gstatic.com',
      't2.gstatic.com',
      't3.gstatic.com',
      'maps.gstatic.com',
      'm.media-amazon.com',
      'pisces.bbystatic.com',
      'is1-ssl.mzstatic.com',
      'plus.unsplash.com',
      'images.unsplash.com',
      'image.tmdb.org',
      'ichef.bbci.co.uk',
      'media.zenfs.com',
      's.yimg.com',
      'github.com',
      'cdn.vox-cdn.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
})
