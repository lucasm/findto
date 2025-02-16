import Styles from './Button.module.css'
import Link from 'next/link'

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
}: Props) {
  // Concatena classes manualmente
  const className = `${Styles.button} ${Styles[color || '']} ${
    size ? Styles[size] : ''
  }`.trim()

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
