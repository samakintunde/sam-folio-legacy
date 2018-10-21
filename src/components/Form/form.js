import React from 'react';

import Input from '../Input/input';

import styles from './form.module.css';

const Form = () => (
  <form
    className={styles.form}
    name="contact"
    method="POST"
    action="/success"
    netlify-honeypot="bot-field"
    netlify
  >
    <div className={styles.hidden}>
      <label>
        Don’t fill this out if you're human: <Input name="bot-field" />
      </label>
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="First name">Name</label>
      <div>
        <Input
          type="text"
          name="First name"
          placeholder="First name"
          required="true"
        />
        <Input
          type="text"
          name="Last name"
          placeholder="Last name"
          required="true"
        />
      </div>
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        name="email"
        placeholder="user@domain.com"
        required="true"
      />
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="message">Message</label>
      <textarea
        className={styles.messageArea}
        rows="5"
        name="message"
        required
      />
    </div>
    <button className={styles.send} type="submit">
      Send
    </button>
  </form>
);

export default Form;
