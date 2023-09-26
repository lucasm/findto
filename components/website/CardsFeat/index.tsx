import Style from './CardsFeat.module.css'
import {
  IconAccessibility,
  IconCheckOk,
  IconLanguage,
  IconMic,
  IconSearch,
  IconShield,
  IconSparkle,
  IconTrending,
  IconVisualSearch,
} from '../../app/SvgIcons'
import Link from 'next/link'

export default function CardsFeat() {
  return (
    <div className={Style.card}>
      <div>
        <figure>
          <IconSearch />
        </figure>
        <h3>Decentralized web search</h3>
        <p>Search the same term on diverse categories and sources</p>
      </div>

      <div>
        <figure>
          <IconSparkle />
        </figure>
        <h3>Suggestions</h3>
        <p>Get suggestions of search terms to help as you type</p>

        {/* <p>
          Go <Link href={'/pro'}>Pro</Link> to get unlimited access
        </p> */}
      </div>

      <div>
        <figure>
          <IconShield />
        </figure>
        <h3>Privacy ranking</h3>
        <p>View the privacy level of each search source before do a search</p>
      </div>

      <div>
        <figure>
          <IconTrending />
        </figure>
        <h3>Trends</h3>
        <p>Trending topics, contents, events, services and places nearby you</p>

        {/* <p>
          Go <Link href={'/pro'}>Pro</Link> to get unlimited access
        </p> */}
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
          <IconMic />
        </figure>
        <h3>Voice search</h3>
        <p>Use your voice to search anywhere</p>
      </div>

      <div>
        <figure>
          <IconVisualSearch />
        </figure>
        <h3>Visual search</h3>
        <p>Use a image to search on the supported sources</p>

        <p>* In development</p>
      </div>

      <div>
        <figure>
          <IconCheckOk />
        </figure>
        <h3>Social action</h3>
        <p>Instead ads, see a social cause to act</p>

        <p>* In development</p>
      </div>
    </div>
  )
}
