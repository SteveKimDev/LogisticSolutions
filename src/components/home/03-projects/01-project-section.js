import * as React from 'react';

import TitleSection from './02-title-section';
import ProjectCarousel from './03-project-carousel';

import * as Home from '../home.module.css';

const ProjectSection = () => {
  return (
    <section
      className={`${Home.section} ${Home.projectsSection}`}
      id='projects'
    >
      <TitleSection />
      <ProjectCarousel />
    </section>
  );
};

export default ProjectSection;
