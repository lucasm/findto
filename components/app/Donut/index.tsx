import Styles from './Donut.module.css'

interface IDonutProps {
  percent: string
  percentRest: string
  showPercent: boolean
}

export default function Donut(props: IDonutProps) {
  return (
    <div className={Styles.donut}>
      <svg width="100%" height="100%" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          strokeDasharray={props.percent + ' ' + props.percentRest}
          strokeDashoffset="25"
          rx="250"></circle>
        <g>
          <text y="50%" x="50%" transform="translate(0, 2)">
            <tspan textAnchor="middle" className={Styles.donutPercent}>
              {props.showPercent ? props.percent : '?'}
              {props.showPercent && <tspan className={Styles.donutPercentSymbol}>%</tspan>}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}
