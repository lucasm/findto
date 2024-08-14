import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import CardsFeat from '@/components/CardsFeat'
import Button from '@/components/Button'
import Svg from '@/components/Svg'
import { useTranslations } from 'next-intl'

const description =
  'Findto is a tool for decentralized Web & AI search. Get control over search algorithms, privacy and carbon.'

export const metadata = {
  title: 'About',
  description: description,
}

export default function PageAbout() {
  const t = useTranslations('t')

  return (
    <WebsiteLayout>
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>{t('slogan')}</h1>
          <p>
            Findto is a decentralized search assistant. Get control over AI and
            Web search algorithms. Explore a healthy internet.
          </p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <div>
              <figure>
                <Svg type="people" color="colorsSvg" />
              </figure>

              <article>
                <h2>Get control over AI and Web search</h2>
                <p>
                  Findto is reverting the default, and putting people on control
                  of the algorithms. Find anything switching between diverse AI
                  and Web sources. More productive and accessible searches than
                  ever.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>

              <article>
                <h2>More privacy and less carbon</h2>
                <p>
                  Findto displays the estimated privacy level and carbon
                  footprint of every search provider. Explore making better
                  choices - for you and the planet.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Decentralized, free and open source</h2>
                <p>
                  The monopoly is dangerous. Findto encourages a truly open
                  search experience, where people choices matter. We are here
                  trying to building a better internet.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="colors">
        <div className={Style.container}>
          <h3>Features</h3>

          <CardsFeat />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>A renewed search experience</h2>
            <p>Decentralized search. Build by people, for people.</p>
            <Button url="/" color="colors">
              {t('openApp')}
            </Button>
          </div>
        </div>
      </section>
    </WebsiteLayout>
  )
}
