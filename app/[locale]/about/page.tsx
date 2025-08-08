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
                  Want to search across multiple sources at once? With Findto,
                  you can. It’s your assistant for decentralized search —
                  elevating your search experience.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimateText />
              <div>
                <h2>Protect your searches</h2>
                <p>
                  Every search leaves a trace. Check the estimated privacy,
                  security, and carbon footprint of each search source — and
                  make smarter, safer choices.
                </p>
              </div>
            </article>

            <article>
              <BannerAnimatePressMe />
              <div>
                <h2>Contribute to open source</h2>
                <p>
                  Findto is an open-source project building a universal search
                  experience — where diversity matters and people stay in
                  control of search algorithms.
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
            <h2>Start your new search</h2>
            <p>
              It’s more than search. It’s decentralized, open, and truly yours.
            </p>
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
