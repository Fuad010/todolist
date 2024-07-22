import React from 'react'
import styles from './Button.module.css'
import { useDispatch } from 'react-redux'

const Button = ({ clickState, disabled, title }) => {
  const dispatch = useDispatch()
  return (
    <button
      onClick={() => dispatch(clickState(false))}
      disabled={disabled}
      className={`${styles.button} ${
        disabled && '!cursor-default !bg-[#8b8787] !text-white'
      } `}
    >
      {title}
    </button>
  )
}

export default Button
