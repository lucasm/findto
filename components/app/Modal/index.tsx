import React, { useState, useEffect, ReactNode, useRef, useCallback } from 'react'
import styles from './Modal.module.css'
import { IconClose } from '../SvgIcons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsModalOpen(isOpen)

    if (typeof window !== 'undefined') {
      isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    }
  }, [isOpen])

  const handleClose = () => {
    setIsModalOpen(false)
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose()
    }
  }

  return (
    <>
      <div
        className={`${styles['modal-overlay']} ${isModalOpen ? styles.open : ''}`}
        onClick={handleOverlayClick}>
        <div className={`${styles.modal} ${isModalOpen ? styles.open : ''}`} ref={modalRef}>
          <button className={styles['modal-close']} onClick={handleClose}>
            <IconClose />
            Fechar
          </button>
          <div className={`${styles['modal-content']} ${isModalOpen ? styles.open : ''}`}>
            {title && <h2 className={styles.modalTitle}>{title}</h2>}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
