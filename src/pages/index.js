import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Portfolio from '../components/Portfolio/portfolio';
import Button from '../components/Button/button';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Samakintunde | Designer and Developer"
        meta={[
          { name: 'description', content: 'Designer and developer' },
          {
            name: 'keywords',
            content: 'web development, design, code, javascript, react, ui',
          },
          { name: 'twitter:site', content: '@samakintunde37' },
          { name: 'twitter:title', content: 'Samakintunde' },
          { name: 'twitter:description', content: 'Designer and developer' },
          { name: 'twitter:creator', content: '@samakintunde37' },
          { name: 'og:site_name', content: 'Samakintunde' },
          { name: 'og:title', content: 'Samakintunde' },
          { name: 'og:description', content: 'Designer and developer' },
          { name: 'og:url', content: `http://samakintunde.design` },
        ]}
      />
      <html lang="en" />
      <div className="hero">
        <h1>Hi, I'm Samuel Akintunde</h1>
        <p>A designer and developer.</p>
      </div>

      <Portfolio data={data.allContentfulPortfolioItem.edges} />

      <div className="contact">
        <h2 className="section-heading">Got any questions for me?</h2>
        <Button location="/contact" text="Contact Me" />
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
          margin-top: 5em;
          padding: 1em;
          color: #ffffff;
          text-align: center;
        }
      `}
      </style>
    </Layout>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query {
    allContentfulPortfolioItem(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          url
          image {
            title
            fluid(maxHeight: 400) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          tags
        }
      }
    }
  }
`;
