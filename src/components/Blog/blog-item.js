import React from 'react';
import Img from 'gatsby-image';

import styles from './blog-item.module.css';

const BlogItem = ({ data }) => (
  <div className={styles.item}>
    <Img
      className={styles.image}
      fluid={data.heroImage.fluid}
      alt={data.heroImage.title}
    />
    <div className={styles.details}>
      <div>
        <div>
          {data.tags.map(tag => (
            <p className={styles.tag}>{tag}</p>
          ))}
        </div>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.excerpt}>{data.description.description}</p>
      </div>
    </div>
  </div>
);

export default BlogItem;
