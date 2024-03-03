import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsLink from '../components/website/CardsLink'

export default function PageCommunity() {
  const description =
    'Help make Findto decentralized search accessible to all and sustainable for the planet.'

  return (
    <LayoutPage title="Community" description={description}>
      <section className="colors">
        <div className={Style.container}>
          <h1>Join our Community</h1>
          <p>{description}</p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <h2>Support us</h2>
          <CardsLink />

          <article>
            <h3>Findto is made by people like you</h3>

            <p>
              Welcome to our community! Findto is an open source project for decentralized Web & AI
              search.
            </p>

            <p>
              The Findto mission is deliver a democratic and high-performance search experience that
              put people on control of the algorithms and positively impacts internet services and
              the planet.
            </p>

            <p>
              Findto is committed to the United Nations 2030 Agenda for sustainable development. We
              are very interested in researching and partnerships to strengthen technologies of open
              access, online privacy, web accessibility and diversity, responsible AI, and carbon
              neutrality.
            </p>

            <p>
              If you share the vision thats a better internet contribute to a better planet, feel
              free to help us build Findto.
            </p>

            <br></br>
            <br></br>

            <h3>Code of Conduct</h3>
            <p>
              Hey guys! All members of Findto community agree to be kind to each other, following
              our{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                Code of Conduct
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
