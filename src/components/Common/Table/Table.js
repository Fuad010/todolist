'use client'
import React, { useEffect } from 'react'
import styles from './Table.module.css'
import Image from 'next/image'
import trash from '../../../assets/icons/crud/delete.svg'
import edit from '../../../assets/icons/crud/edit.svg'
import done from '../../../assets/icons/crud/done.svg'
import { useSelector, useDispatch } from 'react-redux'
import { complete, deleteTodo } from '../../../redux/slices/todoSlice'

const Table = ({ id, title, desc, completed, isAll }) => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleCompleteClick = () => {
    dispatch(complete({ id: id, completed: true }))
  }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: id }))
  }

  return (
    <>
      <div className={`${styles.wrapper} ${!isAll && styles.border}`}>
        <div className={styles.left}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className={styles.rightCrud}>
          {isAll && (
            <>
              {/* <div className={`min-w-[17px] min-h-[17px] ${styles.orange}`}>
              <Image src={edit} width={17} height={17} />
            </div> */}
              <div
                onClick={() => handleDeleteTodo()}
                className={`min-w-[15px] min-h-[17px] ${styles.red}`}
              >
                <Image src={trash} width={15} height={15} />
              </div>
              <div
                onClick={() => handleCompleteClick()}
                className={`min-w-[18px] min-h-[17px] ${styles.green}`}
              >
                <Image src={done} width={18} height={18} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Table
