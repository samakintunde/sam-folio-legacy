import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Portfolio from '../components/portfolio';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <h1>Hi, I'm Samuel Akintunde</h1>
      <p>A designer and developer.</p>
    </div>

    <Portfolio />

    <style>
      {`
        div.hero {
          height: calc(100vh - 6em);
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }

        div.hero h1 {
          font-size: 3em;
        }

        div.hero p {
          font-weight: 600;
        }
      `}
    </style>
  </Layout>
);

export default IndexPage;
