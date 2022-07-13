import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';

import HeroSection from '../components/home/01-hero/01-hero-section';
import ServicesSection from '../components/home/02-services/01-services-section';

import * as Home from '../components/home/home.module.css';

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <div style={{ position: 'relative' }}>
      <div className={Home.greenStripe1} />
      <HeroSection />
      <ServicesSection />
    </div>
  </Layout>
);

export default IndexPage;
