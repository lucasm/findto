import { ReactNode } from 'react'
import { useSearch } from '../../../contexts/SearchContext'
import Styles from './Widget.module.css'

type Props = {
  title: string
  icon: ReactNode
  children: ReactNode
  creditTitle: string
  creditUrl: string
}

export default function WidgetContainer(props: Props) {
  const { data } = useSearch()

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h2>
          {props.icon} {props.title}
        </h2>
      </div>

      {props.children}

      <div className={Styles.credits}>
        <p>
          {data?.t?.powered ?? 'Powered by'}

          <a href={props.creditUrl} target="_blank" rel="noopener">
            {props.creditTitle}
          </a>
        </p>
      </div>
    </div>
  )
}
