import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import Html5 from '../images/html5.svg';
import Css3 from '../images/css3.svg';
import Bootstrap from '../images/bootstrap.svg';
import Sass from '../images/sass.svg';
import Javascript from '../images/javascript.svg';
import Jquery from '../images/jquery.svg';
import ReactIcon from '../images/react.svg';
import Nodejs from '../images/nodejs.svg';
import Express from '../images/express.svg';
import Mongodb from '../images/mongodb.svg';
import Git from '../images/git.svg';
import Heroku from '../images/heroku.svg';
import Wordpress from '../images/wordpress.svg';
import Photoshop from '../images/photoshop.svg';
import Illustrator from '../images/illustrator.svg';

const About = ({ data }) => {
  let profile = data.contentfulPerson;
  return (
    <Layout>
      <Helmet title="About | Samakintunde" />
      <div className="info">
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>
        </div>
        <div>
          <p>{profile.shortBio.shortBio}</p>
          <section className="skills-container">
            <h2 className="section-heading">What are my superpowers?</h2>
            <div className="skills">
              <img src={Html5} alt="HTML5" />
              <img src={Css3} alt="CSS3" />
              <img src={Bootstrap} alt="Bootstrap" />
              <img src={Sass} alt="Sass" />
              <img src={Javascript} alt="Javascript" />
              <img src={Jquery} alt="Jquery" />
              <img src={ReactIcon} alt="React" />
              <img src={Nodejs} alt="NodeJS" />
              <img src={Express} alt="Express" />
              <img src={Mongodb} alt="MongoDB" />
              <img src={Git} alt="Git" />
              <img src={Heroku} alt="Heroku" />
              <img src={Wordpress} alt="Wordpress" />
              <img src={Photoshop} alt="Photoshop" />
              <img src={Illustrator} alt="Illustator" />
            </div>
          </section>

          <section className="cv">
            <h2 className="section-heading">Resume</h2>
            <a className="download" href={profile.resume.file.url} download>
              Download
            </a>
          </section>

          <section className="connect">
            <h2 className="section-heading">Where can you find me?</h2>
            <div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                href={profile.behance}
                target="_blank"
                rel="noreferrer noopener"
              >
                Behance
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook
              </a>
            </div>
          </section>

          <section className="contact">
            <h2 className="section-heading">
              If you wanna hire me, let's talk.
            </h2>
            <div>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.trim()}`}>{profile.phone}</a>
            </div>
          </section>
        </div>
      </div>

      <style>
        {`
        div.info {
          margin: 5em 0;
        }
        h1 {
          margin-bottom:0;
        }
        section {
          margin: 5em 0;
        }

        h2.section-heading {
          text-align: left;
        }

        div.skills {
          margin-top: 0.5em;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(4em, 1fr));
          grid-gap: 2em;
        }

        div.skills img {
          width: 4em;
        }

        a.download {
          position: relative;
          border: 1.5px solid #147dff;
          border-radius: 3px;
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
          text-decoration: none;
        }

        a.download:hover {
          background-color: #147dff;
          color: #ffffff;
        }

        section.connect a,
        section.contact a {
          width: max-content;
          display: block;
          margin: 0.5em 0;
          color: #333333;
          text-decoration: none;
          font-weight: 400;
          font-size: 1em;
          transition: 0.3s;
        }
        section.connect a:hover,
        section.contact a:hover {
          color: #000000;
          border-left: 2px solid #147dff;
          padding-left: 0.5em;
        }
      `}
      </style>
    </Layout>
  );
};

export default About;

export const aboutQuery = graphql`
  query {
    contentfulPerson {
      name
      title
      email
      phone
      facebook
      twitter
      behance
      github
      instagram
      shortBio {
        shortBio
      }
      resume {
        file {
          url
        }
      }
    }
  }
`;
