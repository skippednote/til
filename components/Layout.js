import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  console.log(children);
  return (
    <>
      <Head>
        <title>Today I learned</title>
        <meta name="description" content="Today I learned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.wrapper}>{children}</div>

      <Footer />
    </>
  );
}
