import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import CardsLink from '@/components/CardsLink'
import { useTranslations } from 'next-intl'

const title = 'Community'
const description =
  'Join on the Findto community and help us to build a better internet.'

export const metadata = {
  title: title,
  description: description,
}

export default function CommunityPage() {
  const t = useTranslations('t')

  return (
    <WebsiteLayout>
      <section>
        <div className={Style.container}>
          <h1>{t('community') ?? title}</h1>
          <p>{description}</p>

          <CardsLink />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>Welcome!</h2>

            <p>
              Findto is an assistant for decentralized search, available on
              Findto.app.
            </p>

            <p>
              Our mission is to empower people to search on the Web, AI,
              Metaverse - and more digital spaces on the internet - in healthy
              ways.
            </p>

            <p>
              We&apos;re introducing a new search experience, putting control of
              search algorithms in people hands. Findto is 100% open source,
              collaborative and free.
            </p>

            <br></br>
            <br></br>

            <h2>Researching for a better internet</h2>
            <p>
              We are researching and are interested in partnerships with
              services, organizations, professionals and volunteers to
              strengthen technologies of:
            </p>
            <ul>
              <li>Decentralized web</li>
              <li>Open access</li>
              <li>Responsible AI</li>
              <li>Privacy</li>
              <li>Web accessibility</li>
              <li>
                Carbon neutrality and United Nations 2030 Agenda for sustainable
                development
              </li>
              <li>Diversity</li>
              <li>Digital democracy</li>
              <li>Blockchain</li>
              <li>Metaverse</li>
            </ul>

            <p>
              If you share this vision, feel free to contribute with Findto
              project. We are looking for partners to join us.
            </p>
            <br></br>
            <br></br>

            <h2>Code of Conduct</h2>

            <p>
              Findto is made by individuals, like you. Join us and get involved!
              Note that all members of the Findto community agree to be kind to
              each other, following our{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                Code of Conduct
              </a>{' '}
              for common good.
            </p>

            <br></br>
            <br></br>

            <h2>Support Findto</h2>

            <p>You can choose your favorite platform to support Findto:</p>

            <p>
              <a
                href="https://patreon.com/findto"
                target="_blank"
                rel="noreferrer">
                Patreon
              </a>
            </p>

            <p>
              <a
                href="https://ko-fi.com/findto"
                target="_blank"
                rel="noreferrer">
                Ko-Fi (one-time donation)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noreferrer">
                GitHub Sponsors
              </a>
            </p>
          </article>
        </div>
      </section>
    </WebsiteLayout>
  )
}
