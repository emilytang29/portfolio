import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <img src="/assets/emily_tape.png" alt="photo of me :)" className={styles.emilyImage}/>
      </div>
      <div className={styles.heroRight}>
        <h1>Hi! I'm Emily 😀</h1>
        <p>Welcome to my website! Keep scrolling to explore more about me, my journey, and my projects!</p>
        <button>Hire me</button>
      </div>
    </section>
  );
};

export default HeroSection;
