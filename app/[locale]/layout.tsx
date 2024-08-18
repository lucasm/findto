import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import Telemetry from '@/components/Telemetry'

const fontFamily = localFont({
  src: [
    {
      path: '../../public/fonts/font-light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/font-bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: {
    absolute: 'Findto | Decentralized AI & Web Search',
    default: 'Findto',
    template: '%s | Findto',
  },
  description:
    'Open source assistant for AI and Web search decentralized. Explore a healthier internet with Findto.',
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
  appleWebApp: {
    capable: true,
    title: 'Findto',
    statusBarStyle: 'black-translucent',
  },
  applicationName: 'Findto',
  themeColor: '#ffffff',

  metadataBase: new URL('https://findto.app'),
  alternates: {
    languages: {
      en: '/en',
      'pt-BR': '/pt-BR',
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

export default async function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
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
