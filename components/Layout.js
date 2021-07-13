import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Home.module.css';
import SidebarNav from './SidebarNav';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head>
        <title>Today I learned</title>
        <meta name="description" content="Today I learned" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header handleSidebar={handleSidebar} />

      <SidebarNav isSidebarOpen={isSidebarOpen} />

      <div className={styles.wrapper}>{children}</div>

      <Footer />
    </>
  );
}
