import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';

import * as Home from '../home.module.css';

const AboutCopy = () => {
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
        className={`${Home.aboutCopy} ${Home.titleSection}`}
      >
        <h2>We Are Logistic Solutions</h2>
        <p>
          We provide logistics, event and destination management services for
          large scale sporting events, conventions, government projects and
          disaster response. We have extensive experience in database
          development, operations, accreditation, warehousing, procurement,
          transportation, inventory planning, asset tracking, project oversight,
          project management, accommodation, fiscal controls, security,
          execution along with venue selection, contracting, preparation and
          operations.
        </p>
      </animated.div>
    </>
  );
};

export default AboutCopy;
