import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Blog from '../components/Blog/blog';
import { graphql } from 'gatsby';

const Stories = ({ data }) => (
  <Layout>
    <Helmet title="Stories | Samakintunde" />
    <div className="hero">
      <h1>Stories.</h1>
      <p>Written notes about my adventures and journeys in coding.</p>
    </div>
    <Blog data={data.allContentfulBlogPost.edges} />

    <style>{`
      
      div.hero {
        height: calc(10em);
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

    `}</style>
  </Layout>
);

export default Stories;

export const storiesQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          tags
          description {
            description
          }
          publishDate
          body {
            body
          }
          heroImage {
            fluid(maxHeight: 500) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
