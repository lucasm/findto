import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
// import { Providers } from './providers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import UserAnalytics from '@/components/UserAnalytics'

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
  },
}

export default async function RootLayout({
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

      <UserAnalytics />
    </html>
  )
}
