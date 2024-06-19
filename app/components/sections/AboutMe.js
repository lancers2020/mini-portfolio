'use client';

import React, { useEffect, useState } from 'react';
import HeroProfile from '../cards/HeroProfile';
import style from './style.module.css';
import BasicButton from '../buttons/basicButton';
import aboutMeData from '@/public/data/aboutMe.json';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../buttons/paginationButton';

const Navbar = ({ setModal, width }) => {
    const dispatch = useDispatch();

    const selectSidebar = (data) => {
        dispatch({ type: 'HOME_SIDEBAR', payload: data });
        dispatch({ type: 'CONTENT_PAGE', payload: 0 });
    };

    const currentSidebar = useSelector(
        (state) => state.homeReducer.activeSidebar,
    );

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
    const { activeSidebar: currentSidebar, activePage: currentPage } =
        useSelector((state) => state.homeReducer);
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
                                dispatch({ type: 'CONTENT_PAGE', payload: i });
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
            </div>
        </section>
    );
};

export default AboutMe;
