import React from 'react'
import styles from './Table.module.css'
import Image from 'next/image'
import trash from '../../../assets/icons/crud/delete.svg'
import edit from '../../../assets/icons/crud/edit.svg'
import done from '../../../assets/icons/crud/done.svg'

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h3>TODO TITLE</h3>
        <p>
          TODO SUB TITLE TODO SUB TITLETODO SUB TITLETODO SUB TITLETODO SUB
          TITLETODO SUB TITLETODO SUB TITLETODO SUB TITLETODO SUB TITLETODO SUB
          TITLE
        </p>
      </div>
      <div className={styles.rightCrud}>
        <div className={`min-w-[17px] min-h-[17px] ${styles.orange}`}>
          <Image src={edit} width={17} height={17} />
        </div>
        <div className={`min-w-[15px] min-h-[17px] ${styles.red}`}>
          <Image src={trash} width={15} height={15} />
        </div>
        <div className={`min-w-[18px] min-h-[17px] ${styles.green}`}>
          <Image src={done} width={18} height={18} />
        </div>
      </div>
    </div>
  )
}

export default Table
