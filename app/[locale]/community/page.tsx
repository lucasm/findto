import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import CardsLink from '@/components/CardsLink'
import { useTranslations } from 'next-intl'

const title = 'Community'
const description =
  'Support Findto to build a better, free, and universal search.'

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

            <p>Findto is an assistant for decentralized search.</p>

            <p>
              We&apos;re introducing a decentralized search experience, where
              people have control over the search algorithms and sources.
            </p>

            <p>Findto is made collaboratively, as an open source project.</p>

            <br></br>
            <br></br>

            <h3>Code of Conduct</h3>

            <p>
              Findto is made by individuals, like you. Note that all members of
              the community agree to be kind to each other, following our{' '}
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

            <h2>Findto Principles</h2>

            <p>
              Our mission is to empower people to search on the Web, AI, and
              more spaces on the internet, in healthy ways.
            </p>

            <p>
              We are researching and are interested in partner with services,
              organizations, and volunteers to strengthen open source
              technologies of:
            </p>
            <ul>
              <li>Decentralized web</li>
              <li>Open access</li>
              <li>Responsible AI</li>
              <li>Ubiquitous computing</li>
              <li>Privacy</li>
              <li>Web accessibility</li>
              <li>Carbon neutrality (United Nations 2030 Agenda)</li>
              <li>
                Digital democracy and sovereignty of the peoples (Brazil
                Diplomacy Principle)
              </li>
            </ul>

            <p>
              If you share this vision, feel free to contribute with Findto
              project. We are looking forward to hearing you! Join us and get
              involved!
            </p>
            <br></br>
            <br></br>

            <h2>Supporting Findto</h2>

            <p>You can choose your favorite platform to support Findto:</p>

            <ul>
              <li>
                <a
                  href="https://patreon.com/findto"
                  target="_blank"
                  rel="noreferrer">
                  Patreon
                </a>
              </li>

              <li>
                <a
                  href="https://ko-fi.com/findto"
                  target="_blank"
                  rel="noreferrer">
                  Ko-Fi (one-time donation)
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://github.com/sponsors/lucasm"
                  target="_blank"
                  rel="noreferrer">
                  GitHub Sponsors
                </a>{' '}
              </li>
            </ul>
          </article>
        </div>
      </section>
    </WebsiteLayout>
  )
}
