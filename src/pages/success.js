import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import sentIcon from '../images/sent.svg';

const Success = () => (
  <>
    <Helmet title="Message sent!" />
    <main>
      <div>
        <div>
          <img src={sentIcon} alt="Message sent" />
          <p>Success!</p>
        </div>
        <div className="links">
          <Link className="link" to="/">
            Go Home
          </Link>
          <Link className="link" to="/stories">
            Read some stories
          </Link>
        </div>
      </div>
    </main>

    <style>
      {`
      main {
        background-color: #147dff;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        color: #ffffff;
      }
      img {
        height: 250px;
        margin-bottom: 2.5em;
      }
      p {
        text-align: center;
        font-size: 2em;
      }
      .links {
        width: 100%;
        display: flex;
        margin-top: 5em;
      }
      .link {
        margin: 1em;
        padding: 0.5em 1em;
        border: 1.5px solid #ffffff;
        border-radius: 2px;
        text-decoration: none;
        color: #ffffff;
        background: none;
        transition: 0.2s;
        font-family: Montserrat, sans-serif;
        font-size: 0.8em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
      }
      .link:hover {
        background-color: #ffffff;
        color: #147dff;
      }
      `}
    </style>
  </>
);

export default Success;
