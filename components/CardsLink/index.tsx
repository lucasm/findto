import Link from 'next/link'
import Styles from './CardsLink.module.css'
import {
  IconHeart,
  IconFeedback,
  IconX,
  IconGitHub,
  IconDiscord,
  IconInstagram,
} from '../SvgIcons'
import { useTranslations } from 'next-intl'

interface ICardsLink {
  title: string
  url: string
  icon: JSX.Element
  active: boolean
  internal?: boolean
}

export default function CardsLink() {
  const t = useTranslations('t')

  const cards: ICardsLink[] = [
    {
      title: t('donate'),
      url: 'https://patreon.com/findto',
      icon: <IconHeart />,
      active: true,
    },
    {
      title: t('feedback.title'),
      url: t('feedback.url'),
      icon: <IconFeedback />,
      active: true,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/lucasm/findto',
      icon: <IconGitHub />,
      active: true,
    },
    {
      title: 'X',
      url: 'https://x.com/findtoapp',
      icon: <IconX />,
      active: false,
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/gEDm5MU6pq',
      icon: <IconDiscord />,
      active: false,
    },
    {
      title: 'Get Pro version',
      url: '/pro',
      icon: <></>,
      active: false,
      internal: true,
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/findtoapp',
      icon: <IconInstagram />,
      active: false,
    },
    {
      title: 'Patreon',
      url: 'https://patreon.com/findto',
      icon: <></>,
      active: false,
    },
  ]

  return (
    <div className={Styles.cards}>
      {cards
        ?.filter((project) => project.active)
        .map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target={item.internal ? '_self' : '_blank'}>
            <figure>{item.icon}</figure>
            {item.title}
          </Link>
        ))}
    </div>
  )
}
