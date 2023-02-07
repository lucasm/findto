import Style from '../styles/Website.module.css'
import PageLayout from '../components/website/PageLayout'

export default function Contribute() {
  return (
    <PageLayout title="Contribute">
      <section className={Style.colors}>
        <div className={Style.container}>
          <div className={Style.pageTitle}>
            <h1>Contribute</h1>
            <p>Help us make decentralized Web searches better.</p>
          </div>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.article}>
            <h2>Follow</h2>

            <ul>
              <li>
                Follow on{' '}
                <a href="https://twitter.com/findtoapp" target="_blank" rel="noreferrer">
                  Twitter
                </a>{' '}
                {/* and{' '}
                <a href="https://instagram.com/findtoapp" target="_blank" rel="noreferrer">
                  Instagram
                </a> */}
              </li>
              <li>
                Join our Community on{' '}
                <a href="https://discord.gg/XbZcvNuQ6F" target="_blank" rel="noreferrer">
                  Discord
                </a>{' '}
                channel
              </li>
            </ul>

            <hr />

            <h2>Sponsor</h2>

            <p>
              Findto is open source and all work is volunteered. When you make a donation, you are helping maintain active development and
              pay app costs. Thanks for considering supporting!
            </p>
            <ul>
              <li>
                Become a sponsor on{' '}
                <a href="https://github.com/sponsors/lucasm" target="_blank" rel="noreferrer">
                  GitHub Sponsors
                </a>
              </li>
            </ul>

            <hr />

            <h2>Code</h2>

            <p>
              To contribute with code, please, visit{' '}
              <a href="https://github.com/lucasm/findto/projects" target="_blank" rel="noreferrer">
                projects boards
              </a>{' '}
              to stay updated with Findto development roadmap.
            </p>

            <ul>
              <li>
                Bug fixes: check{' '}
                <a href="https://github.com/lucasm/findto/issues" target="_blank" rel="noreferrer">
                  opened issues
                </a>{' '}
                before send pull requests
              </li>
              <li>
                Feature requests: start a topic on{' '}
                <a href="https://github.com/lucasm/findto/discussions" target="_blank" rel="noreferrer">
                  discussions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
