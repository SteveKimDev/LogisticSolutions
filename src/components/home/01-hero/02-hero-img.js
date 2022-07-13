import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const HeroImg = () => {
  return (
    <div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657579446/Logistic%20Solutions/hero-img_rb702f.webp'
        alt='about img'
        className={Home.heroImg}
      />
    </div>
  );
};

export default HeroImg;
