'use client'
import React from 'react'
import styles from './Todos.module.css'
import Table from '../Table/Table'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveAllTable } from '../../../redux/slices/activeTableSlice'

const Todos = () => {
  const dispatch = useDispatch()
  const isActiveAllTable = useSelector(
    (state) => state.activeAllTable.isActiveAllTable
  )

  return (
    <div className={styles.wrapper}>
      <Table />
      <Table />
      <Table />
    </div>
  )
}

export default Todos
