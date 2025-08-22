import Link from 'next/link'

import Styles from './Button.module.css'

type Props = {
  url?: string
  color?: 'colors' | 'black' | 'white'
  size?: 'big' | 'small'
  external?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  url,
  external,
  color,
  size,
  children,
  onClick,
}: Readonly<Props>) {
  // Concatena classes manualmente
  const colorKey = color ?? 'white'
  const sizeKey = size ?? 'medium'
  const className = [Styles.button, Styles[colorKey], Styles[sizeKey]]
    .join(' ')
    .trim()

  if (url) {
    return (
      <Link
        href={url}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        className={className}>
        {children}
      </Link>
    )
  }

  if (!url && onClick) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    )
  }

  return null
}
