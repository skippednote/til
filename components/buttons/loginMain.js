import React from 'react';
import styles from './../../styles/LoginMainButton.module.css';

const loginMain = ({ href, linkText, children }) => {
  return (
    <a className={styles.loginMainButton} href={href} type="button">
      {children} <span>{linkText}</span>
    </a>
  );
};

export default loginMain;
