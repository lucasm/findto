import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import CardsFeat from '@/components/CardsFeat'
import Button from '@/components/Button'
import SvgLogo from '@/components/SvgLogo'
import BannerAnimateCircleNav from '@/components/BannerAnimateCircleNav'
import BannerAnimateText from '@/components/BannerAnimateText'
import BannerAnimatePressMe from '@/components/BannerAnimatePressMe'
import CardsLink from '@/components/CardsLink'

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
          <Link href="#more">
            <figure className={Style.icon}></figure>
          </Link>

          <h1>{t('metadata.title')}</h1>
          <p>{t('metadata.description')}</p>

          <CardsLink />
        </div>
      </section>

      <section id="more">
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <article>
              <BannerAnimateCircleNav />
              <div>
                <h2>Decentralized search</h2>
                <p>
                  Search across multiple sources and modes simultaneously.
                  Findto is an assistant for decentralized search.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimateText />
              <div>
                <h2>Safe search</h2>
                <p>
                  View estimated security, privacy, and carbon footprint level
                  of every search source. Make better choices with Findto, for
                  you, and for the planet.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimatePressMe />
              <div>
                <h2>Open search</h2>
                <p>
                  As an open source project, Findto is building an universal
                  search experience. Where diversity is key. Where people stay
                  on control of algorithms.
                </p>
              </div>
            </article>
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
            <h2>A powerful search experience</h2>
            <p>More than search. Decentralized search.</p>
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
