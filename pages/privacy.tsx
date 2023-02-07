/* eslint-disable react/no-unescaped-entities */
import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/PageLayout'

export default function Privacy() {
  return (
    <PageLayout title="Privacy Policy" description="See how Findto respects your privacy and public user data.">
      <section className={Style.colors}>
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Privacy Policy</h1>
            <p>Last update: October 10, 2022</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>1. Your privacy is important</h2>

            <p>
              The mission of Findto is encourage the diversity and peoples choice, for a democratic and healthier internet. This policy
              respect your privacy regarding any information we may collect from you across our apps and websites accessible at{' '}
              <a href="http://findto.app">http://findto.app</a> ("Findto").
            </p>

            <p>
              This privacy policy have accordance with the General Data Protection Law (Brazil LGPD) and General Data Protection Regulation
              (EU GDPR). Findto endorses these legislations as they allow user control over their data.
            </p>

            <p>
              Using Findto you are agreeing to be bound by this policy. Please, if you don't agree with any of the practices bellow, don't
              use Findto.
            </p>

            <h2>2. Automatically collected data</h2>

            <p>
              Findto may collect public and non-personal information, such as pages that you access, location (country and city), device
              specs (operational system and browser), internet service provider, IP address, referral URL, exit pages, time stamp, and
              similar data about its use and interaction.
            </p>

            <h2>3. Information that you provide</h2>

            <p>
              Findto also receives and stores personally identifiable information that you enter on contact forms or give in any other way,
              including but not limited to: your name, email address and phone number.
            </p>

            <p>
              Findto only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful
              means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>

            <h2>4. Cookies and tracking</h2>

            <p>
              Findto and its related email communications, use some cookies and similar technologies, such as pixels, cache and local
              storage, to recognize when you view or return to a page, and to execute offline experiences. The{' '}
              <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer">
                Google Analytics
              </a>{' '}
              web analytics service and{' '}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                Cloudflare
              </a>{' '}
              CDN and traffic optimization services are used, and can put their own cookies in your browser. This policy not covers use of
              cookies by third parties. If you use an ad blocker browser extension or have enabled the "Do Not Track" functionality in your
              browser settings, the cookies maybe are not set.
            </p>

            <h2>5. Sharing your information</h2>

            <p>
              Findto do not share any personally identifying information publicly or with third-parties, and when required to by law. Except
              and only ends up share for techinal reasons, with the services listed in previous paragraph and the email delivery service{' '}
              <a href="http://docs.formspree.io/files/privacy.pdf" target="_blank" rel="noopener noreferrer">
                Formspree
              </a>
              . These entities may have access to personal information, if needed, to perform their functions.
            </p>

            <h2>6. Use of your information</h2>

            <p>
              Findto use your information with the only purpose of: i) communicate with you, respond to inquiries and provide requested
              content; ii) anonymously analyze the audience behavior to personalize and improve user experience; iii) detect and prevent
              activities that be illegal, harmful or violate copyright.
            </p>

            <h2>7. Store and protection of information</h2>

            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store,
              we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure,
              copying, use or modification.
            </p>

            <p>
              You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you
              with some of your desired services.
            </p>

            <h2>8. Opting out</h2>

            <p>
              Findto strongly encourages you take a look on third parties privacy policies linked above, to know how this services are
              handling your data and how proceed to opt out of them individually.
            </p>

            <h2>9. External links</h2>

            <p>
              Findto may contain links to external websites and applications just for your convenience. Please be aware, that Findto not
              endorse, have no control over the content and practices of any third party internet resources, and cannot accept
              responsibility or liability for their respective privacy policies, that are not operated by Findto. Is advised you to review
              the privacy policy of every them as posible.{' '}
            </p>

            <h2>10. Changes to this policy</h2>

            <p>
              Note that this policy can be revised at any time without notice. Your continued use of Findto, following the posting of
              changes, will be regarded as acceptance of these changes.
            </p>

            <h2>11. Contact us</h2>

            <p>
              If you have any questions about how Findto handle public user data (unidentifiable) and personal information (identifiable),
              feel free to contact us by email at <a href="mailto:legal@findto.app">legal@findto.app</a>.
            </p>

            <p>Thank you for reading. Happy searches.</p>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}
