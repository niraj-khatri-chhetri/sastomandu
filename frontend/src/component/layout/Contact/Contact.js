import React from 'react';
import './Contact.css';
import { Button } from '@material-ui/core';

const Contact = () => {
  return (
    <div classNameName="contactContainer">
      <a classNameName="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: nirajkc98@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
