'use client';

import React, { useEffect, useState } from 'react';
import HeroProfile from '../cards/HeroProfile';
import style from './style.module.css';
import BasicButton from '../buttons/basicButton';
import aboutMeData from '@/public/data/aboutMe2.json';
import { useDispatch, useSelector } from 'react-redux';
import { homeSidebar, contentPage } from '@/store/actions/homeActions';
import Pagination from '../buttons/paginationButton';
import ScrollIndicator from '../objects/ScrollIndicator';
import ArrowDown from '../objects/ArrowDown';

const Navbar = ({ setModal, width }) => {
    const dispatch = useDispatch();

    const selectSidebar = (data) => {
        dispatch(homeSidebar(data));
        dispatch(contentPage(0));
    };

    const currentSidebar = useSelector((state) => state.home.activeSidebar);

    const renderSidebarButton = (sidebar) => {
        return (
            <BasicButton
                key={sidebar}
                text={sidebar}
                margin={'5px 0'}
                borderRadius={12}
                className={`${style.abSideBarBtn} ${
                    width > 630 &&
                    (currentSidebar === sidebar
                        ? style.abSideBarBtnHighSelected
                        : '')
                }`}
                textColor="black"
                onClick={() => {
                    selectSidebar(sidebar);
                    if (width <= 630) setModal(true);
                }}
                highlighted={currentSidebar === sidebar}
            />
        );
    };

    return (
        <div className={style.abSideBarWrapper}>
            <div className={style.abSideBarBorder}>
                <div style={{ marginTop: '' }}>
                    {Object.keys(aboutMeData).map(renderSidebarButton)}
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
    const [isContentHovered, setIsContentHovered] = useState(false);
    const [width, setWidth] = useState(0);
    const [modal, setModal] = useState(false);
    const { activeSidebar: currentSidebar, activePage: currentPage } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    const currentSidebarContent = aboutMeData[currentSidebar][currentPage];
    const pageCount = aboutMeData[currentSidebar].length;

    const RenderDots = () => {
        return (
            <section>
                <ul>
                    {aboutMeData[currentSidebar].map((_, i) => (
                        <li
                            key={i}
                            style={{
                                backgroundColor:
                                    currentPage === i ? 'black' : '',
                            }}
                            className={style.abDots}
                            onClick={() => {
                                if (currentPage == i) return;
                                dispatch(contentPage(i));
                            }}
                        />
                    ))}
                </ul>
            </section>
        );
    };

    const Content = () => {
        return (
            <div id="abBgRight" className={style.abBgRight}>
                <div className={style.abRightWrapper}>
                    <div className={style.abRightContentContainer}>
                        <span>
                            <div>{currentSidebarContent}</div>
                            <div className={style.abScotchTapeTopLeft} />
                            <div className={style.abScotchTapeTopRight} />
                            <div className={style.abScotchTapeBottomLeft} />
                            <div className={style.abScotchTapeBottomRight} />
                            <div>
                                <RenderDots />
                            </div>
                            <div>
                                <Pagination
                                    currentPage={currentPage}
                                    pageCount={pageCount}
                                    type={'CONTENT_PAGE'}
                                />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const contentHoveredBg = {
        backgroundColor: isContentHovered ? '#051725' : '',
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        const handleClickOutside = (event) => {
            const abBgRight = document.getElementById('abBgRight');
            if (abBgRight && !abBgRight.contains(event.target)) {
                setModal(false);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // ✨ Smooth delayed scroll effect
    useEffect(() => {
        let targetScrollY = window.scrollY;
        let currentScrollY = window.scrollY;
        let ticking = false;

        const lerp = (start, end, factor) => start + (end - start) * factor;

        const updateScroll = () => {
            currentScrollY = lerp(currentScrollY, targetScrollY, 0.08); // adjust smoothness
            window.scrollTo(0, currentScrollY);

            if (Math.abs(targetScrollY - currentScrollY) > 0.5) {
                requestAnimationFrame(updateScroll);
            } else {
                ticking = false;
            }
        };

        const handleWheel = (e) => {
            e.preventDefault();
            targetScrollY += e.deltaY;
            targetScrollY = Math.max(
                0,
                Math.min(
                    targetScrollY,
                    document.body.scrollHeight - window.innerHeight
                )
            );

            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateScroll);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <section
            style={{ ...contentHoveredBg }}
            className={style.abParentWrapper}
            onMouseOver={() => setIsContentHovered(true)}
            onMouseOut={() => setIsContentHovered(false)}
        >
            <div className={style.abWrapper}>
                <div>
                    <div
                        style={{ ...contentHoveredBg }}
                        className={style.abAvatarWrapper}
                    >
                        <span>
                            <HeroProfile isContentHovered={isContentHovered} />
                        </span>
                    </div>
                    <div
                        style={{ ...contentHoveredBg }}
                        className={style.abBgLeft}
                    >
                        <div className={style.abSideBar}>
                            <Navbar setModal={setModal} width={width} />
                        </div>
                    </div>
                </div>
                {modal && width <= 630 && <div className="overlay"></div>}
                {width <= 630 ? modal && <Content /> : <Content />}
                <div className={`${style.scrollDownParent}`}>
                    <ScrollIndicator styles={{ top: 0, right: '-150px' }} />
                </div>
                <div>
                    <ArrowDown src={'/arrow.png'} styles={{
                        position: 'absolute', 
                        bottom: '-225px', 
                        left: '47%', 
                        transform: 'translateX(-55%)', 
                        width: '50px', 
                        height: '50px',
                        transform: 'scale(2)',
                        zIndex: 1000
                    }} />
                </div>
                <div>
                    <ArrowDown src={'/arrow_dark.png'} styles={{
                        position: 'absolute', 
                        bottom: '-230px', 
                        left: '48%', 
                        transform: 'translateX(-55%)', 
                        width: '50px', 
                        height: '50px',
                        transform: 'scale(2)'
                    }} />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
