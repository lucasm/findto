import { ReactElement } from 'react'
import SvgLogo from '../SvgLogo'
import style from './SearchLogo.module.css'
import BlurBackground from '../BlurBackground'

interface Props {
  externalIcon?: ReactElement
}

export default function SearchLogo({ externalIcon }: Readonly<Props>) {
  return (
    <figure className={style.icon}>
      {externalIcon ?? <SvgLogo />}
      <BlurBackground />
      {/* <div
        className="fixed -z-10 w-[820px] h-[10rem] rounded-full blur-2xl opacity-90 animate-pulse-slow
         bg-[linear-gradient(90deg,var(--color-red)_14%,var(--color-orange)_28%,var(--color-yellow)_42%,var(--color-green)_56%,var(--color-blue)_70%,var(--color-purple)_84%,var(--color-pink)_98%)]"></div> */}
    </figure>
  )
}
