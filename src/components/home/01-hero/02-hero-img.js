import * as React from 'react';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

import * as Home from '../home.module.css';

const HeroImg = () => {
  return (
    <div className={Home.heroImgDiv}>
      <Parallax speed={10}>
        <ParallaxBanner
          layers={[
            {
              image:
                'https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657579446/Logistic%20Solutions/hero-img_rb702f.webp',
              speed: -10,
            },
          ]}
          style={{ aspectRatio: '1/ 1' }}
          className={Home.heroImg}
        />
      </Parallax>
    </div>
  );
};

export default HeroImg;
