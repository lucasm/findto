import Link from 'next/link'
import Styles from './CardsLink.module.css'
import { svgTwitter, svgDiscord, svgGithub, svgPatreon, svgKofi } from '../../website/SvgSocial'
import { IconFeedback, IconHeart, IconStar } from '../../app/SvgIcons'
import { useSearch } from '../../../contexts/SearchContext'

interface ICardsLink {
  title: string
  url: string
  icon: JSX.Element
  active: boolean
  internal?: boolean
}

export default function CardsLink() {
  const { data } = useSearch()

  const cards: ICardsLink[] = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/findtoapp',
      icon: svgTwitter,
      active: true,
    },
    {
      title: 'GitHub',
      url: 'https://github.com/lucasm/findto',
      icon: svgGithub,
      active: true,
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/gEDm5MU6pq',
      icon: svgDiscord,
      active: false,
    },
    {
      title: 'Get Pro version',
      url: '/pro',
      icon: <IconStar />,
      active: false,
      internal: true,
    },
    {
      title: data?.t?.donate ?? 'Make a donation',
      url: 'https://ko-fi.com/findto',
      icon: <IconHeart />,
      active: true,
    },
    {
      title: data?.t?.feedback ?? 'Send feedback',
      url: data?.t?.link_feedback ?? 'https://forms.gle/US69JvUT1qxYkiF58',
      icon: <IconFeedback />,
      active: true,
    },
    {
      title: 'Follow on Instagram',
      url: 'https://instagram.com/findtoapp',
      icon: svgPatreon,
      active: false,
    },
    {
      title: 'Support on Patreon',
      url: 'https://patreon.com/findto',
      icon: svgPatreon,
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
            target={item.internal ? '_self' : '_blank'}
            className="colors">
            <div>
              <figure>{item.icon}</figure>
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
    </div>
  )
}
