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
    { label: 'English (United States)', value: 'en-US' },
    { label: 'Português (Brasil)', value: 'pt-BR' },
    { label: '简体中文 (中国)', value: 'zh-CN' },
  ]

  const handleChange = (value: string) => {
    const selectedOption = options.find((option) => option.value === value)
    if (selectedOption) {
      if (pathname) {
        router.push(`/${selectedOption.value}/`)
      }
    }
  }

  return (
    <Select
      options={options}
      id="language"
      onChange={handleChange}
      value={pathname ? pathname.split('/')[1] : ''}
      label="Language"
      icon={<IconLang />}
    />
  )
}

export default SelectLanguage
