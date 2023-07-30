import Style from './CardsFeat.module.css'
import * as Icon from 'react-feather'

export default function CardsFeat() {
  return (
    <div className={Style.card}>
      <div>
        <figure>
          <Icon.Search />
        </figure>
        <h3>Decentralized Search</h3>
        <p>Search the same term on multiple categories and providers.</p>
      </div>

      <div>
        <figure>
          <Icon.AlignLeft />
        </figure>
        <h3>AI Suggestions</h3>
        <p>Get instant AI suggestions to help you as you type.</p>
      </div>

      <div>
        <figure>
          <Icon.Shield />
        </figure>
        <h3>Privacy Ranking</h3>
        <p>See the privacy level of each search provider.</p>
      </div>

      <div>
        <figure>
          <Icon.TrendingUp />
        </figure>
        <h3>Trends</h3>
        <p>Trending on topics, contents, events and places nearby you.</p>
      </div>

      <div>
        <figure>
          <Icon.User />
        </figure>
        <h3>Accessibility</h3>
        <p>
          Changeable layout and theme, color contrast enhanced, keyboard and screen reader
          navigation.
        </p>
      </div>

      <div>
        <figure>
          <Icon.Globe />
        </figure>
        <h3>Internationalization</h3>
        <p>Chose your country for local sources or use global search.</p>
      </div>

      <div>
        <figure>
          <Icon.Mic />
        </figure>
        <h3>Voice Search</h3>
        <p>Use your voice to search anywhere.</p>
      </div>

      <div>
        <figure>
          <Icon.Camera />
        </figure>
        <h3>Visual Search</h3>
        <p>** COMING SOON ** Use an image to search on supported sources.</p>
      </div>

      <div>
        <figure>
          <Icon.CheckCircle />
        </figure>
        <h3>Social Action</h3>
        <p>** COMING SOON ** Instead ads, see a social cause to act.</p>
      </div>
    </div>
  )
}
