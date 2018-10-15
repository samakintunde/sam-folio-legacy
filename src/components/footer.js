import React from 'react';

import {
  faGithub,
  faBehance,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './footer.module.css';

// import '../ext/fontawesome.min.css';
// import '../ext/brands.min.css';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          className={styles.socialLinks}
          href="https://github.com/samakintunde37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faGithub} />
        </a>
        <a
          className={styles.socialLinks}
          href="https://behance.net/samakintund8a6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faBehance} />
        </a>
        <a
          className={styles.socialLinks}
          href="https://twitter.com/samakintunde37"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.socialIcons} icon={faTwitter} />
        </a>
        <a
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
    </footer>
  );
};

export default Footer;
