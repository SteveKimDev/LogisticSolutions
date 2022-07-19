import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  paddingTop: '100px',
};
const headingStyles = {
  textAlign: 'center',
  color: '#007c91',
  marginBottom: '2rem',
};

const paragraphStyles = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const btnDiv = {
  textAlign: 'center',
  backgroundColor: '#00acc1',
  width: '250px',
  padding: '15px 30px',
  borderRadius: '50px',
  display: 'block',
  margin: '3rem auto',
};

const btn = {
  color: '#ffffff',
};
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Looks like you are lost. Lets get you back home.
      </p>
      <div style={btnDiv}>
        <Link style={btn} to='/'>
          Go home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
