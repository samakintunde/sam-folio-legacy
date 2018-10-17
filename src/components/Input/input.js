import React from 'react';

import styles from './input.module.css';

const Input = props => (
  <input
    className={styles.input}
    type={props.type}
    name={props.name}
    placeholder={props.placeholder}
    {...props.required}
  />
);

export default Input;
