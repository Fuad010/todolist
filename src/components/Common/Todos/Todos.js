import React from 'react'
import styles from './Todos.module.css'
import Table from '../Table/Table'
import Button from '../Button/Button'
import Input from '../Input/Input'

const Todos = () => {
  return (
    <div className={styles.wrapper}>
      <Table />
      <Table />
      <Table />
      <div className="flex gap-[100px] justify-center">
        <Input />
        <Input />
      </div>
      <div>
        <Input />
      </div>
      <div className="flex gap-[100px] justify-center">
        <Button />
        <Button />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}

export default Todos
