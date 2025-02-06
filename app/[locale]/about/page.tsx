import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import { useTranslations } from 'next-intl'
import CardsFeat from '@/components/CardsFeat'
import SvgIllustrations from '@/components/SvgIllustrations'
import Button from '@/components/Button'
import SvgLogo from '@/components/SvgLogo'

export const metadata = {
  title: 'About',
  description:
    'Findto is an assistant for decentralized search on Web, AI and Metaverse.',
}

export default function PageAbout() {
  const t = useTranslations('t')

  return (
    <WebsiteLayout>
      <section>
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Decentralized search, for everyone.</h1>
          <p>Findto is an open source assistant for decentralized search.</p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <div>
              <article>
                <h2>Get control of AI and Web.</h2>
                <p>
                  Findto puts people in control of algorithms. Switch between
                  diverse sources, like Web or AI. Find anything.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="people" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>Less carbon and more privacy.</h2>
                <p>
                  Findto is fighting for a better internet. We are working to
                  show estimated carbon footprint and privacy level of every
                  search source. Better choices with transparency!
                </p>
              </article>

              <figure>
                <SvgIllustrations type="search" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>Made by people.</h2>
                <p>
                  Findto is an open source project for an accessible, universal
                  search experience. Where diversity is key. Where people&apos;s
                  choices matter.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="phone" color="fillFindto" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className={Style.colorfulBackground}>
        <div className={Style.container}>
          <CardsFeat />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>A powerful search experience.</h2>
            <p>More than a search engine. Decentralized search.</p>
            <Button url="/" color="black">
              <>
                <SvgLogo />
                {t('openApp')}
              </>
            </Button>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  )
}
