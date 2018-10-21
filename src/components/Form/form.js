import React from 'react';

import styles from './form.module.css';

const Form = () => (
  <form
    className={styles.form}
    name="contact"
    method="POST"
    action="/success"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <div className={styles.hidden}>
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="First name">Name</label>
      <div>
        <input
          className={styles.input}
          type="text"
          name="First name"
          placeholder="First name"
          required
        />
        <input
          className={styles.input}
          type="text"
          name="Last name"
          placeholder="Last name"
          required
        />
      </div>
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="email">Email</label>
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="user@domain.com"
        required
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
