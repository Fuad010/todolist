'use client'
import React, { useState } from 'react'
import Header from '../Header/Header'
import styles from './AddModal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveAddModal } from '../../../redux/slices/activeModalSlice'

export default function AddModal() {
  const isActiveAddModal = useSelector(
    (state) => state.activeModal.isActiveAddModal
  )

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDetailChange = (e) => {
    setDetail(e.target.value)
  }

  const isButtonDisabled = title.trim() === '' || detail.trim() === ''
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
        <div className={styles.content}>
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
            <Button disabled={isButtonDisabled} title={'ADD'} />
          </div>
        </div>
      </div>
    </div>
  )
}
