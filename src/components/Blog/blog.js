import React from 'react';

import BlogItem from './blog-item';

import styles from './blog.module.css';

const Blog = ({ data }) => (
  <div className={styles.grid}>
    {data.map(post => (
      <BlogItem data={post.node} key={post.node.id} />
    ))}
  </div>
);

export default Blog;
