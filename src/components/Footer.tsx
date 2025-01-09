import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>🌟Emily</div>
      <a
        href="https://www.linkedin.com/in/e-tang-cs"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedin}
      >LinkedIn</a>
      <a
        href="https://github.com/emilytang29"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.github}
      >GitHub</a>
      <a
        href="https://www.instagram.com/emly.tang/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instagram}
      >Instagram</a>
    </footer>
  );
};

export default Footer;
