import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsLink from '../components/website/CardsLink'

export default function PageCommunity() {
  const description = 'Help make web search decentralized, accessible and healthy for the planet.'

  return (
    <LayoutPage title="Community" description={description}>
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h1>Join the Findto community</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <CardsLink />

          <article>
            <h3>Our mission</h3>

            <p>
              Findto is a decentralized web search tool, free and open source. Our mission is to
              deliver a high-performance and democratic search experience that positively impacts
              people and the planet.
            </p>

            <p>
              Findto is committed to the United Nations 2030 Agenda for sustainable development. We
              also are interested in researching and partnerships to strengthen technologies of open
              access, privacy, diversity, web accessibility, responsible AI, and environmental
              justice.
            </p>

            <p>
              If you share the vision thats a better Web contribute to a better planet, feel free to
              help us build Findto.
            </p>

            <br></br>
            <br></br>

            <h3>Code of conduct</h3>
            <p>
              All members of our community agree to be kind to each other, following the{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                code of conduct
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
    </LayoutPage>
  )
}
