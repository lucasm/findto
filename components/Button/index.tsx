import Styles from './Button.module.css'
import Link from 'next/link'

type Props = {
  url?: string
  color?: string
  children: string
}

export default function Button(props: Props) {
  return (
    <Link href={props?.url || ''} className={Styles.button + ' ' + props.color}>
      {props.children}
    </Link>
  )
}
