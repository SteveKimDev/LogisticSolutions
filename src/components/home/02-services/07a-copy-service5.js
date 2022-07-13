import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Parallax } from 'react-scroll-parallax';
import { useSpring, animated } from 'react-spring';

import * as Home from '../home.module.css';

const ServiceCopy5 = () => {
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
      <Parallax speed={10} className='transform'>
        <div className={Home.serviceCopyDiv}>
          <animated.div style={fadeInUp}>
            <h3>Accomodations</h3>
            <p>
              We arrange for both short and long-term accommodations. Those
              needs can be met at an event of any scale.
            </p>
          </animated.div>
        </div>
      </Parallax>
    </>
  );
};

export default ServiceCopy5;
