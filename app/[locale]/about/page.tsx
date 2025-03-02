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
                <h2>Multiple sources</h2>
                <p>
                  Search the same term between diverse sources, at once. Findto
                  is an assistant for decentralized search.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="people" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>Freedom of search</h2>
                <p>
                  Findto show estimated carbon footprint, privacy and liberty of
                  expression level of every search source. Make better choices.
                </p>
              </article>

              <figure>
                <SvgIllustrations type="search" color="fillFindto" />
              </figure>
            </div>

            <div>
              <article>
                <h2>Made by community</h2>
                <p>
                  Findto is an open source project for an universal search
                  experience. Where diversity is key. Where people stay on
                  control of algorithms.
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
            <h2>An ubiquitous and powerful search experience</h2>
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
