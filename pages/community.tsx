import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsLink from '../components/website/CardsLink'

export default function PageCommunity() {
  const description = 'Help make the Web searches open and accessible for everyone!'

  return (
    <LayoutPage title="Community" description={description}>
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h1>Join the community</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <CardsLink />

          <br />
          <br />
          <br />
          <br />
          <br />

          <article>
            <h3>Code of Conduct</h3>

            <p>
              We expect that all Findto community members be kind and agree to the{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                Code of Conduct
              </a>{' '}
              for the common good =)
            </p>

            <br />

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
    </LayoutPage>
  )
}
