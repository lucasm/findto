import { IconInfo } from '../SvgIcons'
import Styles from './Alert.module.css'

type Props = {
  children: string
}

export default function Alert(props: Props) {
  return (
    <div className={Styles.container}>
      <>
        <IconInfo />
        {props.children}
      </>
    </div>
  )
}
