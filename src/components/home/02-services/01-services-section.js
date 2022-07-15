import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import TitleSection from './02-title-section';
import ServiceImg1 from './03-img-service1';
import ServiceCopy1 from './03a-copy-service1';
import ServiceImg2 from './04-img-service2';
import ServiceCopy2 from './04a-copy-service2';
import ServiceImg3 from './05-img-service3';
import ServiceCopy3 from './05a-copy-service3';
import ServiceImg4 from './06-img-service4';
import ServiceCopy4 from './06a-copy-service4';
import ServiceImg5 from './07-img-service5';
import ServiceCopy5 from './07a-copy-service5';

import * as Home from '../home.module.css';

const ServicesSection = () => {
  return (
    <section className={Home.section} id='services'>
      <TitleSection />

      {/* service 1 */}
      <Row className={Home.serviceRow}>
        <Col xl={7} sm={12}>
          <ServiceImg1 />
        </Col>
        <Col xl={5} sm={7} style={{ position: 'relative' }}>
          <ServiceCopy1 />
        </Col>
      </Row>

      {/* service 2 */}
      <Row className={Home.serviceRow}>
        <Col xl={7} sm={12}>
          <ServiceImg2 />
        </Col>
        <Col xl={5} sm={7} style={{ position: 'relative' }}>
          <ServiceCopy2 />
        </Col>
      </Row>

      {/* service 3 */}
      <Row className={Home.serviceRow}>
        <Col xl={7} sm={12}>
          <ServiceImg3 />
        </Col>
        <Col xl={5} sm={7} style={{ position: 'relative' }}>
          <ServiceCopy3 />
        </Col>
      </Row>

      {/* service 4 */}
      <Row className={Home.serviceRow}>
        <Col xl={7} sm={12}>
          <ServiceImg4 />
        </Col>
        <Col xl={5} sm={7} style={{ position: 'relative' }}>
          <ServiceCopy4 />
        </Col>
      </Row>

      {/* service 5 */}
      <Row>
        <Col xl={7} sm={12}>
          <ServiceImg5 />
        </Col>
        <Col xl={5} sm={7} style={{ position: 'relative' }}>
          <ServiceCopy5 />
        </Col>
      </Row>
    </section>
  );
};

export default ServicesSection;
