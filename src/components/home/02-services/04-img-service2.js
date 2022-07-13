import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const ServiceImg2 = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660879/Logistic%20Solutions/service2-img_k34oeb.webp'
        alt='service img'
        className={Home.serviceImg}
      />
    </div>
  );
};

export default ServiceImg2;
