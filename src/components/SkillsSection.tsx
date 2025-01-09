import React from 'react';
import styles from '../styles/SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  const skills = [
    { title: 'User Research Design', company: 'PayPal' },
    { title: 'UI & Product Design', company: 'LinkedIn' },
    { title: 'No-code Development', company: 'Freelance' },
  ];

  return (
    <section className={styles.skills}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillCard}>
          <img src="/assets/post_it_nobg.png" alt="photo of me :)" className={styles.emilyImage}/>
          <h3>{skill.title}</h3>
          <p>{skill.company}</p>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
