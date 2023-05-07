import Style from '../../styles/Website.module.css'
import * as Icon from 'react-feather'

export default function CardFeats() {
  return (
    <div className={Style.cardFeats}>
      <div>
        <figure>
          <Icon.Search />
        </figure>
        <h3>Multiple search</h3>
        <p>Use the same term to search on multiple providers and categories.</p>
      </div>

      <div>
        <figure>
          <Icon.TrendingUp />
        </figure>
        <h3>Trends</h3>
        <p>Trending on topics, searches, contents, events and places nearby you.</p>
      </div>

      <div>
        <figure>
          <Icon.Shield />
        </figure>
        <h3>Privacy ranking</h3>
        <p>See the privacy level of selected search provider.</p>
      </div>

      <div>
        <figure>
          <Icon.AlignLeft />
        </figure>
        <h3>AI suggestions</h3>
        <p>Get suggestions of search terms as you type.</p>
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

      <div>
        <figure>
          <Icon.ToggleRight />
        </figure>
        <h3>Accessibility</h3>
        <p>Change the color theme, layout, or use quickly access keys.</p>
      </div>

      <div>
        <figure>
          <Icon.Globe />
        </figure>
        <h3>Internationalized</h3>
        <p>Local or global search sources, you choice.</p>
      </div>
    </div>
  )
}
