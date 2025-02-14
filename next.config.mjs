// eslint-disable-next-line @typescript-eslint/no-require-imports
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// eslint-disable-next-line @typescript-eslint/no-require-imports
// const withPWA = require('next-pwa')({
//   dest: 'public',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
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

  //   async redirects() {
  //     return [
  //       {
  //         source: '/',
  //         destination: '/search/home',
  //         permanent: true, // HTTP 301
  //       },
  //       {
  //         source: '/search',
  //         destination: '/search/home',
  //         permanent: true,
  //       },
  //     ]
  //   },

  productionBrowserSourceMaps: true,
}

// Aplica o PWA e depois o Next Intl
export default withNextIntl(nextConfig)
