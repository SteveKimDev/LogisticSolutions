import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from '../home.module.css';

const TitleSection = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '30px',
    delay: 100,
    config: { duration: 1000 },
  });
  return (
    <>
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp} className={Home.titleSection}>
        <h2>Our Team</h2>
        <p>
          This is our dedicated team who work day-in and day-out together to
          bring our clients the most amazing projects for a successful event.
        </p>
      </animated.div>
    </>
  );
};

export default TitleSection;
