import { useTranslations } from 'next-intl'
import { JSX } from 'react'

import {
  IconFeedback,
  IconX,
  IconGitHub,
  IconDiscord,
  IconInstagram,
  IconPatreon,
  IconHeart,
} from '../SvgIcons'
import Styles from './CardsLink.module.css'
import Button from '../Button'

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
      url: 'https://ko-fi.com/findto',
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
      title: 'Patreon',
      url: 'https://patreon.com/findto',
      icon: <IconPatreon />,
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
      title: 'Instagram',
      url: 'https://instagram.com/findtoapp',
      icon: <IconInstagram />,
      active: false,
    },
  ]

  return (
    <div className={Styles.cards}>
      {cards
        ?.filter((project) => project.active)
        .map((item) => (
          <Button
            size="small"
            key={item.title}
            url={item.url}
            color="white"
            external={item.internal ? !item.internal : undefined}>
            <>
              {item.icon}
              {item.title}
            </>
          </Button>
        ))}
    </div>
  )
}
