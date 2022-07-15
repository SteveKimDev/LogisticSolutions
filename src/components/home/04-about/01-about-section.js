import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import AboutImg from './02-about-img';
import AboutCopy from './03-about-copy';

import * as Home from '../home.module.css';

const AboutSection = () => {
  return (
    <section className={`${Home.section} ${Home.aboutSection}`} id='about'>
      <Row>
        <Col lg={6} md={12}>
          <AboutImg />
        </Col>
        <Col lg={6} md={12} style={{ position: 'relative' }}>
          <AboutCopy />
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
