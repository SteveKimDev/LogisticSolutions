import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'gatsby';
import HeroImg from './02-hero-img';

import * as Home from '../home.module.css';

const HeroSection = () => {
  const fadeInUp1 = useSpring({
    from: { opacity: 0, translateY: '30px' },
    to: { opacity: 1, translateY: '0px' },
    config: { duration: 1000 },
  });

  const fadeInUp2 = useSpring({
    from: { opacity: 0, translateY: '30px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 500,
    config: { duration: 1000 },
  });

  const fadeInUp3 = useSpring({
    from: { opacity: 0, translateY: '30px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1000,
    config: { duration: 1000 },
  });

  const fadeInUp4 = useSpring({
    from: { opacity: 0, translateY: '30px' },
    to: { opacity: 1, translateY: '0px' },
    delay: 1500,
    config: { duration: 1000 },
  });

  return (
    <section className={Home.heroSection}>
      {/* title */}
      <animated.h1 style={fadeInUp1} className={Home.heroTitle1}>
        Transform
      </animated.h1>

      <animated.h1 style={fadeInUp2} className={Home.heroTitle2}>
        Ideas Into
      </animated.h1>

      <animated.h1 style={fadeInUp3} className={Home.heroTitle3}>
        Achievements
      </animated.h1>

      {/* description */}
      <animated.div style={fadeInUp4} className={Home.heroDescriptionDiv}>
        <p className={Home.heroDescription}>
          Logistic Solutions provides global services for large-scale events.
        </p>
        <div className={Home.heroCta}>
          <Link to='/#projects'>Our Projects</Link>
        </div>
      </animated.div>

      {/* image */}
      <HeroImg />
    </section>
  );
};

export default HeroSection;
