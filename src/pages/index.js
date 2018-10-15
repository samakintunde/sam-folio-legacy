import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Portfolio from '../components/portfolio';

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <h1>Hi, I'm Samuel Akintunde</h1>
      <p>A designer and developer.</p>
    </div>

    <Portfolio />

    <div className="contact">
      <h2 className="section-heading">Got any questions for me?</h2>
      <Link to="/contact">
        <button className="button">Contact Me</button>
      </Link>
    </div>

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

        .contact {
          margin: 1em 0;
          padding: 1em;
          color: #ffffff;
          text-align: center;
        }

        .button {
          position: relative;
          border: 1.5px solid #147dff;
          border-radius: 2px;
          color: #000000;
          margin-top: 1em;
          padding: 0.5em 1em;
          background: none;
          transition: 0.2s;
          font-family: Montserrat, sans-serif;
          font-size: 0.8em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
        }

        .button:hover {
          background-color: #147dff;
          color: #ffffff;
        }
      `}
    </style>
  </Layout>
);

export default IndexPage;
