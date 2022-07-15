import * as React from 'react';

import * as Home from '../home.module.css';

const AboutCopy = () => {
  return (
    <div className={`${Home.aboutCopy} ${Home.titleSection}`}>
      <h2>We Are Logistic Solutions</h2>
      <p>
        We provide logistics, event and destination management services for
        large scale sporting events, conventions, government projects and
        disaster response. We have extensive experience in database development,
        operations, accreditation, warehousing, procurement, transportation,
        inventory planning, asset tracking, project oversight, project
        management, accommodation, fiscal controls, security, execution along
        with venue selection, contracting, preparation and operations.
      </p>
    </div>
  );
};

export default AboutCopy;
