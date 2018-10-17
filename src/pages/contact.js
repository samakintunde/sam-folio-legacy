import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Form from '../components/Form/form';
import Button from '../components/Button/button';

const Contact = props => (
  <Layout>
    <Helmet>
      <title>Contact | Samakintunde</title>
      <meta name="description" content="Contact form" />
    </Helmet>

    <div className="contact-container">
      <div className="contact-info">
        <a href="tel:+2347080784554">
          <Button text="Phone: +234 708 078 4554" />
        </a>
        <a href="mailto:samakintunde37@gmail.com">
          <Button text="Email: samakintunde37@gmail.com" />
        </a>
        <p>or send a message using this form </p>
      </div>
      <Form />
    </div>

    <style>
      {` 
      div.contact-container {
        width: 100%;
        display: flex;
        flex: 1 1 400px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      div.contact-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
      }

      p {
        margin: 2em 0;
      }
    `}
    </style>
  </Layout>
);

export default Contact;
