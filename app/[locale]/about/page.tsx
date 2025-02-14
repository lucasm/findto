import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import { useTranslations } from 'next-intl'
import CardsFeat from '@/components/CardsFeat'
import SvgIllustrations from '@/components/SvgIllustrations'
import Button from '@/components/Button'
import SvgLogo from '@/components/SvgLogo'
import Link from 'next/link'

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
            <div>
              <article>
                <h2>Get control of AI and Web search</h2>
                <p>
                  Findto is an assistant for decentralized search. Findto puts
                  people in control of algorithms. You can search the same term
                  between diverse sources, at glance.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="people" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>More privacy, less carbon</h2>
                <p>
                  Findto show estimated privacy level and carbon footprint of
                  every search source. Make better choices for the planet and
                  for your privacy.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="search" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>Made by people</h2>
                <p>
                  Findto is an open source project for a better universal search
                  experience. Where diversity is key. Where people&apos;s
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
            <h2>A powerful search experience</h2>
            <p>More than one search engine. Decentralized search.</p>
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
