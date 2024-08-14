//middleware.ts
import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt-BR'],

  // Default locale if no match
  defaultLocale: 'en',
})

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
