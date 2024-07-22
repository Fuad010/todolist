'use client'
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import calendar from '../../../assets/icons/Header/calendar.svg'
import turnBack from '../../../assets/icons/Header/turnBack.svg'
import { useDispatch } from 'react-redux'

const Header = ({ handleActiveModal, isModal, title }) => {
  const dispatch = useDispatch()

  const dateTime = new Date()

  const options = {
    day: 'numeric',
  }

  return (
    <header>
      <div className="h-[90px] max-sm:h-[74px]">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title}>
              {isModal ? (
                <div className="flex gap-[35px] items-center">
                  <div
                    onClick={() => dispatch(handleActiveModal(false))}
                    className="transition duration-300 ease-in-out hover:opacity-75 cursor-pointer"
                  >
                    <Image
                      src={turnBack}
                      height={25}
                      width={25}
                      alt="turnBack"
                    />
                  </div>
                  <h1>{title}</h1>
                </div>
              ) : (
                <h1>{title}</h1>
              )}
              {!isModal && (
                <div className={styles.calendar}>
                  <Image src={calendar} height={32} width={32} alt="calendar" />
                  <p>{dateTime.toLocaleDateString(undefined, options)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
