import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project6 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657660883/Logistic%20Solutions/service3-img_tvrniv.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 6</h3>
        <p>Project Short Description</p>
      </Link>
    </div>
  );
};

export default Project6;
