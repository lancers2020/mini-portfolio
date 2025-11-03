'use client';

import React from 'react';
import style from './style.module.css';

const sampleCerts = [
  { title: 'Frontend Mastery', issuer: 'Kodego', year: 2023 },
  { title: 'AWS Cloud Practitioner', issuer: 'AWS re/Start', year: 2024 },
  { title: 'React & Next.js', issuer: 'Online Bootcamp', year: 2022 },
];

const Certificates = () => {
  return (
    <section className={style.pageWrapper}>
      <h2 className={style.pageTitle}>Certificates</h2>
      <ul className={style.list}>
        {sampleCerts.map((c, i) => (
          <li key={i} className={style.listItem}>
            <strong>{c.title}</strong> — {c.issuer} <span>({c.year})</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;
