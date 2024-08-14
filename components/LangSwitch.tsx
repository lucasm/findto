'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }

  const router = useRouter()
  const pathname = usePathname()

  const options: Option[] = [
    { country: 'International (English)', code: 'en' },
    { country: 'Brasil (Português)', code: 'pt-BR' },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find(
      (option) => option.code === event.target.value
    )
    if (selectedOption) {
      const currentPath = pathname ? pathname.split('/').slice(2).join('/') : ''
      if (pathname) {
        router.push(`/${selectedOption.code}/${currentPath}`)
      }
    }
  }

  return (
    <div>
      <div>
        <select
          value={pathname ? pathname.split('/')[1] : ''}
          onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.code}>
              {option.country}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default LangSwitcher
