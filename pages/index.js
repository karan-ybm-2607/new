import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainContainer from './MainContainer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CYBM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainContainer />
      </main>

    </div>
  )
}
