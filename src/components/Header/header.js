import React from 'react';
import { Link } from 'gatsby';
import { faBars } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button/button';

import styles from './header.module.css';

const Header = props => {
  let hamburger = () => <FontAwesomeIcon icon={faBars} />;
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>{props.siteTitle}</h1>

      <nav className={styles.nav}>
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
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="./contact" className={styles.links}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* <nav className={styles.mobileNav}>
        <ul className={styles.mobileUl}>
          <li className={styles.mobileLi}>
            <Link to="/" className={styles.mobileLinks}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="./about" className={styles.mobileLinks}>
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="./stories" className={styles.mobileLinks}>
              Stories
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="./contact" className={styles.mobileLinks}>
              Contact
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
