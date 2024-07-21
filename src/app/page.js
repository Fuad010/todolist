import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/Common/Header/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <header>
          <Header />
        </header>
      </main>
    </div>
  )
}
