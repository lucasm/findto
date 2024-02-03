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
          <h1>Findto: web searches with positive impact</h1>
          <p>
            Findto is a decentralized search tool. Get control over search algorithms, AI, privacy
            and carbon. Explore a healthier web.
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
                <h2>Get control of search algorithms and AI</h2>
                <p>
                  Findto puts people in control of search — not the other way around. Quickly switch
                  between diverse sources to find anything. More accessible and productive searches.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>

              <article>
                <h2>Discover with more privacy and less carbon</h2>
                <p>
                  View the privacy level and the estimate carbon footprint of each search source.
                  Choose better. Discover more.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Welcome to a decentralized Web</h2>
                <p>
                  The centralized web — where our searches are monopolized — it's not sustainable.
                  Findto encourages a truly free web search experience, where the democratic people
                  choices and the planet needs are together.
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
            <h2>Positive impact search</h2>
            <p>Decentralized search. Built for people. Friendly for planet.</p>
            <Button url="/" color="colors">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}
