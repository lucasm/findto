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

// Define the type for a feature item
interface Feature {
  icon: JSX.Element
  title: string
  description: string
  note?: string
}

// Create an array of feature items with their types
const features: Feature[] = [
  {
    icon: <IconSearch />,
    title: 'Decentralized search',
    description: 'Quickly search the same term on diverse AI and Web sources.',
  },
  {
    icon: <IconTrending />,
    title: 'Realtime trends',
    description:
      'Explore trending topics, contents, places, events, and more nearby you.',
  },
  {
    icon: <IconText />,
    title: 'Autosuggest',
    description:
      'Automatic suggestions of terms as you type, to make fast searches.',
  },
  {
    icon: <IconShield />,
    title: 'Privacy level',
    description: 'Estimated privacy level of search source.',
    note: '* In development',
  },
  {
    icon: <IconLeaf />,
    title: 'Carbon level',
    description: 'Estimated carbon footprint level of search source.',
    note: '* In development',
  },
  {
    icon: <IconMic />,
    title: 'Voice search',
    description: 'Use your voice to search anywhere.',
  },
  {
    icon: <IconAccessibility />,
    title: 'Accessibility',
    description:
      'Balanced contrast, dark theme, keyboard navigation and screen readers support.',
  },
  {
    icon: <IconLanguage />,
    title: 'Internationalization',
    description:
      'Choose your country for local sources, or opt for an international search.',
  },
  {
    icon: <IconVisualSearch />,
    title: 'Visual search',
    description:
      'Use an image or your camera to search across supported sources.',
    note: '* In development',
  },
]

export default function CardsFeat() {
  return (
    <div className={Style.card}>
      {features.map((feature, index) => (
        <div key={index}>
          <figure>{feature.icon}</figure>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          {feature.note && <p>{feature.note}</p>}
        </div>
      ))}
    </div>
  )
}
