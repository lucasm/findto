/* eslint-disable react/no-unescaped-entities */
import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/LayoutPage'

export default function PagePrivacy() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="See how Findto respects your privacy and the users data.">
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Privacy Policy</h1>
            <p>
              Findto is built for privacy. We don't store any searches. Redirect to third-party
              services may cause collection and storage of your personal data, which is why Findto
              show a "privacy ranking" of every search provider.
            </p>
            <p>Effective date: June 10, 2023</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>1. Privacy is a right</h2>

            <p>
              The mission of Findto is encourage the diversity and peoples choice for a democratic
              and healthier internet. This policy respect your privacy regarding any information we
              may collect from you across our services accessible at{' '}
              <a href="http://findto.app">http://findto.app</a> ("Findto").
            </p>

            <p>
              This privacy policy have accordance with the General Data Protection Law (Brazil LGPD)
              and General Data Protection Regulation (European Union GDPR). Findto endorses these
              legislation's as they allow user control over their data.
            </p>

            <p>Using Findto you are agreeing to be bound by this policy.</p>

            <h2>2. Automatically collected information</h2>

            <p>
              Findto automatically collect and store minimal public information (non personal data)
              with purpose to provide web search functionality. Such as pages that you access,
              location (country and city), device specs (operational system and browser), internet
              service provider, IP address, referral URL, exit pages, time stamp, and similar data
              about its use and interaction.
            </p>

            <h2>3. Information that you provide</h2>

            <p>
              Findto only receives and stores identifiable information (personal data) for those who
              chose identify themselves. Data that you enter on contact or feedback forms, donations
              platforms or give in any other way, including but not limited to: your name, email
              address and phone number.
            </p>

            <p>
              Findto only ask for personal information when we truly need it to provide a service to
              you. We collect it by fair and lawful means, with your knowledge and consent. We also
              let you know why we're collecting it and how it will be used.
            </p>

            <h2>4. Use of your information</h2>

            <p>Findto only use your information with the purpose of: </p>

            <p>
              a) communicate with you to understand your feedback, respond to inquiries and provide
              requested content;
            </p>

            <p>
              b) anonymously analyze the users behavior to personalize and improve user experience;
            </p>

            <p>
              c) detect and prevent activities that be illegal, harmful to people and organizations
              or violate copyright and intellectual property rights.
            </p>

            <h2>5. Cookies and tracking technologies</h2>

            <p>
              Findto and it's related email communications, use cookies and similar technologies,
              such as cache and local storage, only to execute app functionalities, like to
              recognize when you view or return to a page.{' '}
            </p>

            <p>
              The{' '}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                target="_blank"
                rel="noopener noreferrer">
                Microsoft Clarity
              </a>
              ,{' '}
              <a
                href="https://support.google.com/analytics/answer/6004245"
                target="_blank"
                rel="noopener noreferrer">
                Google Analytics
              </a>{' '}
              and{' '}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer">
                Cloudflare
              </a>{' '}
              services are used to optimize Findto, and can put their own cookies in your browser.
              This policy not covers use of cookies by third parties. Click on the links above to
              read their privacy policies.{' '}
            </p>

            <p>
              If you use an "ad blocker" browser extension or have enabled some "do not track"
              functionality on settings, the cookies maybe are not set.
            </p>

            <h2>6. Sharing your information</h2>

            <p>
              Findto do not share any personally identifying information with third-parties. But for
              technical reasons and unintentionally, it may share with the services listed above and
              when redirecting the user to a search provider. These entities may have access to
              personal information to perform their functions. Thinking about it, Findto displays a
              "privacy ranking" of every search provider, whenever available.
            </p>

            <h2>7. Store and protection of your information</h2>

            <p>
              Findto only retain collected information for as long as necessary to provide to you
              the requested service. The data we store, we'll protect within commercially acceptable
              means to prevent unauthorized access. You are free to refuse our request for your
              personal information, with the understanding that we may be unable to provide you with
              some of your desired services.
            </p>

            <h2>8. Opting out</h2>

            <p>
              Findto strongly encourages you take a look on third parties privacy policies linked
              above and of every search provider, to know how this services are handling your data
              and how proceed to opt out of them individually.
            </p>

            <h2>9. External links</h2>

            <p>
              Findto redirects and contain links to external websites and applications just for your
              convenience of search functionality. Please be aware, that Findto not endorse, have no
              control over the content and practices of any third party internet resources, and
              cannot accept liability or responsibility for their respective privacy policies, that
              are not operated by Findto. We advised you to review the privacy policy of every them,
              as possible.
            </p>

            <h2>10. Changes to this policy</h2>

            <p>
              Note that this policy can be revised at any time without notice. However, significant
              changes will be announced on Findto's communication channels. Your continued use of
              Findto, following the posting of changes, will be regarded as acceptance of these
              changes.
            </p>

            <h2>11. Contact for questions or requests</h2>

            <p>
              If you have any questions about how Findto handle public user data (unidentifiable)
              and personal information (identifiable), or data requests, contact sending an email at{' '}
              <a href="mailto:legal@findto.app">legal@findto.app</a>.
            </p>

            <p>Thanks for reading. Happy searches!</p>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}
