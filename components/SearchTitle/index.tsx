import Style from './SearchTitle.module.css'

interface SearchTitleProps {
  children: React.ReactNode
}

export default function SearchTitle({ children }: SearchTitleProps) {
  return <div className={Style.container}>{children}</div>
}
