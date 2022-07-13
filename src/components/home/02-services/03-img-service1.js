import * as React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import * as Home from '../home.module.css';

const ServiceImg1 = () => {
  return (
    <div className={Home.serviceImg}>
      <ParallaxBanner
        layers={[
          {
            image:
              'https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660875/Logistic%20Solutions/service1-img_fusaui.webp',
            speed: -10,
          },
        ]}
        style={{ aspectRatio: '3/ 2' }}
      />
    </div>
  );
};

export default ServiceImg1;
