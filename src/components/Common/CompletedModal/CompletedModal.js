'use client'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import styles from './CompletedModal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../Table/Table'
import {
  handleActiveCompletedTable,
  handleActiveAllTable,
} from '../../../redux/slices/activeTableSlice'

export default function CompletedModal() {
  const isActiveCompletedTable = useSelector(
    (state) => state.activeAllTable.isActiveCompletedTable
  )

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos)

  return (
    <div
      className={`${styles.modal} ${
        !isActiveCompletedTable && '!left-[-100%] !opacity-0'
      }`}
    >
      <Header
        handleActiveModal={handleActiveCompletedTable}
        isModal={true}
        title={'Completed Todo'}
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {todos.map((todo) => (
            <Table
              key={todo.id}
              id={todo.id}
              title={todo.title}
              desc={todo.desc}
              completed={todo.completed}
              isAll={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
