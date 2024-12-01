import React, { useState, useEffect } from 'react'
import styles from './Select.module.css'

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
  icon?: JSX.Element
}

const Select: React.FC<CustomSelectProps> = ({
  options,
  label,
  id,
  value,
  onChange,
  icon,
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
      {icon}
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        className={styles.select}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
