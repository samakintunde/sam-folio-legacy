import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';

import Layout from '../components/layout';
import Button from '../components/Button/button';

import IconHtml5 from 'react-devicon/html5/original-wordmark';
import IconCss3 from 'react-devicon/css3/original-wordmark';
import IconBootstrap from 'react-devicon/bootstrap/plain-wordmark';
import IconSass from 'react-devicon/sass/original';
import IconJavascript from 'react-devicon/javascript/original';
import IconJquery from 'react-devicon/jquery/original-wordmark';
import IconReact from 'react-devicon/react/original-wordmark';
import IconNodejs from 'react-devicon/nodejs/original';
import IconExpress from 'react-devicon/express/original';
import IconMongodb from 'react-devicon/mongodb/original-wordmark';
import IconWordpress from 'react-devicon/wordpress/original';
import IconGit from 'react-devicon/git/original-wordmark';
import IconHeroku from 'react-devicon/heroku/plain-wordmark';
import IconPhotoshop from 'react-devicon/photoshop/plain';
import IconIllustrator from 'react-devicon/illustrator/plain';
import IconElectron from 'react-devicon/electron/original';

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
              {/* <IconHtml5 width="4em" />
              <IconCss3 width="4em" />
              <IconBootstrap width="4em" />
              <IconSass width="4em" />
              <IconJavascript width="4em" />
              <IconJquery width="4em" />
              <IconReact width="4em" />
              <IconNodejs width="4em" />
              <IconExpress width="4em" />
              <IconMongodb width="4em" />
              <IconWordpress width="4em" />
              <IconGit width="4em" />
              <IconHeroku width="4em" />
              <IconElectron width="4em" />
              <IconPhotoshop width="4em" />
              <IconIllustrator width="4em" /> */}
            </div>
          </section>

          <section className="cv">
            <h2 className="section-heading">Resume</h2>
            <a href="../assets/Resume-1018.pdf" download="">
              <Button text="download" />
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

        section.skills-container div.skills {
          margin-top: 0.5em;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(4em, 1fr));
          grid-gap: 1em;
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
    }
  }
`;
