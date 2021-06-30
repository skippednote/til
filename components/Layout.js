import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Today I learned</title>
        <meta name="description" content="Today I learned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  )
}
