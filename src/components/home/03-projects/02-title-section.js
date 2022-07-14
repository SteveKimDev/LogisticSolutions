import * as React from 'react';

import * as Home from '../home.module.css';

const TitleSection = () => {
  return (
    <div className={`${Home.titleSection} ${Home.projectsTitleSection}`}>
      <h2>We Make Complex Projects Look Simple</h2>
      <p>
        Our experience in solving large-scale problems on the largest of stages
        such as the World Cup, has made us a trusted and reliable source for
        logistical needs.
      </p>
    </div>
  );
};

export default TitleSection;
