import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const Header = props => (
  <header className={styles.header}>
    <h1 className={styles.brand}>{props.siteTitle}</h1>

    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/" className={styles.links}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="./about" className={styles.links}>
            About
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="./stories" className={styles.links}>
            Stories
            <i className="fas fa-external-link-alt" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="./contact" className={styles.links}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
