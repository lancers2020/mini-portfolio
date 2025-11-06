'use client';

import { useState } from 'react';
import SectionIndicator from '../objects/SectionIndicator';

// Import icons
import { FaReact, FaAws, FaCogs, FaGithub, FaLinux, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiN8n, SiZapier, SiMake, SiMysql } from 'react-icons/si';
import { AiOutlineCloud, AiOutlineSearch } from 'react-icons/ai';

import styles from './style.module.css';


const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend Development',
      items: [
        { name: 'React.js', icon: <FaReact width={200} height={100} /> },
        { name: 'Next.js', icon: <SiNextdotjs width={200} height={100} /> },
        { name: 'JavaScript', icon: <SiJavascript width={200} height={100} /> },
        { name: 'Vanilla CSS', icon: <FaCss3Alt width={200} height={100} /> },
        { name: 'MySQL', icon: <SiMysql width={200} height={100} /> },
        { name: 'GitHub', icon: <FaGithub width={200} height={100} /> },
        { name: 'n8n', icon: <FaCogs width={200} height={100} /> },
        { name: 'AWS Lambda', icon: <FaAws width={200} height={100} /> },
        { name: 'AWS S3 Bucket', icon: <AiOutlineCloud width={200} height={100} /> },
        { name: 'AWS CloudWatch', icon: <AiOutlineCloud width={200} height={100} /> },
        { name: 'AWS Bedrock Agents', icon: <FaAws width={200} height={100} /> },
      ],
    },
    ai: {
      title: 'AI Automation',
      items: [
        { name: 'Zapier', icon: <SiZapier width={200} height={100} /> },
        { name: 'Make (Integromat)', icon: <SiMake width={200} height={100} /> },
        { name: 'n8n', icon: <FaCogs width={200} height={100} /> },
        { name: 'AWS Bedrock Agents', icon: <FaAws width={200} height={100} /> },
        { name: 'AWS Lambda Function', icon: <FaAws width={200} height={100} /> },
      ],
    },
    tools: {
      title: 'Other Tools',
      items: [
        { name: 'Linux', icon: <FaLinux width={200} height={100} /> },
        { name: 'Research and Development', icon: <AiOutlineSearch width={200} height={100} /> },
      ],
    },
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI Automation' },
    { id: 'tools', label: 'Other Tools' },
  ];

  const containerStyle = {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#255075',
    fontFamily: 'sans-serif',
    position: 'relative',
    color: '#fff',
    transition: 'background-color 0.5s ease',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'white'
  };

  const descriptionStyle = {
    color: '#cdd9e8',
    marginBottom: '40px',
  };

  const tabsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  };

  const buttonStyle = (isActive) => ({
    padding: '10px 22px',
    borderRadius: '25px',
    border: '1px solid #fff',
    backgroundColor: isActive ? '#113555' : 'transparent',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? '0 0 12px #113555' : 'none',
    position: 'relative',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '20px',
    maxWidth: '850px',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: '#113555',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #1b3e63',
    fontWeight: '500',
    fontSize: '0.95rem',
    color: '#e2eaf5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
    cursor: 'default',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.35)',
    borderColor: 'white',
  };

  const iconStyle = {
    fontSize: '1.3rem',
    color: '#4fc3f7',
  };

  return (
    <section className={styles.pageWrapper}>
      <h2
        style={{
          ...headingStyle,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          color: 'white',
          fontSize: '2.5rem',
          textShadow: `
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff,
            0 0 80px #0ff
          `,
          animation: 'flicker 3s infinite',
          fontFamily: 'monospace',
          letterSpacing: '2px',
        }}
      >
        <style>
          {`
            @keyframes flicker {
              0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                opacity: 1;
                text-shadow:
                  0 0 5px #0ff,
                  0 0 10px #0ff,
                  0 0 20px #0ff,
                  0 0 40px #0ff,
                  0 0 80px #0ff;
              }
              20%, 24%, 55% {
                opacity: 0.3;
                text-shadow: none;
              }
            }
          `}
        </style>
        <img
          src="/icons/circuit.gif"
          width={40}
          height={40}
          style={{ borderRadius: '50%', boxShadow: '0 0 15px #0ff' }}
        />
        Tech Stack
      </h2>

      <p style={{...descriptionStyle, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        Explore my tools and technologies by category
      </p>

      {/* Tabs */}
      <div style={tabsContainerStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={buttonStyle(activeTab === tab.id)}
          >
            {tab.label}
            <img
              src="/icons/marker.png"
              alt="marker"
              style={{
                position: 'absolute',
                bottom: '-63px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '100px',
                clipPath: activeTab === tab.id 
                  ? 'inset(0 0 0 0)'   // fully visible
                  : 'inset(0 100% 0 0)', // fully hidden (from left)
                transition: 'clip-path .2s ease-in-out',
              }}
            />
          </button>
        ))}
      </div>

      {/* Skills List */}
      {/* <h3
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '25px',
          color: '#eaf3ff',
        }}
      >
        {categories[activeTab].title}
      </h3> */}

      <div style={gridStyle}>
        {categories[activeTab].items.map((skill) => (
          <div
            key={skill.name}
            style={cardStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, cardHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, cardStyle)
            }
          >
            <span style={iconStyle}>{skill.icon}</span>
            {skill.name}
          </div>
        ))}
      </div>

      {/* Section Indicator */}
      <div>
        <SectionIndicator
          src={'/sections/skills.png'}
          styles={{
            position: 'absolute',
            top: '-25px',
            left: '0',
            width: '50px',
            height: '50px',
            scale: '4.5',
            zIndex: 1000,
          }}
        />
      </div>
    </section>
  );
}

export default Skills;
