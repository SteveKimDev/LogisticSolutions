import * as React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

const SuccessPage = () => {
  // styles
  const pageStyle = {
    paddingTop: '200px',
    textAlign: 'center',
  };

  const headerStyle = {
    color: '#007c91',
    fontSize: '2.5rem',
    marginBottom: '2rem',
  };

  const btnDiv = {
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
  return (
    <Layout>
      <div style={pageStyle}>
        <h2 style={headerStyle}>Your Submission has been successful!</h2>
        <p>
          Thank you! We have recieved your submission, and will be touch really
          soon.
        </p>
        <div style={btnDiv}>
          <Link to='/' style={btn}>
            Back To Home Page
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
