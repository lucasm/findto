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
          <h1>Decentralized web search</h1>
          <p>
            Findto is an open source decentralized search app to make Web more diverse, private,
            productive and free.
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
                  Findto puts people in control of the search algorithms — not the other way around.
                  You can quickly find anything everywhere using the power of multiple sources. Web
                  searches truly free and more productive.
                </p>
              </article>
            </div>

            <div>
              <article>
                <h2>More results with privacy</h2>
                <p>
                  Findto empower people to discover more diverse search results while achieving
                  privacy. You can see the privacy level before search on each source.
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
                  Findto encourages people to discover and choose a more democratic and healthy web.
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
          <h2>Start using Findto</h2>
          <p>A new era on web search experience. Built for people.</p>
          <Button url="/" text="Try the app" color={Style.colors}></Button>
        </div>
      </section>
    </PageLayout>
  )
}
