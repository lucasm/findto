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
  IconVisualSearch,
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
    description: 'Search on diverse sources at once.',
  },
  {
    icon: <IconShield />,
    title: 'Privacy',
    description:
      'Private searches and estimated privacy level of search source.',
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
    icon: <IconVisualSearch />,
    title: 'Visual Search',
    description: 'Search with an image on supported sources.',
  },
  {
    icon: <IconCarbon />,
    title: 'Carbon',
    description: 'Estimated carbon footprint of search source.',
  },
  {
    icon: <IconLanguage />,
    title: 'Internationalization',
    description: 'Choose your country sources, or international.',
  },
  {
    icon: <IconAccessibility />,
    title: 'Accessibility',
    description:
      'Dark theme, contrast, screen reader, and keyboard navigation support.',
  },
  {
    icon: <IconOpenSource />,
    title: 'Open Source',
    description: 'Inspect and contribute to the source code.',
  },
]

export default function CardsFeat() {
  return (
    <div className={Style.container}>
      <h2>Features</h2>

      <ul className={Style.card}>
        {features.map((feature, index) => (
          <li key={index}>
            <figure>{feature.icon}</figure>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
      <p>* Some features still in development.</p>
    </div>
  )
}
