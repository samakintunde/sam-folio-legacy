import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import Tags from '../Tag/tags';

import styles from './blog-item.module.css';

const BlogItem = ({ data }) => (
  <div className={styles.item}>
    <Link to={`/stories/${data.slug}`} className={styles.parentLink}>
      <Img
        className={styles.image}
        fluid={data.heroImage.fluid}
        alt={data.heroImage.title}
      />
      <p className={styles.date}>{data.publishDate}</p>
      <div className={styles.details}>
        <div>
          <Tags tags={data.tags} />
          <h4 className={styles.title}>{data.title}</h4>
          <p className={styles.excerpt}>{data.description.description}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default BlogItem;
