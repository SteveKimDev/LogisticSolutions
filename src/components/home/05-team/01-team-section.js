import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import TitleSection from './02-title-section';
import TeamMember1Img from './03-team-member1';
import TeamMember2Img from './04-team-member2';
import TeamMember3Img from './05-team-member3';
import TeamMember4Img from './06-team-member4';
import TeamMember5Img from './07-team-member5';
import TeamMember6Img from './08-team-member6';

import * as Home from '../home.module.css';

const TeamSection = () => {
  return (
    <section className={`${Home.section} ${Home.teamSection}`} id='team'>
      <TitleSection />
      <Row>
        <Col lg={6} md={12}>
          <TeamMember1Img />
        </Col>
        <Col lg={6} md={12}>
          <TeamMember2Img />
        </Col>
        <Col lg={6} md={12}>
          <TeamMember3Img />
        </Col>
        <Col lg={6} md={12}>
          <TeamMember4Img />
        </Col>
        <Col lg={6} md={12}>
          <TeamMember5Img />
        </Col>
        <Col lg={6} md={12}>
          <TeamMember6Img />
        </Col>
      </Row>
    </section>
  );
};

export default TeamSection;
