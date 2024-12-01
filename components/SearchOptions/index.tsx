import Select from '@/components/Select'
import { IconChevronDown } from '../SvgIcons'
import { useSearch } from '@/contexts/SearchContext'
import { useEffect, useState } from 'react'
import Style from './SearchOptions.module.css'

interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  id: string
  label: string
}

const SearchOptions = ({ options, id, label }: Readonly<Props>) => {
  const { setSearchUrl, inputValue, inputFocus } = useSearch()
  const [selectedOption, setSelectedOption] = useState<string>(options[0].value)

  const handleChange = (value: string) => {
    setSelectedOption(value)
    // set the searchUrl
    setSearchUrl(value + inputValue)
    inputFocus()
  }

  // if inputValue changes, update the searchUrl
  useEffect(() => {
    setSearchUrl(selectedOption + inputValue)
  }, [inputValue])

  // on teh first render, set the default value as the first option
  useEffect(() => {
    handleChange(options[0].value)
  }, [])

  return (
    <div className={Style.container}>
      <Select
        options={options}
        id={id}
        onChange={handleChange}
        value={options[0].value}
        label={label}
        icon={<IconChevronDown />}
      />
    </div>
  )
}

export default SearchOptions
