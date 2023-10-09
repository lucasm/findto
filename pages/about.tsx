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
          <h1>Decentralized Search Assistant</h1>
          <p>
            Findto is a free and open source assistant for decentralized search with diverse
            sources, AI and privacy for a more productive and healthier web.
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
                <h2>Algorithms and AI working for you</h2>
                <p>
                  Findto puts people in control of search — not the other way around. Quickly switch
                  between diverse sources to find anything. More accessible and productive web
                  searches.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>

              <article>
                <h2>Discover results with more privacy</h2>
                <p>
                  Get suggestions of search terms as you type and a privacy ranking of each source.
                  Discover more. Choose better.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Welcome to the decentralized search</h2>
                <p>
                  The centralized web — where our searches are monopolized — it's over. Findto
                  encourages a truly free web experience when the peoples choices and democracy
                  matter.
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
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>A powerful search experience</h2>
            <p>Decentralized web search. Built for people. For free.</p>
            <Button url="/" color="colors">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}
