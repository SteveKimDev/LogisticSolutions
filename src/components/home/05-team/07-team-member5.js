import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember5Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember5Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>Lauren Olsen</p>
        <p className={Home.teamMemberTitle}>Project Manager</p>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909736/Logistic%20Solutions/team5-img_pyqiqv.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember5Img;
