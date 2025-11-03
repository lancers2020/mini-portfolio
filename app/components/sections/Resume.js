"use client";

import React from 'react';
import style from './style.module.css';
import BasicButton from '../buttons/basicButton';

const Resume = () => {
    const handleDownload = () => {
        // Using the absolute path to the PDF in the public folder
        const pdfUrl = '/resume.pdf';
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Dave_Resume.pdf'; // Name that will appear when downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={style.resumeContainer}>
            <h1 className={style.resumeTitle}>My Resume</h1>
            <p className={style.resumeDescription}>
                Feel free to download my resume to learn more about my professional experience and skills.
            </p>
            <BasicButton
                text="Download Resume"
                onClick={handleDownload}
                className={style.downloadButton}
                textColor="white"
            />
        </div>
    );
};

export default Resume;