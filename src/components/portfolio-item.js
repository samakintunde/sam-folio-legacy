import React from 'react';

import styles from './portfolio-item.module.css';

const PortfolioItem = ({ data }) => (
  <div className={styles.item}>
    <a
      href={data.fields.url}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={data.fields.image.fields.file.url} alt="placeholder" />
      <div>
        <div>
          <h4>{data.fields.title}</h4>
          <p>{data.fields.tags}</p>
        </div>
      </div>
    </a>
  </div>
);

export default PortfolioItem;
