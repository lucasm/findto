import { JSX } from 'react'
import { IconInfo } from '../SvgIcons'
import Styles from './Alert.module.css'

type Props = {
  children: JSX.Element | string
}

export default function Alert(props: Readonly<Props>) {
  return (
    <div className={Styles.container}>
      <IconInfo />
      {props.children}
    </div>
  )
}
