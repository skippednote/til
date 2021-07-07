import styles from './../styles/Header.module.css';
import Link from 'next/link';
import SiteLogo from './icons/SiteLogo.js';

const Header = () => {
  return (
    <header className={`${styles.headerWrapper}`}>
      <main className={`${styles.headerMain} main-container`}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <a className={styles.headerIcon}>
              <SiteLogo />
              <span>TIL</span>
            </a>
          </Link>
        </div>
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
      </main>
    </header>
  );
};

export default Header;
