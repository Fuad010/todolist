import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import add from '../../../assets/icons/footer/add.svg'
import completed from '../../../assets/icons/footer/completed.svg'
import all from '../../../assets/icons/footer/all.svg'

const Footer = () => {
  return (
    <footer>
      <div className={styles.add}>
        <Image src={add} width={21} height={23} alt="add" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div>
            <Image src={all} width={20} height={20} alt="all" />
            <p>All</p>
          </div>
          <div>
            <Image src={completed} width={20} height={20} alt="completed" />
            <p>Completed</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
