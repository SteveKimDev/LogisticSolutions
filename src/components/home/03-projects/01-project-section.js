import * as React from 'react';

import TitleSection from './02-title-section';

import * as Home from '../home.module.css';

const ProjectSection = () => {
  return (
    <section className={`${Home.section} ${Home.portfolioSection}`}>
      <TitleSection />
    </section>
  );
};

export default ProjectSection;
