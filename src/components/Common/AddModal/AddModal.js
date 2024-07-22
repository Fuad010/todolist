'use client'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import styles from './AddModal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveAddModal } from '../../../redux/slices/activeModalSlice'
import { addTodo } from '../../../redux/slices/todoSlice'

export default function AddModal() {
  const isActiveAddModal = useSelector(
    (state) => state.activeModal.isActiveAddModal
  )

  const todos = useSelector((state) => state.todos)

  useEffect(() => {
    console.log(todos)
  }, [todos])

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDetailChange = (e) => {
    setDetail(e.target.value)
  }

  const isButtonDisabled = title.trim() === '' || detail.trim() === ''

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addTodo({
        title: title,
        desc: detail,
      })
    )
    setTitle('')
    setDetail('')
    dispatch(handleActiveAddModal(false))
  }

  return (
    <div
      className={`${styles.modal} ${
        !isActiveAddModal && '!left-[-100%] !opacity-0'
      }`}
    >
      <Header
        handleActiveModal={handleActiveAddModal}
        isModal={true}
        title={'Add Todo'}
      />
      <div className={styles.wrapper}>
        <form onSubmit={onSubmit} className={styles.content}>
          <Input
            placeholder={'Title'}
            value={title}
            onChange={handleTitleChange}
          />
          <Input
            placeholder={'Detail'}
            value={detail}
            onChange={handleDetailChange}
          />
          <div className="mt-[10px]">
            <Button type={'submit'} disabled={isButtonDisabled} title={'ADD'} />
          </div>
        </form>
      </div>
    </div>
  )
}
