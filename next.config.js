// eslint-disable-next-line @typescript-eslint/no-require-imports
const withNextIntl = require('next-intl/plugin')()
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({
  dest: 'public',
})

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

  async redirects() {
    return [
      {
        source: '/search/home',
        destination: '/',
        permanent: true, // Use `true` se quiser que o redirecionamento seja permanente (código 308)
      },
    ]
  },

  productionBrowserSourceMaps: true,
}

// Aplica o PWA e depois o Next Intl
module.exports = withPWA(withNextIntl(nextConfig))
