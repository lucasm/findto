/* eslint-disable react/no-unescaped-entities */
import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'

export default function PagePrivacy() {
  return (
    <LayoutPage title="Pro" description="See how Findto respects your privacy and the users data.">
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Findto Pro</h1>
            <p>Be more productive. Unlock advanced features.</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <h2>Why buy Pro?</h2>
          <p>Findto is always free, but if you want to get powerful features, like:</p>

          <p>
            <strong>Profiles</strong> - the search interface becomes customizable for a professional
            profile (devs, designers, scientists, entrepreneurs, lawyers etc)
          </p>

          <p>
            <strong>Suggestions</strong> - UNLIMITED on all categories of search
          </p>

          <p>
            <strong>Trends</strong> - UNLIMITED on all categories of search
          </p>

          <p>
            Consider buy a Findto Pro license - and you are also supporting the open and
            decentralized web!
          </p>
        </div>
      </section>
    </LayoutPage>
  )
}
