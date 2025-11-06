'use client';

import React, { useState } from 'react';
import style from './style.module.css';
import SectionIndicator from '../objects/SectionIndicator';
import { useSpring, useSprings, animated } from '@react-spring/web';

const certificates = [
  {
    title: 'AWS re/Start Graduate',
    description: 'Earners of this badge have completed the AWS re/Start program. AWS re/Start is a skills development and job training program that prepares learners for careers in the cloud. Each cohort, supported by professional mentors and accredited trainers, completes training featuring real-world scenario-based learning, hands-on labs, and coursework.',
    link: 'https://www.credly.com/badges/bef9e213-a6ec-4f48-8e01-97d0962d2298/public_url',
    img: '/certificates/aws.png',
  },
  {
    title: 'Make Foundation',
    description: 'The earner of this badge has completed all courses within Make Foundation and created their first automation, demonstrating proficiency in the basics of automation on a no-code platform. A passing grade has been achieved in the Make Foundation assessment.',
    link: 'https://www.credly.com/badges/dc05a697-b93b-48fb-802f-fd3dfa12a5c3/public_url',
    img: '/certificates/make_foundation.jpg',
  },
  {
    title: 'Make Basics',
    description: 'The earner of this badge has completed all courses within Make Basics and expanded their knowledge of several automation themes, such as data types/structures, functions, and aggregation. A passing grade has been achieved in the Make Basics assessment.',
    link: 'https://www.credly.com/badges/66fc0975-eb66-4fd7-aa4f-799bc14e92ad/public_url',
    img: '/certificates/make_basics.jpg',
  },
  {
    title: 'Make Intermediate',
    description: 'The earner of this badge has completed all courses within Make Intermediate and expanded their knowledge of several automation themes, iterators and array aggregators, webhooks, HTTP, and error handling. A passing grade has been achieved in the Make Intermediate assessment.',
    link: 'https://www.credly.com/badges/4b46a91a-d4b6-4cd9-8475-390e61019d88/public_url',
    img: '/certificates/make_intermediate.jpg',
  },
  {
    title: 'One Code Camp Academy - Frontend Essentials Bootcamp',
    description: 'The One Code Camp Academy Frontend Essentials Bootcamp certification demonstrates that the holder has completed a comprehensive training program focused on frontend web development. This certification validates skills in HTML, CSS, JavaScript, and responsive design, equipping graduates to build engaging and user-friendly web interfaces.',
    link: 'https://drive.google.com/file/d/1qyuqYSKBgJbu5aty6Xs15552-lPuHbKv/view?usp=sharing',
    img: '/certificates/onecodecamp.png',
  },
  {
    title: 'Learning Next.js',
    description: 'This certificate verifies that the holder has successfully completed the "Learning Next.js" course from LinkedIn, demonstrating proficiency in building server-rendered React applications using the Next.js framework. The course covers essential concepts such as routing, data fetching, and performance optimization.',
    link: 'https://drive.google.com/file/d/1BRA433MMysXLwn2sHsFr6hticB6fcfwk/view?usp=sharing',
    img: '/certificates/nextjs.JPG',
  },
    {
    title: 'Kodego Full-Stack Developer Graduate',
    description: 'This Kodego Full-Stack Developer has earned certification after successfully completing a 16-week intensive bootcamp. This training has ensured mastery across both front-end and back-end development, enabling the graduate to build and manage entire web application projects.',
    link: 'https://drive.google.com/file/d/1h4fEbVCTVqsfcVJQx8kQOoakXb83McA9/view?usp=sharing',
    img: '/certificates/kodego.png',
  },
];

const CARD_WIDTH = 300;
const CARD_HEIGHT = 200;

const CertificateCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const [cardSpring, cardApi] = useSpring(() => ({
    rotate: 0,
    config: { tension: 200, friction: 12 },
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
        backgroundColor: '#051725',
        color: '#fff',
        cursor: 'pointer',
        transformOrigin: '50% 0%',
        zIndex: 2000,
        textAlign: 'center',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div style={{position: 'absolute', top: 80, left: '34%', zIndex: 3, scale: 3, filter: 'invert(1)'}}> */}
      <div style={{position: 'absolute', top: 80, left: '34%', zIndex: 3, scale: 3, opacity: hovered ? 0 : 1,}}>
        <img src={'/envelopeLine.png'} alt='envelope' width={100} height={100} />
      </div>
      {/* Title Text - WOBBLE APPLIED HERE */}
      <div
        style={{
          opacity: hovered ? 0 : 1,
          // Added transform to the transition for the wobble effect
          transition: 'opacity 0.5s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          position: 'absolute',
          zIndex: 2,
          fontSize: '1.2rem',
          fontWeight: '600',
          padding: '0 10px',
          // Apply the calculated wobble transform
          // ...exitTransform, 
        }}
      >
        {project.title}
      </div>

      {/* Image (fades in when hovered) */}
      <img
        src={project.img}
        alt={project.title}
        style={{
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          width: '80%',
          height: '80%',
          // objectFit: 'cover',
          marginLeft: '3%',
          zIndex: 1,
        }}
      />

      <img src='/frame.png' alt='card frame' style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 4, pointerEvents: 'none', opacity: hovered ? 1 : 0}} />
    </animated.div>
  );
};

const Certificates = () => {
  return (
    <section className={style.pageWrapper}>
      <div className={style.cardGrid}>
        {certificates.map((p, i) => (
          <CertificateCard key={i} project={p} />
        ))}
      </div>
      <SectionIndicator
        src={'/sections/certificates.png'}
        styles={{
          position: 'absolute',
          top: '-10px',
          left: '0',
          width: '50px',
          height: '50px',
          scale: '4.5',
          // zIndex: 1000,
        }}
      />
    </section>
  );
};

export default Certificates;