import Style from './CardsFeat.module.css'

import {
  IconAccessibility,
  IconLanguage,
  IconCarbon,
  IconMic,
  IconOpenSource,
  IconSearch,
  IconShield,
  IconStories,
  IconText,
  IconTrending,
  IconFileSearch,
} from '../SvgIcons'

// Define the type for a feature item
interface Feature {
  icon: JSX.Element
  title: string
  description: string
}

// Create an array of feature items with their types
const features: Feature[] = [
  {
    icon: <IconSearch />,
    title: 'Decentralized Search',
    description: 'Search the same term on diverse sources.',
  },
  {
    icon: <IconShield />,
    title: 'Protection',
    description:
      'Check estimated security, privacy and carbon footprint level of every search source.',
  },
  {
    icon: <IconTrending />,
    title: 'Trends',
    description: 'Real-time trends nearby you.',
  },
  {
    icon: <IconStories />,
    title: 'Stories',
    description: 'Discover newest stories.',
  },
  {
    icon: <IconText />,
    title: 'Autocomplete',
    description: 'Automatic suggestions of terms as you type.',
  },
  {
    icon: <IconMic />,
    title: 'Voice Search',
    description: 'Search anywhere using your voice.',
  },
  {
    icon: <IconFileSearch />,
    title: 'File Search',
    description: 'Search with a file on supported sources.',
  },
  {
    icon: <IconLanguage />,
    title: 'Internationalization',
    description: 'Choose local search sources, or international.',
  },
  {
    icon: <IconAccessibility />,
    title: 'Accessibility',
    description:
      'Contrast, dark theme, screen reader, and keyboard navigation support.',
  },
  {
    icon: <IconOpenSource />,
    title: 'Open Source',
    description: 'An open source software.',
  },
  {
    icon: <IconCarbon />,
    title: 'Carbon Neutral',
    description: 'A carbon neutral software.',
  },
]

export default function CardsFeat() {
  return (
    <div className={Style.container}>
      <h2>Findto top features</h2>

      <ul className={Style.card}>
        {features.map((feature, index) => (
          <li key={index}>
            <figure>{feature.icon}</figure>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
