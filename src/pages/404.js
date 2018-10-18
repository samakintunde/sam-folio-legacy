import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <main>
    <h1>404</h1>
    <p>
      This is embarassing. This link probably doesn't exist or has been deleted.
    </p>
    <div className="links">
      <Link className="link" to="/">
        Go Home
      </Link>
      <Link className="link" to="/stories">
        Read some stories
      </Link>
    </div>
    <style>
      {`
      main {
        background-color: #147dff;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        color: #ffffff;
      }
      h1 {
        font-size: 5em;
      }
      p {
        font-size: 2em;
        line-height: 1.5em;
      }
      .links {
        width: 100%;
        display: flex;
        margin-top: 5em;
        justify-content: center;
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
  </main>
);

export default NotFoundPage;
