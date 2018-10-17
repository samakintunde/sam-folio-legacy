import React from 'react';
// import Img from 'gatsby-image';

import image from '../images/me.jpeg';
import Layout from '../components/layout';

const About = props => (
  <Layout>
    <div className="flex">
      <div className="image">
        <img src={image} height="250" alt="Samuel Akintunde" />
      </div>
      <div className="info">
        <div>
          <h1>I'm Samuel Akintunde</h1>
          <p>Designer and developer</p>
        </div>
      </div>
    </div>

    <style>
      {`
        div.flex {
          display: flex;
        }
        div.image {
          width: 250px;
        }

      `}
    </style>
  </Layout>
);

export default About;
