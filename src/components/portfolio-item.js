import React from 'react';

import styles from './portfolio-item.module.css';

const PortfolioItem = ({ data }) => (
  <div className={styles.item}>
    <a
      href={data.url}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={data.image.file.url} alt="placeholder" />
      <div>
        <div>
          <h4>{data.title}</h4>
          <p>{data.tags}</p>
        </div>
      </div>
    </a>
  </div>
);

export default PortfolioItem;
