import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'

export const metadata = {
  title: 'Pricing',
  description: 'Be more productive. Unlock advanced features.',
}

export default function PagePricing() {
  return (
    <WebsiteLayout>
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Pricing</h1>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <div className={Style.container}>
              <h2>Why buy Pro?</h2>
              <p>
                Findto is always free, but if you want to get powerful features,
                like:
              </p>

              <p>
                <strong>Profiles</strong> - the search interface becomes
                customizable for a professional profile (devs, designers,
                scientists, entrepreneurs, lawyers etc)
              </p>

              <p>
                <strong>Suggestions</strong> - UNLIMITED on all categories of
                search
              </p>

              <p>
                <strong>Trends</strong> - UNLIMITED on all categories of search
              </p>

              <p>
                Consider buy a Findto Pro license - and you are also supporting
                the open and decentralized web!
              </p>
            </div>
          </article>
        </div>
      </section>
    </WebsiteLayout>
  )
}
