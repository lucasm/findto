import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import CardsLink from '@/components/CardsLink'
import { useTranslations } from 'next-intl'

const title = 'Community'
const description = 'Help us build the open source decentralized search.'

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
            <h2>Welcome to Findto</h2>
            <p>
              Findto is an assistant for decentralized search on Web and AI.
            </p>

            <p>
              Our mission is to empower people to engage with the Web and AI in
              healthy ways.
            </p>

            <p>
              We're introducing a new search experience, putting control of
              search algorithms in your hands. Free and open source.
            </p>

            <p>
              Findto is made by individuals like you. Join us and get involved!
            </p>

            <br></br>
            <br></br>

            <h2>Researching AI and Web</h2>
            <p>
              We are researching and are interested in partnerships with
              services to strengthen technologies of open access, decentralized
              web, responsible AI, privacy, web accessibility, carbon
              neutrality, diversity, and digital democracy. Findto is committed
              to the United Nations 2030 Agenda for sustainable development.
            </p>
            <p>If you share this vision, feel free to contribute with us.</p>
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
