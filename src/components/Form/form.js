import React from 'react';

import Button from '../Button/button';
import Input from '../Input/input';

import styles from './form.module.css';

const Form = () => (
  <form
    className={styles.form}
    name="contact"
    method="post"
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
          required="required"
        />
        <Input
          type="text"
          name="Last name"
          placeholder="Last name"
          required="required"
        />
      </div>
    </div>
    <div className={styles.fieldSection}>
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        name="email"
        placeholder="user@domain.com"
        required="required"
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
    <Button type="submit" location="success" text="Send" />
  </form>
);

export default Form;
