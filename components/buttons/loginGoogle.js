import React from 'react';
import styles from './../../styles/LoginGoogleButton.module.css';

const loginGoogle = ({ href, linkText, children }) => {
  return (
    <a className={styles.loginGoogleButton} href={href}>
      {children} <span>{linkText}</span>
    </a>
  );
};

export default loginGoogle;
