'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Select from '@/components/Select'

const LangSwitcher: React.FC = () => {
  interface Option {
    label: string
    value: string
  }

  const router = useRouter()
  const pathname = usePathname()

  const options: Option[] = [
    { label: 'International (English)', value: 'en' },
    { label: 'Brasil (Português)', value: 'pt-BR' },
  ]

  const handleChange = (value: string) => {
    const selectedOption = options.find((option) => option.value === value)
    if (selectedOption) {
      const currentPath = pathname ? pathname.split('/').slice(2).join('/') : ''
      if (pathname) {
        router.push(`/${selectedOption.value}/${currentPath}`)
      }
    }
  }

  return (
    <div>
      <div>
        {/* <select
          value={pathname ? pathname.split('/')[1] : ''}
          onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}

        <Select
          options={options}
          id="language"
          onChange={handleChange}
          value={pathname ? pathname.split('/')[1] : ''}
          label="Language"
        />
      </div>
    </div>
  )
}

export default LangSwitcher
