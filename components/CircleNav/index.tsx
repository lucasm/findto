'use client'

import { useState } from 'react'
import styles from './CircleNav.module.css'

export default function CircleNav() {
  // Array com os dados de cada bola (ícone e título)
  const navItems = [
    { iconUrl: '/images/logos/google.svg', title: 'Google' },
    { iconUrl: '/images/logos/chatgpt.svg', title: 'ChatGPT' },
    { iconUrl: '/images/logos/copilot.svg', title: 'Copilot' },
    { iconUrl: '/images/logos/claude.svg', title: 'Claude' },
    { iconUrl: '/images/logos/deepseek.svg', title: 'DeepSeek' },
    { iconUrl: '/images/logos/duckduckgo.svg', title: 'duckduckgo' },
  ]

  // Estado para controlar qual bola está selecionada
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className={styles.container}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`${styles.circle} ${
            selectedIndex === index ? styles.active : ''
          }`}
          onClick={() => setSelectedIndex(index)}>
          <img src={item.iconUrl} alt={item.title} className={styles.icon} />
          <span className={styles.title}>{item.title}</span>
        </button>
      ))}
    </div>
  )
}
