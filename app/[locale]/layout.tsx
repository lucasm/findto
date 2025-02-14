import './globals.css'
import type { Metadata } from 'next'
import type { Viewport } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import Telemetry from '@/components/Telemetry'
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

export const metadata: Metadata = {
  title: {
    absolute: 'Findto | Decentralized Search on AI and Web',
    default: 'Findto',
    template: 'Findto | %s',
  },
  description:
    'Assistant for decentralized AI and Web search. Explore a healthier internet. Open source and free.',
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
      en: '/en',
      'pt-BR': '/pt-BR',
      'zh-CN': '/zh-CN',
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
  themeColor: 'black',
}

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={fontFamily.className}
      suppressHydrationWarning>
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

      <Telemetry />
    </html>
  )
}
