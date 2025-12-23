'use client'

import confetti from 'canvas-confetti'
import { useState } from 'react'

import styles from './BannerAnimatePressMe.module.css'

export default function BannerAnimatePressMe() {
  const [pressed, setPressed] = useState(false)

  // Função que dispara confetes e muda o estado
  const handleClick = () => {
    confetti({
      colors: ['#91d3ff'],
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
    setPressed(true)
  }

  return (
    <div className={styles.container}>
      {!pressed ? (
        <button onClick={handleClick} className={styles.button3D}>
          Contribute
        </button>
      ) : (
        <div className={styles.linksContainer}>
          <a
            href="https://github.com/lucasm/findto"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          <span> | </span>
          <a
            href="https://patreon.com/findto"
            target="_blank"
            rel="noopener noreferrer">
            Patreon
          </a>
        </div>
      )}
    </div>
  )
}
