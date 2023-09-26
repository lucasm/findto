import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="Findto" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Findto" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
        <meta name="apple-mobile-web-app-title" content="Findto" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Meta */}
        <meta itemProp="image" content="https://findto.app/share.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Findto" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://findto.app/share.png" />

        <meta name="twitter:site" content="@findtoapp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://findto.app/share.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
