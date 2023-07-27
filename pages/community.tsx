import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/PageLayout'

export default function PageCommunity() {
  const description =
    'Join on Findto Community to make Web searches open and accessible for everyone!'

  return (
    <PageLayout title="Community" description={description}>
      <section className="colors">
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h1>Findto Community</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <article>
            <h3>Code of Conduct</h3>

            <p>
              Before contributing, read our{' '}
              <a
                href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
                target="_blank"
                rel="noreferrer">
                Code of Conduct
              </a>
              . We expect that all members agree and adhere to this guidelines for the common good
              of Findto Community interactions.
            </p>

            <h2>Social</h2>

            <ul>
              <li>
                <p>
                  Follow on{' '}
                  <a href="https://twitter.com/findtoapp" target="_blank" rel="noreferrer">
                    Twitter
                  </a>{' '}
                </p>
              </li>
              <li>
                <p>
                  Join on{' '}
                  <a href="https://discord.gg/XbZcvNuQ6F" target="_blank" rel="noreferrer">
                    Discord
                  </a>
                </p>
              </li>
            </ul>

            <h2>Sponsor</h2>

            <p>If you like or use Findto, please, consider supporting.</p>

            <p>
              {' '}
              <a href="https://github.com/sponsors/lucasm" target="_blank" rel="noreferrer">
                Become a Sponsor
              </a>{' '}
              and enjoy exclusive benefits!
            </p>

            <p>
              As a free and open source project all work is volunteered. Becoming a sponsor you help
              pay costs and support active development.
            </p>

            <h2>Code</h2>

            <p>
              For code contributions, visit{' '}
              <a href="https://github.com/lucasm/findto/projects" target="_blank" rel="noreferrer">
                Projects
              </a>{' '}
              to stay updated with Findto development roadmap. Please, check opened{' '}
              <a href="https://github.com/lucasm/findto/issues" target="_blank" rel="noreferrer">
                Issues
              </a>{' '}
              before send a pull requests for bug fixes or new features.
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  )
}
