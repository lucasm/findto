import React, { useState, useEffect, ReactNode, useRef } from 'react'
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
  const lastFocusableElementRef = useRef(null)

  useEffect(() => {
    setIsModalOpen(isOpen)

    // handle body scroll
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    // focus on modal
    modalRef.current && modalRef.current.focus()

    // Encontre todos os elementos clicáveis dentro do modal
    const clickableElements = modalRef.current.querySelectorAll(
      'button, a, input, [tabindex]:not([tabindex="-1"])'
    )

    // Se houver elementos clicáveis, defina o último elemento como ref
    if (clickableElements.length > 0) {
      lastFocusableElementRef.current = clickableElements[clickableElements.length - 1]
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

  const handleTabKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && isModalOpen) {
      // Se a tecla "Tab" for pressionada dentro do modal
      if (document.activeElement === lastFocusableElementRef.current) {
        // Redireciona o foco de volta ao modal
        modalRef.current.focus()
        e.preventDefault() // Evita a tabulação normal
      }
    }

    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <div
      className={`${styles['modal-overlay']} ${isModalOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}>
      <div
        className={`${styles.modal} ${isModalOpen ? styles.open : ''}`}
        ref={modalRef}
        tabIndex={isModalOpen ? 0 : -1}
        onKeyDown={handleTabKeyPress}>
        <button
          className={styles['modal-close']}
          onClick={handleClose}
          tabIndex={isModalOpen ? 0 : -1}>
          <IconClose />
          Fechar
        </button>
        <div className={`${styles['modal-content']} ${isModalOpen ? styles.open : ''}`}>
          {title && <h2 className={styles.modalTitle}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
