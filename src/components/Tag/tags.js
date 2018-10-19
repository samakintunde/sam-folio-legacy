import React from 'react';

import styles from './tags.module.css';

const Tags = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <p className={styles.tag}>{tag}</p>
    ))}
  </div>
);

export default Tags;
