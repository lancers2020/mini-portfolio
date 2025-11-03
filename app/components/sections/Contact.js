'use client';

import React, { useState } from 'react';
import style from './style.module.css';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dummy submit
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className={style.pageWrapper}>
      <h2 className={style.pageTitle}>Contact</h2>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <input required placeholder="Your name" />
        <input required placeholder="Your email" type="email" />
        <textarea required placeholder="Message" rows={5} />
        <button type="submit" className={style.linkButton}>
          {sent ? 'Sent ✓' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
