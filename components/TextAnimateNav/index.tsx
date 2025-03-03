'use client'

import { useState, useEffect } from 'react'
import styles from './TextAnimateNav.module.css'
import { IconCarbon } from '../SvgIcons'

const HomeIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.302 21.6147C11.5234 21.7439 11.6341 21.8085 11.7903 21.842C11.9116 21.868 12.0884 21.868 12.2097 21.842C12.3659 21.8085 12.4766 21.7439 12.698 21.6147C14.646 20.4783 20 16.9083 20 11.9999V7.21747C20 6.41796 20 6.0182 19.8692 5.67457C19.7537 5.37101 19.566 5.10015 19.3223 4.8854C19.0465 4.64231 18.6722 4.50195 17.9236 4.22122L12.5618 2.21054C12.3539 2.13258 12.25 2.0936 12.143 2.07815C12.0482 2.06444 11.9518 2.06444 11.857 2.07815C11.75 2.0936 11.6461 2.13258 11.4382 2.21054L6.0764 4.22122C5.3278 4.50195 4.9535 4.64231 4.67766 4.8854C4.43398 5.10015 4.24627 5.37101 4.13076 5.67457C4 6.0182 4 6.41796 4 7.21747V11.9999C4 16.9083 9.35396 20.4783 11.302 21.6147Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const CodeIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const GhostIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 21L4 4M4 13H11.4C11.9601 13 12.2401 13 12.454 12.891C12.6422 12.7951 12.7951 12.6422 12.891 12.454C13 12.2401 13 11.9601 13 11.4V4.6C13 4.03995 13 3.75992 12.891 3.54601C12.7951 3.35785 12.6422 3.20487 12.454 3.10899C12.2401 3 11.9601 3 11.4 3H5.6C5.03995 3 4.75992 3 4.54601 3.10899C4.35785 3.20487 4.20487 3.35785 4.10899 3.54601C4 3.75992 4 4.03995 4 4.6V13ZM13 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V13.4C21 13.9601 21 14.2401 20.891 14.454C20.7951 14.6422 20.6422 14.7951 20.454 14.891C20.2401 15 19.9601 15 19.4 15H14.6C14.0399 15 13.7599 15 13.546 14.891C13.3578 14.7951 13.2049 14.6422 13.109 14.454C13 14.2401 13 13.9601 13 13.4V5Z"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function TextAnimateNav() {
  // Array de itens com "icon" (JSX) e "title" (string)
  const navItems = [
    { icon: <HomeIcon />, title: 'Security' },
    { icon: <CodeIcon />, title: 'Privacy' },
    { icon: <IconCarbon />, title: 'Carbon footprint' },
    { icon: <GhostIcon />, title: 'Liberty of expression' },
  ]

  // Estado para controlar qual item está sendo exibido
  const [currentIndex, setCurrentIndex] = useState(0)

  // A cada X tempo, muda para o próximo item
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % navItems.length)
    }, 3000) // Troca a cada 3 segundos (ajuste como quiser)

    return () => clearInterval(interval)
  }, [navItems.length])

  return (
    <div className={styles.container}>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${
            index === currentIndex ? styles.active : ''
          }`}>
          <div className={styles.icon}>{item.icon}</div>
          <span className={styles.title}>{item.title}</span>
        </div>
      ))}
    </div>
  )
}
