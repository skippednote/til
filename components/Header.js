import styles from './../styles/Header.module.css';
import Link from 'next/link';
import SiteLogo from './icons/SiteLogo.js';
import HamburgerIcon from './icons/HamburgerIcon';
import NavbarMain from './NavbarMain';

const Header = ({ handleSidebar }) => {
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

        <div className={styles.hamburgerIcon} onClick={handleSidebar}>
          <HamburgerIcon
            iconHeight={'18px'}
            iconWidth={'16px'}
            rectHeight={'10px'}
            fillColor={'#FC4C02'}
          />
        </div>

        <NavbarMain />
      </main>
    </header>
  );
};

export default Header;
