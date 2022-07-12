import * as React from 'react';
import { Link } from 'gatsby';
import HeroImg from './02-hero-img';

import * as Home from '../home.module.css';

const HeroSection = () => {
  return (
    <section className={Home.heroSection}>
      {/* title */}
      <h1 className={Home.heroTitle1}>Transform</h1>
      <h1 className={Home.heroTitle2}>Ideas Into</h1>
      <h1 className={Home.heroTitle3}>Achievements</h1>

      {/* description */}
      <div className={Home.heroDescriptionDiv}>
        <p className={Home.heroDescription}>
          Logistic Solutions provides global
          <br />
          services for large-scale events.
        </p>
        <div className={Home.heroCta}>
          <Link to='/#projects'>Our Projects</Link>
        </div>
      </div>

      {/* image */}
      <HeroImg />
    </section>
  );
};

export default HeroSection;
