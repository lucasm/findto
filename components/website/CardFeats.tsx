import Style from '../../styles/Website.module.css'
import * as Icon from 'react-feather'

export default function CardFeats() {
  return (
    <div className={Style.cardFeats}>
      <div>
        <figure>
          <Icon.Search />
        </figure>
        <h3>Multiple sources</h3>
        <p>Find anything everywhere using the power of multiple search sources by category.</p>
      </div>

      <div>
        <figure>
          <Icon.TrendingUp />
        </figure>
        <h3>Trends</h3>
        <p>See what&apos;s trending on searches, contents and nearby you.</p>
      </div>

      <div>
        <figure>
          <Icon.Shield />
        </figure>
        <h3>Privacy rank</h3>
        <p>See the privacy level before search on the selected source.</p>
      </div>

      <div>
        <figure>
          <Icon.AlignLeft />
        </figure>
        <h3>Suggestions</h3>
        <p>Get suggestions of popular search terms as you type.</p>
      </div>

      <div>
        <figure>
          <Icon.Mic />
        </figure>
        <h3>Voice search</h3>
        <p>Use your voice to search.</p>
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
        <p>Dark/light theme, mutable layout and quickly access keys.</p>
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
