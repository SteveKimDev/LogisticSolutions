import * as React from 'react';
// import { useSpring, animated } from 'react-spring';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const HeroImg = () => {
  //   const expand = useSpring({
  //     from: { opacity: 0, translateY: '0px' },
  //     to: { opacity: 1, translateY: '-30px' },
  //     delay: 500,
  //     config: { duration: 1000 },
  //   });
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
