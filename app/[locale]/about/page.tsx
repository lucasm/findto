import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import { useTranslations } from 'next-intl'
import CardsFeat from '@/components/CardsFeat'
import Button from '@/components/Button'
import SvgLogo from '@/components/SvgLogo'
import Link from 'next/link'
import CircleNav from '@/components/CircleNav'
import TextAnimateNav from '@/components/TextAnimateNav'
import PressMeNav from '@/components/PressMeNav'

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
          <Link href="/">
            <figure className={Style.icon}></figure>
          </Link>

          <h1>{t('componentBanner.title')}</h1>
          <p>{t('componentBanner.description')}</p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <article>
              <CircleNav />
              <div>
                <h2>Decentralized search</h2>
                <p>
                  Search across multiple sources and modes simultaneously.
                  Findto is an assistant for decentralized search.
                </p>
              </div>
            </article>

            <article>
              <TextAnimateNav />
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
              <PressMeNav />
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
