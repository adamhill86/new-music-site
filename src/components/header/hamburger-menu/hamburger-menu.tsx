import React from 'react';
import styles from './hamburger-menu.module.scss';

interface Props {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<Props> = ({ isMenuOpen, setMenuOpen }) => (
  <button onClick={() => setMenuOpen(!isMenuOpen)} className={`${styles.button} ${isMenuOpen ? styles.active : ''}`}>
    <div className={`${styles.bar} ${styles.top}`}></div>
    <div className={`${styles.bar} ${styles.middle}`}></div>
    <div className={`${styles.bar} ${styles.bottom}`}></div>
  </button>
);

export default HamburgerMenu;
