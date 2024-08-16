import Style from './CardsFeat.module.css'
import {
  IconAccessibility,
  IconCheckOk,
  IconLanguage,
  IconLeaf,
  IconMic,
  IconSearch,
  IconShield,
  IconText,
  IconTrending,
  IconVisualSearch,
} from '../SvgIcons'

export default function CardsFeat() {
  return (
    <div className={Style.card}>
      <div>
        <figure>
          <IconSearch />
        </figure>
        <h3>Decentralized search</h3>
        <p>Quickly search the same term on diverse AI and Web sources.</p>
      </div>

      <div>
        <figure>
          <IconTrending />
        </figure>
        <h3>Realtime trends</h3>
        <p>
          Explore trending topics, contents, places, events, and more nearby
          you.
        </p>

        {/* <p>
          Become <Link href={'/pro'}>Pro</Link> for unlimited access
        </p> */}
      </div>

      <div>
        <figure>
          <IconText />
        </figure>
        <h3>Autosuggest</h3>
        <p>
          Automatic suggestions of terms as you type, to make fast searches.
        </p>
      </div>

      <div>
        <figure>
          <IconShield />
        </figure>
        <h3>Privacy level</h3>
        <p>Estimated privacy level of search source.</p>

        <p>* In development</p>
      </div>

      <div>
        <figure>
          <IconLeaf />
        </figure>
        <h3>Carbon level</h3>
        <p>Estimated carbon footprint level of search source.</p>

        <p>* In development</p>
      </div>

      <div>
        <figure>
          <IconMic />
        </figure>
        <h3>Voice search</h3>
        <p>Use your voice to search anywhere.</p>
      </div>

      <div>
        <figure>
          <IconAccessibility />
        </figure>
        <h3>Accessibility</h3>
        <p>
          Balanced contrast, dark theme, keyboard navigation and screen readers
          support.
        </p>
      </div>

      <div>
        <figure>
          <IconLanguage />
        </figure>
        <h3>Internationalization</h3>
        <p>
          Chose your country for local sources, or use international search.
        </p>
      </div>

      <div>
        <figure>
          <IconVisualSearch />
        </figure>
        <h3>Visual search</h3>
        <p>Use a image or camera to search on the supported sources.</p>

        <p>* In development</p>
      </div>

      {/* <div>
        <figure>
          <IconCheckOk />
        </figure>
        <h3>Social action</h3>
        <p>Instead ads, see a social cause to act</p>

        <p>* In development</p>
      </div> */}
    </div>
  )
}
