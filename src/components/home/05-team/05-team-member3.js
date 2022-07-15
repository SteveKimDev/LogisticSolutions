import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember3Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember3Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>Holly Collins</p>
        <p className={Home.teamMemberTitle}>HR Manager</p>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909730/Logistic%20Solutions/team3-img_jrgw0s.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember3Img;
