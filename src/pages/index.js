import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';

import HeroSection from '../components/home/01-hero/01-hero-section';
import ServicesSection from '../components/home/02-services/01-services-section';
import ProjectSection from '../components/home/03-projects/01-project-section';
import AboutSection from '../components/home/04-about/01-about-section';
import TeamSection from '../components/home/05-team/01-team-section';
// import ContactSection from '../components/home/06-contact/01-contact-section';

import * as Home from '../components/home/home.module.css';

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <div style={{ position: 'relative' }}>
      <HeroSection />
      <ServicesSection />
      <div className={Home.greenStripe1} />
    </div>

    <ProjectSection />
    {/* green stripe 2 is located in the project carousel file */}

    <div style={{ position: 'relative' }}>
      <AboutSection />
      <TeamSection />
      <div className={Home.greenStripe3} />
    </div>

    {/* <div style={{ position: 'relative' }}>
      <ContactSection />
      <div className={Home.greenStripe4} />
    </div> */}
  </Layout>
);

export default IndexPage;
