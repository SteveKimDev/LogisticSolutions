import * as React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'gatsby';

import OffCanvasBtn from './canvas-menu';

import * as Header from './style/header.module.css';

const HeaderSection = () => {
  return (
    <Stack direction='horizontal' gap={5} className={Header.stackSection}>
      <div className={Header.logoDiv}>
        <Link to='/'>Logisitic Solutions</Link>
      </div>
      <div className={`ms-auto ${Header.stackLink}`}>
        <Link to='/#services'>Services</Link>
      </div>
      <div className={Header.stackLink}>
        <Link to='/#projects'>Projects</Link>
      </div>
      <div className={Header.stackLink}>
        <Link to='/#about'>About</Link>
      </div>
      <div className={Header.stackLink}>
        <Link to='/#team'>Team</Link>
      </div>
      <div className={Header.stackLink}>
        <Link to='/#contact'>Contact</Link>
      </div>
      <div className={`ms-auto ${Header.canvasBtn}`}>
        <OffCanvasBtn />
      </div>
    </Stack>
  );
};

export default HeaderSection;
