'use client'
import React, { useState } from 'react'
import Header from '../Header/Header'
import styles from './EditModal.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveEditModal } from '../../../redux/slices/activeModalSlice'

export default function EditModal() {
  const isActiveEditModal = useSelector(
    (state) => state.activeModal.isActiveEditModal
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
        !isActiveEditModal && '!left-[-100%] !opacity-0'
      }`}
    >
      <Header
        handleActiveModal={handleActiveEditModal}
        isModal={true}
        title={'Edit Todo'}
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
          <div className="mt-[10px] flex gap-[46px]">
            <Button disabled={isButtonDisabled} title={'Update'} />
            <Button clickState={handleActiveEditModal} title={'Cancel'} />
          </div>
        </div>
      </div>
    </div>
  )
}
