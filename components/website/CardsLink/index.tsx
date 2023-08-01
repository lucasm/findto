import Styles from './CardsLink.module.css'

import { svgTwitter, svgDiscord, svgGithub, svgPatreon, svgKofi } from '../../website/SvgSocial'

interface ICardsLink {
  title: string
  url: string
  icon: JSX.Element
  active: boolean
}

export default function CardsLink() {
  const cards: ICardsLink[] = [
    {
      title: 'Follow on X (Twitter) for updates ',
      url: 'https://x.com/findtoapp',
      icon: svgTwitter,
      active: true,
    },
    {
      title: 'Join on Discord community',
      url: 'https://discord.gg/gEDm5MU6pq',
      icon: svgDiscord,
      active: true,
    },
    {
      title: 'Star and contribute on GitHub',
      url: 'https://github.com/lucasm/findto',
      icon: svgGithub,
      active: true,
    },
    {
      title: 'Support on Patreon and get benefits',
      url: 'https://patreon.com/findto',
      icon: svgPatreon,
      active: true,
    },
    {
      title: 'Send a one-time donation via Ko-Fi',
      url: 'https://ko-fi.com/findto',
      icon: svgKofi,
      active: true,
    },
    {
      title: 'Follow on Instagram for inspirations',
      url: 'https://instagram.com/findtoapp',
      icon: svgPatreon,
      active: false,
    },
  ]

  return (
    <div className={Styles.cards}>
      {cards
        ?.filter((project) => project.active)
        .map((item, index) => (
          <a key={index} href={item.url} target="_blank" className="colors">
            <div className="card">
              <figure>{item.icon}</figure>
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
    </div>
  )
}
