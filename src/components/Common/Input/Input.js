import React from 'react'
import styles from './Input.module.css'

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
