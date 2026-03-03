import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { defaultLocale, locales } from './utils/locales'

const proxyHandler = createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localeDetection: true,
  localeCookie: false,
})

export function proxy(request: NextRequest) {
  return proxyHandler(request)
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|public|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)',
  ],
}
