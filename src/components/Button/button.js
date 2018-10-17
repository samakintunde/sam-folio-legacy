import React from 'react';
import { Link } from 'gatsby';

import styles from './button.module.css';

const Button = props => (
  <div>
    <Link to={props.location}>
      <button type={props.type} className={styles.button}>
        {props.text}
      </button>
    </Link>
  </div>
);

export default Button;
