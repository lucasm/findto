import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import CardsLink from '@/components/CardsLink'
import { useTranslations } from 'next-intl'

const title = 'Community'
const description =
  'Help make Findto searches decentralized, accessible and sustainable.'

export const metadata = {
  title: title,
  description: description,
}

export default function CommunityPage() {
  const t = useTranslations('t')

  return (
    <WebsiteLayout>
      <section className="colors">
        <div className={Style.container}>
          <h1>{t('community') ?? title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <CardsLink />

          <article>
            <h2>Welcome</h2>

            <p>
              Findto is an open source project for decentralized Web and AI
              search.
            </p>

            <p>
              We are developing a new free search experience. Made by people
              like you!
            </p>

            <p>
              The Findto mission is to put people on control of the search
              algorithms to positively impacts internet and the planet.
            </p>

            <p>
              Findto is committed to the United Nations 2030 Agenda for
              sustainable development. We are very interested in researching and
              partnerships with services to strengthen technologies of open
              access, democracy, privacy, web accessibility, diversity,
              responsible AI, and carbon neutrality.
            </p>

            <p>
              If you share this vision, feel free to help us build Findto.
              Donate, send feedback or follow us. Thank you!
            </p>

            <br></br>
            <br></br>

            <h2>Code of Conduct</h2>
            <p>
              All members of Findto community agree to be kind to each other,
              following our{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                Code of Conduct
              </a>{' '}
              for common good.
            </p>
            {/* <h3>* Supporting</h3>
            <p>
              You can choose your favorite platform to support Findto and enjoy exclusive benefits:
            </p>

            <p>
              <a href="https://patreon.com/findto" target="_blank" rel="noreferrer">
                Support us via Patreon
              </a>
            </p>

            <p>
              <a href="https://ko-fi.com/findto" target="_blank" rel="noreferrer">
                Support us via Ko-Fi
              </a>
            </p>

            <p>
              <a href="https://github.com/sponsors/lucasm" target="_blank" rel="noreferrer">
                Support us via GitHub Sponsors
              </a>
            </p> */}
          </article>
        </div>
      </section>
    </WebsiteLayout>
  )
}
