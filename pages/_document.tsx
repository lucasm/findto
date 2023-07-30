import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="Findto" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

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

        {/* Scripts */}
        {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
          <>
            <Script
              id="MICROSOFT-CLARITY"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_ANALYTICS_MS}");
                `,
              }}
            />

            <Script
              strategy="afterInteractive"
              src={
                'https://www.googletagmanager.com/gtag/js?id=' + process.env.NEXT_PUBLIC_ANALYTICS_G
              }
            />
            <Script
              id="GOOGLE-ANALYTICS"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_G}');
                `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
