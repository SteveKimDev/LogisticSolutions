import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project1 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657750368/Logistic%20Solutions/project1-img_clqclh.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 1</h3>
        <p>Project Short Description</p>
      </Link>
    </div>
  );
};

export default Project1;
