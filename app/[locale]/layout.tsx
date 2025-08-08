import './global.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
// import { Manrope } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import ScriptsTelemetry from '@/components/ScriptsTelemetry'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const fontFamily = localFont({
  src: [
    {
      path: '../../public/fonts/font-light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/font-medium.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})
// const fontFamily = Manrope({
//   subsets: ['latin'],
//   weight: ['500', '700'],
//   variable: '--font-family',
// })

export const metadata: Metadata = {
  title: {
    absolute: 'Findto — Decentralized Search with AI',
    default: 'Findto',
    template: 'Findto — %s',
  },
  description:
    'Decentralized search on AI, Web, Social, Videos, Images, Music, Academic, Jobs, and more. Be free with Findto.',
  authors: [
    { name: 'Findto', url: 'https://findto.app' },
    { name: 'Lucas Menezes', url: 'https://lucasm.dev' },
  ],
  icons: {
    icon: [
      '/favicon.ico?v=2',
      '/icon-192x192.png?v=2',
      '/icon-512x512.png?v=2',
      '/icon-1024x1024.png?v=2',
      // 'icon.svg?v=2',
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
  manifest: '/manifest.json?v=2',
  applicationName: 'Findto',
  //   viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  metadataBase: new URL('https://findto.app'),
  alternates: {
    languages: {
      'en-US': '/en-US',
      'pt-BR': '/pt-BR',
      'zh-CN': '/zh-CN',
      ru: '/ru',
    },
  },
  openGraph: {
    images: '/share.png',
    type: 'website',
  },
  twitter: {
    site: '@findtoapp',
    creator: '@lucasmezs',
    card: 'summary_large_image',
    images: '/share.png',
  },
}
export const viewport: Viewport = {
  themeColor: 'white',
}

export default async function Layout(props: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const params = await props.params

  const { locale } = params

  const { children } = props

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={fontFamily.className}
      suppressHydrationWarning
      data-scroll-behavior="smooth">
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={true}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>

      <ScriptsTelemetry />
    </html>
  )
}
