import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import calendar from '../../../assets/icons/Header/calendar.svg'

const Header = () => {
  const dateTime = new Date()

  const options = {
    day: 'numeric',
  }

  return (
    <header>
      <div className="h-[100px] max-sm:h-[74px]">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>TODO APP</h1>
              <div className={styles.calendar}>
                <Image src={calendar} height={32} width={32} alt="calendar" />
                <p>{dateTime.toLocaleDateString(undefined, options)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
