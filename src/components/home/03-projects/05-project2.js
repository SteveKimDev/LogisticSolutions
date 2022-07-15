import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

import * as Home from '../home.module.css';

const Project2 = () => {
  return (
    <div className={Home.carouselItemDiv}>
      <Link to='/project-details'>
        <StaticImage
          src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657750371/Logistic%20Solutions/project2-img_ftdpcp.webp'
          alt='carousel item img'
          className={Home.carouselImg}
        />
        <h3>Project 2</h3>
        <p>Project Short Description</p>
      </Link>
    </div>
  );
};

export default Project2;
