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
} from '../../app/SvgIcons'

export default function CardsFeat() {
  return (
    <div className={Style.card}>
      <div>
        <figure>
          <IconSearch />
        </figure>
        <h3>Decentralized search</h3>
        <p>Search the same term on diverse categories and sources</p>
      </div>

      <div>
        <figure>
          <IconShield />
        </figure>
        <h3>Privacy level</h3>
        <p>View the privacy level of selected source</p>
      </div>

      <div>
        <figure>
          <IconLeaf />
        </figure>
        <h3>Carbon footprint</h3>
        <p>View the estimate carbon footprint of selected source</p>
      </div>

      <div>
        <figure>
          <IconTrending />
        </figure>
        <h3>Trends</h3>
        <p>Explore trending topics, contents, events, services and places nearby you</p>

        {/* <p>
          Become <Link href={'/pro'}>Pro</Link> for unlimited access
        </p> */}
      </div>

      <div>
        <figure>
          <IconText />
        </figure>
        <h3>Autocomplete</h3>
        <p>Get suggestions of search terms to help as you type</p>
      </div>

      <div>
        <figure>
          <IconMic />
        </figure>
        <h3>Voice search</h3>
        <p>Use your voice to search anywhere</p>
      </div>

      <div>
        <figure>
          <IconAccessibility />
        </figure>
        <h3>Accessibility</h3>
        <p>Change layout and theme color, use keyboard or screen reader navigation</p>
      </div>

      <div>
        <figure>
          <IconLanguage />
        </figure>
        <h3>Internationalization</h3>
        <p>Chose your country for local sources or use global search</p>
      </div>

      <div>
        <figure>
          <IconVisualSearch />
        </figure>
        <h3>Visual search</h3>
        <p>Use a image to search on the supported sources</p>

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
