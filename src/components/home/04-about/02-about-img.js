import * as React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

import * as Home from '../home.module.css';

const AboutImg = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image:
              'https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657905555/Logistic%20Solutions/about-img_hbazdk.webp',
            speed: -10,
          },
        ]}
        style={{ aspectRatio: '1/ 1' }}
        className={Home.aboutImg}
      />
    </>
  );
};

export default AboutImg;
