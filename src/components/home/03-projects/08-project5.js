import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project5 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660875/Logistic%20Solutions/service1-img_fusaui.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 5</h3>
        <p>Click To Learn More</p>
      </Link>
    </div>
  );
};

export default Project5;
