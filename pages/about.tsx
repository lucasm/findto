import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/PageLayout'
import CardFeats from '../components/website/CardFeats'
import Button from '../components/website/Button'
import Svg from '../components/website/Svg'

export default function PageAbout() {
  return (
    <PageLayout
      title="About"
      description="About Findto, a decentralized web search app with AI, privacy and diverse sources">
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Web search decentralized</h1>
          <p>
            Findto is a free and open source decentralized search app with AI, privacy and diverse
            sources, to encourage a more productive and healthier web.
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
                <h2>Search algorithms working for you</h2>
                <p>
                  Findto puts people in control of search algorithms — not the other way around.
                  Quickly find anything, with the power of multiple sources. Web searches are truly
                  free and more productive.
                </p>
              </article>
            </div>

            <div>
              <article>
                <h2>Better results with AI and privacy</h2>
                <p>
                  Findto shows AI suggestions before making a search and the privacy ranking of each
                  search provider. Choose better results.
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
                <h2>Welcome to the decentralized web</h2>
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

          <CardFeats />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>Next level web searches</h2>
            <p>A search experience built for people.</p>
            <Button url="/" color="colors">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
