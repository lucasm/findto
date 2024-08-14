import Styles from './WidgetContainer.module.css'

const WidgetContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={Styles.container}>{children}</div>
}

export default WidgetContainer
