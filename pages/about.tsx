import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsFeat from '../components/website/CardsFeat'
import Button from '../components/website/Button'
import Svg from '../components/website/Svg'

export default function PageAbout() {
  return (
    <LayoutPage
      title="About"
      description="About Findto, a decentralized web search app with AI, privacy and diverse sources">
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Opening the Web search</h1>
          <p>
            Findto is a decentralized search app with AI, privacy and diverse sources, to encourage
            a more productive and healthier Web.
          </p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <div>
              <figure>
                <Svg type="people" color="colorsSvg" />
              </figure>

              <article>
                <h2>Search algorithms and AI working for you</h2>
                <p>
                  Findto puts people in control of web search — not the other way around. Quickly
                  switch between diverse sources to find anything. More productive and accessible
                  searches.
                </p>
              </article>
            </div>

            <div>
              <article>
                <h2>Better results and privacy</h2>
                <p>
                  AI suggestions when you type to search. Privacy ranking of provider before search.
                  Choose better results.
                </p>
              </article>

              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Welcome to the decentralized Web</h2>
                <p>
                  The centralized web, where our searches are monopolized, is over. Findto
                  encourages people to discover a more diverse, healthier and democratic web.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="colors">
        <div className={Style.container}>
          <h2>Features</h2>

          <CardsFeat />

          {/* <h2>For free and open source</h2> */}
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>Next level Web searches</h2>
            <p>A new search experience, built for people.</p>
            <Button url="/" color="colors">
              Start now
            </Button>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}
