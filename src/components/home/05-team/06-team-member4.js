import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as Home from '../home.module.css';

const TeamMember4Img = () => {
  return (
    <div className={`${Home.teamMemberDiv} ${Home.teamMember4Div}`}>
      <div className={Home.teamMemberInfo}>
        <p className={Home.teamMemberName}>Ralph Klein</p>
        <p className={Home.teamMemberTitle}>Operations Manager</p>
      </div>

      <StaticImage
        src='https://res.cloudinary.com/stevekim/image/upload/q_auto/v1657909733/Logistic%20Solutions/team4-img_istesa.webp'
        alt='team member img'
        className={Home.teamMemberImg}
      />
    </div>
  );
};

export default TeamMember4Img;
