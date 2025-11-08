'use client';

import React, { useState } from 'react';
import { useSpring, useSprings, animated } from '@react-spring/web';
import style from './style.module.css';
import SectionIndicator from '../objects/SectionIndicator';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My portfolio with animations and personal design.',
    github: '#',
    tools: ['reactjs', 'css', 'react-spring', 'reduxtoolkit' ],
    img: '/projects/portfolio.png',
    live: '#',
  },
  {
    title: 'OmniChat App',
    description: 'A real-time communication app that supports live chat, email, text messaging, and even voice calls',
    github: 'https://github.com/lancers2020/omni-channel-comm-app.git',
    tools: ['reactjs', 'css', 'twilio', 'socket.io', 'nodemailer'],
    img: '/projects/omni-frontend.png',
    live: '#',
  },
  {
    title: 'OmniChat App Backend',
    description: 'Backend for OmniChat built with Node.js, Twilio, and Nodemailer.',
    github: 'https://github.com/lancers2020/omni-channel-comm-app-backend.git',
    tools: ['nodejs', 'googleapis', 'multer', 'nodemailer', 'twilio'],
    img: '/projects/omni-backend.png',
    live: '#',
  },
  {
    title: 'Redis-like App',
    description: 'A lightweight Redis clone written in JavaScript with pub/sub support.',
    github: 'https://github.com/lancers2020/redis-like-app.git',
    tools: ['reactjs', 'css', 'nodejs'],
    img: '/projects/redis.png',
    live: '#',
  },
  {
    title: 'Student Portal',
    description: 'An interactive student dashboard for assignments and progress tracking.',
    github: 'https://github.com/lancers2020/student-portal-custom-redis.git',
    tools: ['reactjs', 'css', 'nodejs', 'redis-like-app', 'MUI material'],
    img: '/projects/student.png',
    live: '#',
  },
  {
    title: 'Todo App',
    description: 'A productivity app with persistence and task scheduling.',
    github: 'https://github.com/lancers2020/coding-challenge-dynamic-todo-dashboard.git',
    tools: ['reactjs', 'css', 'nodejs'],
    img: '/projects/todo.png',
    live: '#',
  },
  {
    title: 'Covid-19 Fallout',
    description: 'A fun and educational game built with React and Framer Motion.',
    github: 'https://github.com/lancers2020/covid-19-fallout.git',
    tools: ['reactjs', 'css', 'nodejs', 'framer-motion'],
    img: '/projects/covid19.png',
    live: '#',
  },
];

const BALL_COUNT = 5;
const CARD_WIDTH = 300;
const CARD_HEIGHT = 200;

const getRandomPosition = () => ({
  x: Math.random() * (CARD_WIDTH - 20) - CARD_WIDTH / 2 + 10,
  y: Math.random() * (CARD_HEIGHT - 20) - CARD_HEIGHT / 2 + 10,
});

