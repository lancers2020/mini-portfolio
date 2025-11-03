'use client';

import React, { useState } from 'react';
import style from './style.module.css';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // dummy login
    setLoggedIn(true);
    setTimeout(() => setLoggedIn(false), 2000);
  };

  return (
    <section className={style.pageWrapper}>
      <h2 className={style.pageTitle}>Login (Demo)</h2>
      <form className={style.contactForm} onSubmit={handleLogin}>
        <input required placeholder="Email" type="email" />
        <input required placeholder="Password" type="password" />
        <button type="submit" className={style.linkButton}>
          {loggedIn ? 'Welcome!' : 'Sign In'}
        </button>
      </form>
    </section>
  );
};

export default Login;
