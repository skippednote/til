import React from 'react';
import Link from 'next/link';
import styles from './../styles/SidebarNav.module.css';

const SidebarNav = ({ isSidebarOpen }) => {
  return (
    <nav
      className={`${
        isSidebarOpen ? styles.showSidebar : styles.sidebarNavWrapper
      }`}
    >
      <ul className={styles.sidebarNav}>
        <li>
          <Link href="/">
            <a className={styles.menu}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/authors">
            <a className={styles.menu}>Authors</a>
          </Link>
        </li>

        <li>
          <Link href="/categories">
            <a className={styles.menu}>Categories</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
