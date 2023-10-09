import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'

export default function PageTerms() {
  return (
    <LayoutPage title="Terms of Service" description="See how to use Findto for the common good">
      <section className="colors">
        <div className={Style.container}>
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>1. Welcome to Findto</h2>
            <p>
              By accessing services at internet domain{' '}
              <a href="http://findto.app">http://findto.app</a> ("Findto"), you are agreeing to be
              bound by these terms of service, all applicable laws and regulations of Brazil, and
              agree that you are responsible for compliance with any applicable local laws. If you
              do not agree with any of these terms, please, do not use or access Findto.
            </p>

            <p>
              Findto is an assistant for decentralized web search, and redirects to the original
              third-party services.
            </p>

            <h2>2. Use License and Intellectual Property</h2>
            <p>
              The Findto source code is open source under MIT License. But some materials contained
              on Findto are protected by copyright and trademark laws. Findto respects the
              intellectual property of others and our partners, and expects users to do the same.
              Findto uses these materials for your convenience. As a user, you must respect the laws
              that grant only the right to reasonable proper viewing and use.
            </p>
            <p>
              Users have a permission, granted to temporarily, to download one copy of these
              protected materials on Findto for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you
              may not:
            </p>
            <p>a) modify or copy the materials;</p>
            <p>b) use the materials for any commercial purpose;</p>
            <p>c) remove any copyright or other proprietary notations from the materials;</p>
            <p>
              d) transfer the materials to another person or "mirror" the materials on any other
              server.
            </p>
            <p>
              This license shall automatically terminate if you violate any of these restrictions
              and may be terminated by Findto at any time.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Findto are provided on an "as is" basis. Findto makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of
              rights.
            </p>
            <p>
              Further, Findto does not warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on its service or otherwise
              relating to such materials or on any sites linked.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Findto or its partners be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Findto's website, even if
              Findto or a Findto authorized representative has been notified orally or in writing of
              the possibility of such damage. Because some jurisdictions do not allow limitations on
              implied warranties, or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Findto's service could include technical, typographical, or
              photographic errors. Findto does not warrant that any of the materials on its service
              are accurate, complete or current. Findto may make changes to these materials at any
              time without notice. However Findto does not make any commitment keep the materials
              updated.
            </p>

            <h2>6. External APIs and Links</h2>
            <p>
              Findto has not reviewed all of services linked and is not responsible for the contents
              of any third-party services. The inclusion of any external link or data from
              third-party APIs does not imply endorsement by Findto. Use of any such linked service
              is at the user's own convenience and risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Findto may revise these terms of use at any time without notice. By using Findto, you
              are agreeing to be bound by the then current version of these terms of service. You
              might receive an alert on the Findto services informing you of significant changes.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws
              of Brazil and you irrevocably submit to the exclusive jurisdiction of the courts in
              that State or location.
            </p>

            <h2>9. Report Violations and Removals</h2>

            <p>
              All trademarks and external services found on Findto belong to their respective owners
              and have attribution to the original source. All rights reserved to the owners. Even
              though for users convenience Findto redirects to the original sources, is impossible
              to revise the content of each them.
            </p>

            <p>
              If you are a legal entity and believe that your intelectual property or service has
              been used incorrectly on Findto, please, mail to legal@findto.app. As a user, if you
              are facing law violations or bad conduct by some external service, please, consider
              report for properly removal.
            </p>

            <h2>10. Questions</h2>
            <p>If you have any legal questions send an email to legal@findto.app.</p>

            <p>Effective date: June 10, 2023.</p>
          </article>
        </div>
      </section>
    </LayoutPage>
  )
}
