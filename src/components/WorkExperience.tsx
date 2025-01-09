import React from 'react';
import styles from '../styles/WorkExperience.module.css';

// Temporary work experience data
const workExperiences = [
  {
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    duration: 'Jan 2023 - Dec 2023',
    description: 'Designed user-centric interfaces for web and mobile platforms.',
  },
  {
    title: 'Product Designer',
    company: 'Tech Startup',
    duration: 'Mar 2022 - Dec 2022',
    description: 'Collaborated with cross-functional teams to create intuitive product designs.',
  },
  {
    title: 'Freelance Designer',
    company: 'Self-employed',
    duration: 'Jan 2021 - Feb 2022',
    description: 'Provided design solutions for small businesses and individual clients.',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className={styles.workExperience}>
      <h2>Work Experience</h2>
      {workExperiences.map((experience, index) => (
        <div key={index} className={styles.experienceCard}>
          <h3>{experience.title}</h3>
          <p><strong>{experience.company}</strong></p>
          <p>{experience.duration}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
