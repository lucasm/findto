'use client'

import React, { useEffect, useRef, useState } from 'react'
import Styles from './WidgetDropdown.module.css'
import { useTranslations } from 'next-intl'
import { ICredits } from '../WidgetTemplate'

type WidgetDropdownProps = {
  title: string | undefined
  ariaLabel?: string
  icon?: React.ReactNode
  children: React.ReactNode
  credits?: ICredits
  isWidgetOpen?: (isOpen: boolean) => void
  className?: string
  position?: 'right' | 'left'
}

export default function WidgetDropdown({
  title,
  ariaLabel,
  icon,
  credits,
  children,
  isWidgetOpen = () => {}, // setting a default value
  className = '',
  position = 'right',
  ...props
}: WidgetDropdownProps) {
  const t = useTranslations('t')

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const showCredits = credits?.title && credits?.url ? true : false

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

          {showCredits && (
            <p className={Styles.credits}>
              {t('powered') ?? 'Powered by'}{' '}
              <a
                href={credits?.url + '/?utm_source=findto_app'}
                target="_blank"
                rel="noopener">
                {credits?.title ?? ''}
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  )
}
