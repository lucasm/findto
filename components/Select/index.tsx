import React, { useState, useEffect } from 'react'
import styles from './Select.module.css'
import { IconChevronDown } from '../SvgIcons'

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  label: string
  id: string
  value?: string
  onChange: (value: string) => void
}

const Select: React.FC<CustomSelectProps> = ({
  options,
  label,
  id,
  value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || '')

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [value])

  const handleSelect = (value: string) => {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <div className={styles.customSelect}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        className={styles.select}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}>
        {/* <option value="" disabled>
          Select an option
        </option> */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <IconChevronDown />
    </div>
  )
}

export default Select
