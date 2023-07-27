import { ReactNode } from 'react'
import Styles from './Popup.module.css'
import { X } from 'react-feather'

type Props = {
  title: string
  show: boolean
  onClose: () => void
  children: ReactNode
}

const Popup = (props: Props) => {
  return (
    <div
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        opacity: props.show ? '1' : '0',
      }}
      className={Styles.overlay}>
      <div className={Styles.popup}>
        <h2>{props.title}</h2>
        <button type="button" className={Styles.close} onClick={props.onClose}>
          <X />
          Close
        </button>
        <div className={Styles.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default Popup