const ProjectCard = ({ project, onDetailsClick }) => {
  const [hovered, setHovered] = useState(false);

  const [cardSpring, cardApi] = useSpring(() => ({
    rotate: 0,
    config: { tension: 200, friction: 12 },
  }));

  const [balls, ballApi] = useSprings(BALL_COUNT, () => ({
    ...getRandomPosition(),
    config: { mass: 1, tension: 120, friction: 10 },
  }));

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = (e) => {
    setHovered(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = (x - rect.width / 2) / rect.width;
    const dy = (y - rect.height / 2) / rect.height;

    const angle = dx * 40 + dy * 40;

    cardApi.start({ rotate: -angle, onRest: () => cardApi.start({ rotate: 0 }) });

    ballApi.start((i) => ({
      x: balls[i].x.get() + dx * 30 + (Math.random() - 0.5) * 10,
      y: balls[i].y.get() + dy * 30 + (Math.random() - 0.5) * 10,
    }));

    setTimeout(() => {
      ballApi.start((i) => ({ ...getRandomPosition() }));
    }, 200);
  };

  return (
    <animated.div
      className={style.card}
      style={{
        transform: cardSpring.rotate.to((r) => `rotate(${r}deg)`),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        position: 'relative',
        // overflow: 'hidden',
        borderRadius: '12px',
        backgroundColor: hovered ? '#59AC77' : '#051725',
        color: '#fff',
        cursor: 'pointer',
        transformOrigin: '50% 0%',
        // zIndex: 2000
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >      
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          right: '0',
          fontSize: '0.7rem',
          // opacity: 0.5,
          backgroundColor: '#59AC77',
          width: '90px',
          height: '20px',
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          zIndex: hovered ? 2 : 1
        }}
      >
        uwu
      </div>

      <div
        style={{
          // opacity: hovered ? 0 : 1,
          transition: 'opacity 0.5s ease',
          position: 'absolute',
          // zIndex: 2,
          
          
          zIndex: hovered ? 1 : 3,
        }}
      >
        {!hovered &&
        balls.map((spring, i) => (
          <animated.div
            key={i}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#FAD59A',
              transform: spring.x.to(
                (x) => `translate3d(${x}px, ${spring.y.get()}px, 0)`
              ),
              zIndex: 10,
            }}
          />
        ))}
        <div style={{clipPath: 'polygon(100% 94%, 70% 100%, 0 100%, 0 0, 100% 0)', borderRadius: '12px', backgroundColor: '#051725', width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px`, marginLeft: '8px', fontSize: '1.2rem', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{project.title}</div>
      </div>

      <img
        src={project.img}
        alt={project.title}
        style={{
          // opacity: hovered ? 1 : 0,
          // transition: 'opacity 0.5s ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: hovered ? 3 : 2,
          borderRadius: '12px',
        }}
      />

      {hovered && (
        <div
          className={style.projectCardDetailsWing}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '4%',
            display: 'flex',
            gap: '10px',
            zIndex: 3,
          }}
        >
          <a href={project.github} target='_blank' className={style.linkButton}>
            <span>
              <img src="/icons/github2.png" alt="github icon" width="20px" />
              <div>github</div>
            </span>
          </a>
          <a href={project.live} target='_blank' className={style.linkButton}>
            <span>
              <img src="/icons/website_white.png" alt="website icon" width="20px" />
              <div>live</div>
            </span>
          </a>
          <div
            onClick={() => onDetailsClick(project)}
            className={style.linkButton}
            style={{ cursor: 'pointer' }}
          >
            <span>
              <img src="/icons/search-file.png" alt="details icon" width="20px" />
              <div>details</div>
            </span>
          </div>
        </div>
      )}
    </animated.div>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const closeModal = () => setActiveProject(null);

  return (
    <section className={style.pageWrapper}>
      <div
        className={style.cardGrid}
        style={{
          filter: activeProject ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease'
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            onDetailsClick={(proj) => setActiveProject(proj)}
          />
        ))}
      </div>

      {activeProject && (
        <div
          className={style.modalOverlay}
          onClick={closeModal}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
            style={{
              background: '#0b2436',
              borderRadius: '10px',
              padding: '20px',
              color: '#fff',
              width: '400px',
              maxWidth: '90%',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)',
              position: 'relative',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
            <h2 style={{ marginBottom: '10px' }}>{activeProject.title}</h2>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
              {activeProject.description}
            </p>
            <h4 style={{ marginTop: '15px', marginBottom: '8px' }}>Tools Used:</h4>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {activeProject.tools.map((tool, i) => (
                <li
                  key={i}
                  style={{
                    background: '#051725',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    // border: '2px solid white'
                  }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <SectionIndicator
        src={'/sections/projects.png'}
        styles={{
          position: 'absolute',
          top: '-10px',
          left: '0',
          width: '50px',
          height: '50px',
          scale: '4.5',
        }}
      />
    </section>
  );
};

export default Projects;
