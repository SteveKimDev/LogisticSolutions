import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember1Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember1Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>John Smith</p>
        <p className={Home.teamMemberTitle}>CEO</p>
      </div>
      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909725/Logistic%20Solutions/team1-img_w2vl5d.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember1Img;
