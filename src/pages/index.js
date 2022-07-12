import * as React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/layout/seo';

import HeroSection from '../components/home/01-hero/01-hero-section';

// markup
const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <HeroSection />
  </Layout>
);

export default IndexPage;
