import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  locales: ['en-US', 'pt-BR', 'zh-CN'],
  defaultLocale: 'en-US',
})

export default middleware

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|public|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)',
  ],
}
