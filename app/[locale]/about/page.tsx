import Link from 'next/link'
import { useTranslations } from 'next-intl'

import BannerAnimateCircleNav from '@/components/BannerAnimateCircleNav'
import BannerAnimatePressMe from '@/components/BannerAnimatePressMe'
import BannerAnimateText from '@/components/BannerAnimateText'
import Button from '@/components/Button'
import CardsFeat from '@/components/CardsFeat'
import SvgLogo from '@/components/SvgLogo'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'

export const metadata = {
  title: 'About',
  description: 'Findto is an assistant for decentralized search on Web and AI.',
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
        </div>
      </section>

      <section id="more">
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <article>
              <BannerAnimateCircleNav />
              <div>
                <h2>Choose your source</h2>
                <p>
                  With Findto, you can search across multiple sources at once.
                  It’s your assistant for decentralized search. Elevate your
                  search experience. Take control of Web search algorithms and
                  AI models.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimateText />
              <div>
                <h2>Transparency of search</h2>
                <p>
                  Every search leaves a trace in datacenters. With Findto, you
                  can check the estimated levels of privacy, security, and
                  carbon footprint of each source. Make safer choices for
                  yourself and contribute to protecting Planet Earth.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimatePressMe />
              <div>
                <h2>Open source project</h2>
                <p>
                  Findto is an open source project. We are building a universal
                  search experience where diversity is key, and people remain in
                  control every step of the way. Join us, contribute, and help
                  create a better search experience for everyone.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={Style.blueBackground}>
        <div className={Style.container}>
          <CardsFeat />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>Find something new for you</h2>
            <p>Search decentralized. Truly open.</p>
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
