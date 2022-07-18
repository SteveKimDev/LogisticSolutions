import * as React from 'react';

import * as Home from '../home.module.css';

const ContactInfo = () => {
  return (
    <div className={Home.contactInfoDiv}>
      <div className={Home.contactInfo}>
        <h3>Address</h3>
        <p>
          123 Bold Avenue.
          <br /> San Diego, CA 92154
        </p>
      </div>

      <div className={Home.contactInfo}>
        <h3>Phone Number</h3>
        <p>(123) 456-7890</p>
      </div>

      <div className={Home.contactInfo}>
        <h3>Email Address</h3>
        <p>info@logisiticsolutions.com</p>
      </div>

      <div className={Home.contactInfo}>
        <h3>Social Media</h3>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
    </div>
  );
};

export default ContactInfo;
