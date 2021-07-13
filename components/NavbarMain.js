import React from 'react';
import Link from 'next/link';
import styles from './../styles/Header.module.css';

const NavbarMain = () => {
  return (
    <nav>
      <ul className={styles.headerNav}>
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

export default NavbarMain;
