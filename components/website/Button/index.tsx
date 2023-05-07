import Link from 'next/link'

const Styles = {
  display: 'inline-block',
  margin: '.5rem 0 0',
  padding: '1.2rem 2.8rem',
  color: '#000',
  fontSize: 'var(--font-size-big)',
  border: 'none',
  borderRadius: 'var(--radius)',
  lineHeight: '1',
  transition: 'all 0.25s ease-in-out',
}

type Props = {
  url?: string
  color?: string
  children: string
}

export default function Button(props: Props) {
  return (
    <Link href={props.url} style={Styles} className={props.color}>
      {props.children}
    </Link>
  )
}
