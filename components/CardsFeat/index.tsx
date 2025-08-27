import { JSX } from 'react'

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
    description: 'Search the same term on multiple sources.',
  },
  {
    icon: <IconShield />,
    title: 'Protection',
    description:
      'Check privacy, security and carbon footprint level of search source.',
  },
  {
    icon: <IconTrending />,
    title: 'Trends',
    description: 'See real-time trends nearby you.',
  },
  {
    icon: <IconStories />,
    title: 'Stories',
    description: 'Discover newest and breaking stories.',
  },
  {
    icon: <IconText />,
    title: 'Autocomplete',
    description: 'Get automatic suggestions of terms as you type.',
  },
  {
    icon: <IconMic />,
    title: 'Voice Search',
    description: 'Use your voice to search anywhere.',
  },
  {
    icon: <IconFileSearch />,
    title: 'Reverse Search *',
    description:
      'Upload files and photos to reverse search on supported sources.',
  },
  {
    icon: <IconLanguage />,
    title: 'Languages',
    description: 'Access local or international versions.',
  },
  {
    icon: <IconAccessibility />,
    title: 'Accessibility',
    description:
      'Dark theme, balanced contrast, screen reader support, and keyboard navigation.',
  },
  {
    icon: <IconOpenSource />,
    title: 'Open Source',
    description: 'Source code open for revisions and contributions.',
  },
  {
    icon: <IconCarbon />,
    title: 'Carbon Neutral',
    description: 'Carbon neutral software.',
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

      <p>* Some features in development.</p>
    </div>
  )
}
