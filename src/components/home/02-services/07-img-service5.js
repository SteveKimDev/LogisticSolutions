import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const ServiceImg4 = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660894/Logistic%20Solutions/service5-img_j9xvhg.webp'
        alt='service img'
        className={Home.serviceImg}
      />
    </div>
  );
};

export default ServiceImg4;
