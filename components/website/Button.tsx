import Link from 'next/link'

const styleButton = {
  display: 'inline-block',
  margin: '.5rem 0 0',
  padding: '1rem 2rem',
  color: '#000',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '.75rem',
  lineHeight: '1',
  transition: 'all 0.25s ease-in-out',
}

type Props = {
  url?: string
  color?: string
  text: string
}

export default function Button(props: Props) {
  return (
    <Link href="{props.url}">
      <div style={styleButton} className={props.color}>
        {props.text}
      </div>
    </Link>
  )
}
