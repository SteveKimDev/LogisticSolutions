import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember2Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember2Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>Bob Jones</p>
        <p className={Home.teamMemberTitle}>COO</p>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909728/Logistic%20Solutions/team2-img_ys0xjj.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember2Img;
