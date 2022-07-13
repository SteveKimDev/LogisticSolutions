import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const ServiceImg1 = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660875/Logistic%20Solutions/service1-img_fusaui.webp'
        alt='service img'
        className={Home.serviceImg}
      />
    </div>
  );
};

export default ServiceImg1;
