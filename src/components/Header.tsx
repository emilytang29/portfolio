import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🌟Emily</div>
      <nav>
        <ul>
          <li className={styles.projectsHeader}><a href="#projects">Projects</a></li>
          <li className={styles.contactHeader}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
