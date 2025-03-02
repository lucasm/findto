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
    title: 'Protection',
    description:
      'Estimated carbon footprint, privacy and liberty of expression level of every search source.',
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
    description: 'Findto is open for contributions.',
  },
  {
    icon: <IconCarbon />,
    title: 'Carbon Neutral',
    description: 'Finito is carbon neutral software.',
  },
]

export default function CardsFeat() {
  return (
    <div className={Style.container}>
      <h2>Findto features</h2>

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
