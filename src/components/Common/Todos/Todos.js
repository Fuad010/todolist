'use client'
import React from 'react'
import styles from './Todos.module.css'
import Table from '../Table/Table'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveAllTable } from '../../../redux/slices/activeTableSlice'
import { handleActiveAddModal } from '../../../redux/slices/activeModalSlice'

const Todos = () => {
  const dispatch = useDispatch()
  const isActiveAllTable = useSelector(
    (state) => state.activeAllTable.isActiveAllTable
  )
  const todos = useSelector((state) => state.todos)

  return (
    <div className={styles.wrapper}>
      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <Table
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            completed={todo.completed}
            isAll={true}
          />
        ))}
      {todos.length === 0 || todos.some((todo) => !todo.completed) ? (
        ''
      ) : (
        <div onClick={() => dispatch(handleActiveAddModal(true))}>
          <Button title={'Add Todo'} />
        </div>
      )}
    </div>
  )
}

export default Todos
