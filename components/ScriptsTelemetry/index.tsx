import Script from 'next/script'

const ScriptsTelemetry = () => {
  // Não carregar em dev
  if (process.env.NODE_ENV !== 'production') return null

  const CLARITY_ID = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  return (
    <>
      {/* 1) Google Consent Mode: estado padrão NEGADO antes de qualquer outro uso do gtag */}
      <Script
        id="google-consent-default"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Estado default: tudo "denied" até o usuário aceitar
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
          `,
        }}
      />

      {/* 2) Carrega GA (gtag.js) */}
      {GA_ID && (
        <Script
          id="google-tag"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      )}

      {/* 3) Inicializa GA (config) — após default de consent já ter sido definido */}
      {GA_ID && (
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      )}

      {/* 4) Microsoft Clarity tag — opera em "no-consent mode" até receber consentv2 'granted' */}
      {CLARITY_ID && (
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
      )}

      {/* 5) Sincroniza consentimento salvo no localStorage logo após interação inicial
            - Se o usuário já aceitou no passado, promovemos 'granted'
            - Caso contrário, permanecemos 'denied' pelo default acima */}
      <Script
        id="consent-sync-from-localstorage"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var accepted = false;
              try {
                accepted = JSON.parse(localStorage.getItem('isCookiesAccepted') || 'false');
              } catch (e) {}

              if (accepted) {
                // Google
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    ad_storage: 'granted',
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                    analytics_storage: 'granted',
                  });
                }

                // Clarity
                if (typeof window.clarity === 'function') {
                  window.clarity('consentv2', {
                    ad_storage: 'granted',
                    analytics_storage: 'granted',
                  });
                }
              } else {
                // Reforça denied (opcional, pois já está como default)
                if (typeof window.gtag === 'function') {
                  window.gtag('consent', 'update', {
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                    analytics_storage: 'denied',
                  });
                }
                if (typeof window.clarity === 'function') {
                  window.clarity('consentv2', {
                    ad_storage: 'denied',
                    analytics_storage: 'denied',
                  });
                }
              }
            } catch (err) {
              // silencioso
            }
          `,
        }}
      />
    </>
  )
}

export default ScriptsTelemetry
