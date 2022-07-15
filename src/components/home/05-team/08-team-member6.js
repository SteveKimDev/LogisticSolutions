import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember6Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember6Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>Terry Parsons</p>
        <p className={Home.teamMemberTitle}>Project Manager</p>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909738/Logistic%20Solutions/team6-img_goffey.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember6Img;
