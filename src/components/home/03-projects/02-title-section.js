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
      <animated.div
        style={fadeInUp}
        className={`${Home.titleSection} ${Home.projectsTitleSection}`}
      >
        <h2>We Make Complex Projects Look Simple</h2>
        <p>
          Our experience in solving large-scale problems on the largest of
          stages such as the World Cup, has made us a trusted and reliable
          source for logistical needs.
        </p>
      </animated.div>
    </>
  );
};

export default TitleSection;
