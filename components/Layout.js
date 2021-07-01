import Head from 'next/head';
import Footer from './Footer';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Today I learned</title>
        <meta name="description" content="Today I learned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul className={styles.headerNav}>
          <li>
            <Link href='/'>
              <a className={styles.card}>
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href='/authors'>
              <a className={styles.card}>
                Authors
              </a>
            </Link>
          </li>

          <li>
            <Link href='/categories'>
              <a className={styles.card}>
                Categories
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
}
