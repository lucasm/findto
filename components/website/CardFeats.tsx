import Style from '../../styles/Website.module.css'
import * as Icon from 'react-feather'

export default function CardFeats() {
  return (
    <div className={Style.cardFeats}>
      <div>
        <figure>
          <Icon.Search />
        </figure>
        <h3>Decentralized search</h3>
        <p>Search the same term on multiple categories and providers.</p>
      </div>

      <div>
        <figure>
          <Icon.AlignLeft />
        </figure>
        <h3>AI suggestions</h3>
        <p>Get AI suggestions to help you as you type.</p>
      </div>

      <div>
        <figure>
          <Icon.Shield />
        </figure>
        <h3>Privacy ranking</h3>
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
          <Icon.ToggleRight />
        </figure>
        <h3>Accessibility</h3>
        <p>
          Switch layout and color theme, enhanced contrast, ready to voice and keyboard navigation.
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
        <h3>Voice search</h3>
        <p>Use your voice to search anywhere.</p>
      </div>

      <div>
        <figure>
          <Icon.Camera />
        </figure>
        <h3>Image search</h3>
        <p>** COMING SOON ** Use a image to search on supported sources.</p>
      </div>

      <div>
        <figure>
          <Icon.CheckCircle />
        </figure>
        <h3>Social action</h3>
        <p>** COMING SOON ** Instead ads, see a social cause to act.</p>
      </div>
    </div>
  )
}
