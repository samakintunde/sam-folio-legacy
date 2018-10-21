import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import Tags from '../components/Tag/tags';

import styles from './post.module.css';

const Post = ({ data }) => {
  let post = data.contentfulBlogPost;
  return (
    <Layout>
      <Helmet title={data.title} />
      <div className={styles.intro}>
        <p className={styles.date}>{post.publishDate}</p>
        <h1 className={styles.title}>{post.title}</h1>
        <Tags tags={post.tags} />
      </div>
      <Img fluid={post.heroImage.fluid} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
      />
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query Post($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
        image {
          fixed(width: 48) {
            ...GatsbyContentfulFixed
          }
        }
      }
      tags
      publishDate(formatString: "MMM DD, YYYY")
      heroImage {
        fluid(maxWidth: 960, maxHeight: 400) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
    }
  }
`;
