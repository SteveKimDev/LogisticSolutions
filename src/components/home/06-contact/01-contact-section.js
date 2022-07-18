import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
import { Row, Col } from 'react-bootstrap';

import TitleSection from './02-title-section';
import ContactForm from './03-contact-form';
import ContactInfo from './04-contact-info';

import * as Home from '../home.module.css';

const ContactScetion = () => {
  // animation on scroll
  const [animate, toggle] = useState(false);

  // animation for text
  const fadeInUp = useSpring({
    opacity: animate ? 1 : 0,
    translateY: animate ? '0px' : '30px',
    delay: 500,
    config: { duration: 1000 },
  });
  return (
    <section className={Home.section}>
      <TitleSection />

      {/* contact form */}
      <Waypoint
        bottomOffset='20%'
        onEnter={() => {
          if (!animate) toggle(true);
        }}
      />
      <animated.div style={fadeInUp} className={Home.contactFormDiv}>
        <Row>
          <Col sm={7}>
            <ContactForm />
          </Col>
          <Col sm={5} style={{ position: 'relative' }}>
            <ContactInfo />
          </Col>
        </Row>
      </animated.div>
    </section>
  );
};

export default ContactScetion;
