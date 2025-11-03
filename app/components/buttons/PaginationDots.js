"use client";

import React, { useEffect, useState } from 'react';
import style from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { navbarButtonActive } from '@/store/actions/navbarActions';

const PaginationDots = () => {
    // The order of these sections is crucial for the scroll logic
    const sections = ['aboutme', 'projects', 'certificates', 'contact', 'resume'];
    const [activeSection, setActiveSection] = useState('aboutme');
    // Note: The activeNavbarButton from Redux is currently unused in the PaginationDots logic,
    // but I left the line here since it was in your original code.
    const { activeNavbarButton } = useSelector((state) => state.navbar);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveSection(String(activeNavbarButton).toLowerCase());
    }, [activeNavbarButton]);

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position (distance from the top of the document)
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // This will hold the ID of the section we determine is currently active
            let newActiveSection = 'aboutme';

            // --- Robust Scroll Logic ---
            // Iterate backwards, checking the sections higher up first.
            // This is generally more reliable as sections higher on the page 
            // will have been scrolled past.
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top;
                    
                    // Logic 1: Check if the scroll position is at the very bottom of the page.
                    // This is essential for the last section ('resume').
                    if (i === sections.length - 1) {
                        // Check if the scroll is near the bottom of the document
                        const isAtPageBottom = (scrollY + windowHeight) >= document.body.offsetHeight - 5; // Use a small buffer (5px)
                        
                        // Activate the last dot if the section is visible AND 
                        // the user is at the bottom of the scrollable area.
                        if (elementTop <= windowHeight * 0.75 || isAtPageBottom) {
                             newActiveSection = section;
                             break; // Found the active section, stop checking
                        }
                        
                    } 
                    
                    // Logic 2: For all other sections (not the last one),
                    // activate when the top of the section crosses a trigger line 
                    // (e.g., one-third down the viewport)
                    if (elementTop <= windowHeight / 3) {
                        newActiveSection = section;
                        break; // Found the active section, stop checking
                    }
                }
            }
            // --- End Scroll Logic ---

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
                dispatch(navbarButtonActive(newActiveSection));
            }
        };

        // Add the scroll listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        // Cleanup function
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, sections]); // Depend on activeSection and sections array

    const handleDotClick = (section) => {
        const element = document.getElementById(section);
        if (element) {
            // Scroll to the element smoothly
            element.scrollIntoView({ behavior: 'smooth' });
            // Manually set the active section right away for instant feedback
            setActiveSection(section); 
            dispatch(navbarButtonActive(section));
        }
    };

    return (
        <div className={style.paginationContainer}>
            {sections.map((section) => (
                <div
                    key={section}
                    className={`${style.dot} ${activeSection === section ? style.activeDot : ''}`}
                    onClick={() => handleDotClick(section)}
                    // Title for accessibility/tooltip
                    title={section.charAt(0).toUpperCase() + section.slice(1)}
                />
            ))}
        </div>
    );
};

export default PaginationDots;