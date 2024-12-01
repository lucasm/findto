import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt-BR', 'zh-CN'],

  // Default locale if no match
  defaultLocale: 'en',
})

// NextJS 14 not-found.tsx or 404 page redirect for /app[locale]/not-found

export default middleware

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|public|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)',
  ],
}
