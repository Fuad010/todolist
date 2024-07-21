'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import store from '../redux/app/store'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'To Do List',
//   description: 'To do list',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
