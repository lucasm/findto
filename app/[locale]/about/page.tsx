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
                <h2>Choose your search source</h2>
                <p>
                  With Findto you can search across multiple sources at once.
                  It’s your assistant for decentralized search — elevating your
                  search experience. Get control of the algorithms.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimateText />
              <div>
                <h2>Protect your searches</h2>
                <p>
                  Every search leaves a trace. Check privacy, security, and
                  carbon footprint of each search source. Make safer choices,
                  protect your data, and help the environment.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimatePressMe />
              <div>
                <h2>Make the open source</h2>
                <p>
                  Findto is an open source project building a universal search
                  experience where diversity is key — and people stay in
                  control.
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
            <h2>Find something today</h2>
            <p>Search decentralized. Truly free.</p>
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
