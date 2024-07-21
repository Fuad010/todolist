import React from 'react'
import styles from './Todos.module.css'
import Table from '../Table/Table'

const Todos = () => {
  return (
    <div className={styles.wrapper}>
      <Table />
      <Table />
      <Table />
    </div>
  )
}

export default Todos
