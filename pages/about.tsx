import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/PageLayout'
import CardFeats from '../components/website/CardFeats'
import Button from '../components/website/Button'
import Svg from '../components/website/Svg'

export default function PageAbout() {
  return (
    <PageLayout title="About" description="About page">
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Decentralized web search with AI</h1>
          <p>
            Findto is a free and open source decentralized search app with AI to encourage web
            diversity, privacy and productivity.
          </p>
        </div>
      </section>

      <section className={Style.section}>
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
                  With the power of multiple sources, you can quickly find anything on the web.
                  Searches are truly free and more productive.
                </p>
              </article>
            </div>

            <div>
              <article>
                <h2>Better results with privacy and AI</h2>
                <p>
                  Findto empowers people to see the privacy ranking of each search provider and
                  receive AI suggestions before making a search. Get more accurate results.
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
                  The centralized web where a few big companies dominate our digital lives is dying.
                  Findto encourages people to discover and choose a more healthy, diverse and
                  democratic web.
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
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
