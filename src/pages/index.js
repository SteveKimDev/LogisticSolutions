import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';

import HeroSection from '../components/home/01-hero/01-hero-section';
import ServicesSection from '../components/home/02-services/01-services-section';
import ProjectSection from '../components/home/03-projects/01-project-section';
import AboutSection from '../components/home/04-about/01-about-section';

import * as Home from '../components/home/home.module.css';

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <div style={{ position: 'relative' }}>
      <div className={Home.greenStripe1} />
      <HeroSection />
      <ServicesSection />
    </div>
    <ProjectSection />
    <div style={{ position: 'relative' }}>
      <div className={Home.greenStripe3} />
      <AboutSection />
    </div>
  </Layout>
);

export default IndexPage;
