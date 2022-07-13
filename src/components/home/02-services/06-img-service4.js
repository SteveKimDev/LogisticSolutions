import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const ServiceImg4 = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660888/Logistic%20Solutions/service4-img_kwgz78.webp'
        alt='service img'
        className={Home.serviceImg}
      />
    </div>
  );
};

export default ServiceImg4;
