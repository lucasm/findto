import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsFeat from '../components/website/CardsFeat'
import Button from '../components/website/Button'
import Svg from '../components/website/Svg'
import { useSearch } from '../contexts/SearchContext'

export default function PageAbout() {
  const { data } = useSearch()
  return (
    <LayoutPage
      title="About"
      description="Findto is a tool for decentralized Web & AI search. Get control over search algorithms, privacy and carbon.">
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Open Source AI Search</h1>
          <p>
            Findto is an assistant for decentralized web search. Get control over AI and search
            engines algorithms. Explore a healthy internet.
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
                <h2>Get control over AI and search algorithms</h2>
                <p>
                  Findto puts people on control of the algorithms. Quickly switch between diverse
                  sources and find anything. More productive and accessible searches.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>

              <article>
                <h2>More privacy, less carbon</h2>
                <p>
                  Findto show the privacy level and estimated carbon footprint of every search
                  provider. Make better choices for you and the planet.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Decentralized and open source search</h2>
                <p>
                  The centralized internet — where monopoly wins — is unsustainable. Findto
                  encourages a truly open search experience, where people choices and the planet
                  needs walks together.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="colors">
        <div className={Style.container}>
          <h3>Features</h3>

          <CardsFeat />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>A renewable search experience</h2>
            <p>Decentralized search. Build by people. Dedicated to the planet.</p>
            <Button url="/" color="colors">
              {data?.t?.open ?? 'Open the app'}
            </Button>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}
