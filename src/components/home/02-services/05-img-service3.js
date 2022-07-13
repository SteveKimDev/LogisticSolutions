import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const ServiceImg3 = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660883/Logistic%20Solutions/service3-img_tvrniv.webp'
        alt='service img'
        className={Home.serviceImg}
      />
    </div>
  );
};

export default ServiceImg3;
