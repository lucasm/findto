import React, { useState } from 'react'
import styles from './Tooltip.module.css'

interface TooltipProps {
  text: string
  children: React.ReactNode
  disable?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, disable }) => {
  const [isVisible, setIsVisible] = useState(false)

  const showTooltip = () => {
    setIsVisible(true)
  }

  const hideTooltip = () => {
    setIsVisible(false)
  }

  return (
    <div className={styles.tooltipContainer} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {!disable && isVisible && <div className={styles.tooltip}>{text}</div>}
    </div>
  )
}

export default Tooltip
