import { useTranslations } from 'next-intl'

import CardsLink from '@/components/CardsLink'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import Style from '@/layouts/WebsiteLayout/WebsiteLayout.module.css'

export const metadata = {
  title: 'Contribute',
  description:
    'Support Findto open source project with a donation or by contributing to the code.',
}

export default function PageContribute() {
  const t = useTranslations('t')

  return (
    <WebsiteLayout>
      <section>
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>{t('contribute')}</h1>
          </div>
          <CardsLink />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>Why Support Findto?</h2>
            <p>
              Findto is free for everyone and built collectively. We&apos;re an
              open-source project driven by people who believe in digital
              freedom, transparency, and technology as a force for good.
            </p>

            <h3>Our Mission</h3>
            <p>
              Our mission is to empower everyone to search across digital spaces
              in healthy, productive and democratic ways.
            </p>

            <h3>Principles</h3>
            <p>
              We are researching and seeking partnerships with services,
              organizations, and volunteers to strengthen open-source
              technologies focused on:
            </p>
            <ul>
              <li>Decentralized Web Search</li>
              <li>Open Data Access</li>
              <li>Responsible AI</li>
              <li>Ubiquitous Computing</li>
              <li>Privacy</li>
              <li>Web Accessibility</li>
              <li>Carbon Neutrality (United Nations 2030 Agenda)</li>
              <li>
                Digital Democracy and the Sovereignty of Peoples (Brazilian
                Diplomatic Principle)
              </li>
            </ul>

            <h3>Get Involved</h3>

            <p>
              If you share Findto vision, feel free to contribute to the
              project.
            </p>

            <p>
              Consider making a donation to support us — and help build an open
              and decentralized web!
            </p>
          </article>
        </div>
      </section>
    </WebsiteLayout>
  )
}
