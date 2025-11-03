'use client';

import React from 'react';
import style from './style.module.css';

const sampleProjects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive Next.js portfolio with animations and TailwindCSS.',
    link: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'Product listing, cart flow and checkout UI prototypes.',
    link: '#',
  },
  {
    title: 'Chat App (Demo)',
    description: 'A small realtime chat UI built with web sockets (mocked).',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className={style.pageWrapper}>
      <h2 className={style.pageTitle}>Projects</h2>
      <div className={style.cardGrid}>
        {sampleProjects.map((p, i) => (
          <article key={i} className={style.card}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} className={style.linkButton}>
              View
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
