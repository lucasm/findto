import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'

export default function PageTerms() {
  return (
    <LayoutPage title="Terms of Use" description="See how to use Findto for the common good">
      <section className="colors">
        <div className={Style.container}>
          <h1>Terms</h1>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h2>1. Terms of service</h2>

            <p>Last update: June 10, 2023.</p>

            <p>
              By accessing the apps, websites and services at internet domain{' '}
              <a href="http://findto.app">http://findto.app</a> ("Findto"), you are agreeing to be
              bound by these terms of use, all applicable laws and regulations of Brazil, and agree
              that you are responsible for compliance with any applicable local laws. If you do not
              agree with any of these terms, you are prohibited from using or accessing Findto.
            </p>

            <h2>2. Use license</h2>
            <p>
              The Findto source code is open source. But there are materials contained on Findto are
              protected by copyright and trademark laws.
            </p>

            <p>
              A permission is granted to temporarily download one copy of these protected materials
              on Findto for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>

            <p>a) modify or copy the materials;</p>
            <p>
              b) use the materials for any commercial purpose, or for any public display (commercial
              or non-commercial);
            </p>
            <p>c) remove any copyright or other proprietary notations from the materials;</p>
            <p>
              d) transfer the materials to another person or "mirror" the materials on any other
              server.
            </p>

            <p>
              This license shall automatically terminate if you violate any of these restrictions
              and may be terminated by Findto at any time. Upon terminating your viewing of these
              materials or upon the termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed format.
            </p>

            <p>
              Findto uses materials protected by copyright and trademark for your convenience. As a
              user, you must respect the laws that grant only the right to reasonable proper viewing
              and use.{' '}
            </p>

            <h2>3. Disclaimer</h2>

            <p>
              The materials on Findto are provided on an 'as is' basis. Findto makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property or other violation of
              rights.
            </p>
            <p>
              Further, Findto does not warrant or make any representations concerning the accuracy,
              likely results, or reliability of the use of the materials on its website or otherwise
              relating to such materials or on any sites linked to this site.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Findto or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on Findto's
              website, even if Findto or a Findto authorized representative has been notified orally
              or in writing of the possibility of such damage. Because some jurisdictions do not
              allow limitations on implied warranties, or limitations of liability for consequential
              or incidental damages, these limitations may not apply to you.
            </p>

            <h2>5. Accuracy of materials</h2>
            <p>
              The materials appearing on Findto's website could include technical, typographical, or
              photographic errors. Findto does not warrant that any of the materials on its website
              are accurate, complete or current. Findto may make changes to the materials contained
              on its website at any time without notice. However Findto does not make any commitment
              to update the materials.
            </p>

            <h2>6. External links</h2>
            <p>
              Findto has not reviewed all of the sites linked to its website and is not responsible
              for the contents of any such linked site. The inclusion of any link does not imply
              endorsement by Findto of the site. Use of any such linked website is at the user's own
              risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Findto may revise these terms of use at any time without notice. By using Findto, you
              are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. Governing law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws
              of Brazil and you irrevocably submit to the exclusive jurisdiction of the courts in
              that State or location.
            </p>
          </article>
        </div>
      </section>
    </LayoutPage>
  )
}
