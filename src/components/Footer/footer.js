import React from 'react';

import {
  faGithub,
  faBehance,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import netlifyLogo from '../../images/netlify.svg';
import contentfulLogo from '../../images/contentful.svg';
import styles from './footer.module.css';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          aria-label="Github"
          className={styles.socialLinks}
          href="https://github.com/samakintunde37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faGithub} />
        </a>
        <a
          aria-label="Behance"
          className={styles.socialLinks}
          href="https://behance.net/samakintund8a6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faBehance} />
        </a>
        <a
          aria-label="Twitter"
          className={styles.socialLinks}
          href="https://twitter.com/samakintunde37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faTwitter} />
        </a>
        <a
          aria-label="Instagram"
          className={styles.socialLinks}
          href="https://instagram.com/samakintunde37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faInstagram} />
        </a>
      </div>

      <div className={styles.rights}>
        <p>&copy;2018 SAMAKINTUNDE</p>
      </div>
      <div className={styles.attribution}>
        <a
          className={styles.linkMargin}
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            className={styles.image}
            src={contentfulLogo}
            alt="Powered by Contentful"
          />
        </a>
        <a
          className={styles.linkMargin}
          href="https://www.netlify.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img src={netlifyLogo} alt="Hosted on Netlify" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
