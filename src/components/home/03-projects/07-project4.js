import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project4 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660879/Logistic%20Solutions/service2-img_k34oeb.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 4</h3>
        <p>Click To Learn More</p>
      </Link>
    </div>
  );
};

export default Project4;
