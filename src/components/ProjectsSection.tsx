import React from 'react';
import styles from '../styles/ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'Portfolio Design', tags: ['UI/UX', 'Frontend'], image: 'link-to-image' },
    { title: 'Calendar App', tags: ['React', 'JavaScript'], image: 'link-to-image' },
    { title: 'Recipe Catalog', tags: ['Fullstack', 'MongoDB'], image: 'link-to-image' },
  ];

  return (
    <section id="projects" className={styles.projects}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <img src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <div>{project.tags.join(', ')}</div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
