import React from 'react';

import PortfolioItem from './portfolio-item';

import styles from './portfolio.module.css';

const Portfolio = ({ data }) => (
  <div>
    <h2 className="section-heading">Portfolio</h2>
    <div className={styles.grid}>
      {data.map(project => (
        <PortfolioItem data={project.node} key={project.node.id} />
      ))}
    </div>
  </div>
);

export default Portfolio;
