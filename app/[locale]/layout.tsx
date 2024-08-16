import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
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
    absolute: 'Findto | Decentralized Search on Web and AI',
    default: 'Findto',
    template: '%s | Findto',
  },
  description:
    'Open source decentralized search on Web and AI. Explore a healthier internet with Findto.',
  authors: [
    { name: 'Findto', url: 'https://findto.app' },
    { name: 'Lucas Menezes', url: 'https://lucasm.dev' },
  ],
  icons: {
    icon: [
      '/favicon.ico',
      '/icon-192x192.png',
      '/icon-512x512.png',
      '/icon-1024x1024.png',
      'icon.svg',
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Findto',
    statusBarStyle: 'black-translucent',
  },
  applicationName: 'Findto',
  themeColor: '#ffffff',

  metadataBase: new URL('https://findto.app'),
  alternates: {
    canonical: '/',
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
    <html lang={locale} className={fontFamily.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>

      <Telemetry />
    </html>
  )
}
