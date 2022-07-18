import * as React from 'react';

import * as Home from '../home.module.css';

const ContactForm = () => {
  return (
    <>
      <form name='contact' method='POST' data-netlify='true'>
        <div className={Home.formDiv}>
          <label htmlFor='name' className={Home.formLabel}>
            Name (required):
          </label>
          <input type='text' name='name' className={Home.formInput} />
        </div>
        <div className={Home.formDiv}>
          <label htmlFor='email' className={Home.formLabel}>
            Email (required):
          </label>
          <input type='email' name='email' className={Home.formInput} />
        </div>
        <div className={Home.formDiv}>
          <label htmlFor='message' className={Home.formLabel}>
            Message (required):
          </label>
          <textarea name='message' className={Home.formTextArea}></textarea>
        </div>
        <div>
          <button type='submit' className={Home.formBtn}>
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
