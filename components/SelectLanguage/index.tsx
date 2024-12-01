'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Select from '@/components/Select'
import { IconLang } from '../SvgIcons'

interface Option {
  label: string
  value: string
}

const SelectLanguage = () => {
  const router = useRouter()
  const pathname = usePathname()

  const options: Option[] = [
    { label: 'International (English)', value: 'en' },
    { label: 'Brasil (Português)', value: 'pt-BR' },
    { label: '中国 (中文)', value: 'zh-CN' },
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
    <>
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
        icon={<IconLang />}
      />
    </>
  )
}

export default SelectLanguage
