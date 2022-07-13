import * as React from 'react';
import { SSRProvider } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';

import HeaderSection from './header';
// import Footer from './footer';

import './style/layout.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <ParallaxProvider scrollAxis='vertical'>
        <div className={`screen-orientation`}>
          <HeaderSection />
          <main className={`main-content`}>{children}</main>
          {/* <Footer /> */}
        </div>
      </ParallaxProvider>
    </SSRProvider>
  );
};

export default Layout;
