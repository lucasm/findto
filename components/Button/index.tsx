import Styles from './Button.module.css'
import Link from 'next/link'

type Props = {
  url: string
  color: 'colors' | 'black' | 'white'
  size?: 'big' | 'small'
  external?: boolean
  children: string | JSX.Element
}

export default function Button(props: Props) {
  const { url, color, size, external, children } = props

  // Concatena classes manualmente
  const className = `${Styles.button} ${Styles[color]} ${
    size ? Styles[size] : ''
  }`.trim()

  if (external) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  )
}
