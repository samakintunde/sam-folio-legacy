import React from 'react';
import Img from 'gatsby-image';

import Tags from '../Tag/tags';

import styles from './portfolio-item.module.css';

const PortfolioItem = ({ data }) => (
  <div className={styles.item}>
    <a
      href={data.url}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Img
        className={styles.image}
        fluid={data.image.fluid}
        alt="placeholder"
      />
      <div className={styles.details}>
        <div>
          <Tags tags={data.tags} />
          <h4 className={styles.title}>{data.title}</h4>
        </div>
      </div>
    </a>
  </div>
);

export default PortfolioItem;
