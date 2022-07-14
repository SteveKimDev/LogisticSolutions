import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project3 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657750375/Logistic%20Solutions/project3-img_ynqfvd.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 3</h3>
        <p>Click To Learn More</p>
      </Link>
    </div>
  );
};

export default Project3;
