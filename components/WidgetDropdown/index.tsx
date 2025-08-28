'use client'

import React, { useEffect, useRef, useState } from 'react'

import Styles from './WidgetDropdown.module.css'

type WidgetDropdownProps = {
  title: string | undefined
  children: React.ReactNode
  ariaLabel?: string
  icon?: React.ReactNode
  isWidgetOpen?: (isOpen: boolean) => void
  forceClose?: boolean
  className?: string
  position?: 'right' | 'left'
}

export default function WidgetDropdown({
  title,
  ariaLabel,
  icon,
  children,
  isWidgetOpen = () => {}, // setting a default value
  forceClose,
  className = '',
  position = 'right',
  ...props
}: Readonly<WidgetDropdownProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    setIsOpen(!isOpen)
    isWidgetOpen(!isOpen)
  }
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  useEffect(() => {
    if (forceClose) setIsOpen(false)
  }, [forceClose])

  return (
    <div
      className={`${Styles.container} ${className}`}
      ref={containerRef}
      {...props}>
      <button
        onClick={handleClick}
        aria-expanded={isOpen}
        className={isOpen ? Styles.opened : ''}
        aria-label={ariaLabel ?? undefined}>
        <figure>
          {icon}
          {title && <span>{title}</span>}
        </figure>
      </button>

      {isOpen && (
        <div
          className={Styles.containerDropdown}
          style={{
            right: position === 'right' ? 0 : 'auto',
            left: position === 'left' ? '-4.75rem' : 'auto',
          }}>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
}
