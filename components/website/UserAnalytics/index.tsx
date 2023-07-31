import Script from 'next/script'

export default function UserAnalytics() {
  const isProduction: boolean =
    typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ENV_FINDTO === 'production'

  return (
    <>
      {isProduction && (
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
      )}

      {isProduction && (
        <Script
          strategy="afterInteractive"
          src={'https://www.googletagmanager.com/gtag/js?id=' + process.env.NEXT_PUBLIC_ANALYTICS_G}
        />
      )}

      {isProduction && (
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
      )}
    </>
  )
}
