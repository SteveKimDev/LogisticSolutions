import * as React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import * as Home from '../home.module.css';

const ServiceImg4 = () => {
  return (
    <div className={Home.serviceImg}>
      <ParallaxBanner
        layers={[
          {
            image:
              'https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660894/Logistic%20Solutions/service5-img_j9xvhg.webp',
            speed: -10,
          },
        ]}
        style={{ aspectRatio: '3/ 2' }}
      />
    </div>
  );
};

export default ServiceImg4;
