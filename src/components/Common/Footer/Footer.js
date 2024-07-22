'use client'
import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import add from '../../../assets/icons/footer/add.svg'
import completed from '../../../assets/icons/footer/completed.svg'
import all from '../../../assets/icons/footer/all.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleActiveAllTable,
  handleActiveCompletedTable,
} from '../../../redux/slices/activeTableSlice'
import AddModal from '../AddModal/AddModal'
import { handleActiveAddModal } from '../../../redux/slices/activeModalSlice'

const Footer = () => {
  const isActiveAllTable = useSelector(
    (state) => state.activeAllTable.isActiveAllTable
  )

  const handleActiveModal = useSelector(
    (state) => state.activeAllTable.isActiveCompletedTable
  )

  const isActiveCompletedTable = useSelector(
    (state) => state.activeAllTable.isActiveCompletedTable
  )

  const dispatch = useDispatch()

  return (
    <>
      <AddModal />
      <footer>
        <div
          onClick={() => dispatch(handleActiveAddModal(true))}
          className={styles.add}
        >
          <Image src={add} width={21} height={23} alt="add" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div
              onClick={() => dispatch(handleActiveAllTable(true))}
              className={`${isActiveAllTable && styles.activeBtn}`}
            >
              <Image src={all} width={20} height={20} alt="all" />
              <p>All</p>
            </div>
            <div
              onClick={() => dispatch(handleActiveCompletedTable(true))}
              className={`${isActiveCompletedTable && styles.activeBtn}`}
            >
              <Image src={completed} width={20} height={20} alt="completed" />
              <p>Completed</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
