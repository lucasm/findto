'use client'

import Image from 'next/image'
import { useState } from 'react'

import { normalizeId } from '@/utils/formats'

type Props = {
  name: string | undefined
  size?: number
}

const SearchSourceIcon = ({ name, size = 24 }: Props) => {
  const [hasError, setHasError] = useState(false)

  const normalized = name ? normalizeId(name) : ''
  const src = `/images/logos/${normalized}.svg`

  // Fallback final: renderizar SVG com primeira letra
  if (hasError) {
    const letter = name?.charAt(0).toUpperCase() ?? '?'

    return (
      <svg
        width={18}
        height={18}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'inline-block',
          borderRadius: '50%',
          backgroundColor: '#fff',
        }}>
        <rect width="100" height="100" rx="50" fill="#fff" />
        <text
          x="50%"
          y="58%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#000"
          fontSize="4rem"
          fontFamily="inherit"
          fontWeight="bold">
          {letter}
        </text>
      </svg>
    )
  }

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      onError={() => {
        console.warn('❌ Error image:', src)
        setHasError(true)
      }}
    />
  )
}

export default SearchSourceIcon
