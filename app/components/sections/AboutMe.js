import React, { useState } from "react";
import HeroProfile from "../cards/HeroProfile";
import style from "./style.module.css";
import BasicButton from "../buttons/basicButton";
import aboutMeData from "@/public/data/aboutMe.json";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../buttons/paginationButton";

const Navbar = () => {
    const dispatch = useDispatch();

    const selectSidebar = (data) => {
        dispatch({ type: "HOME_SIDEBAR", payload: data });
        dispatch({ type: "CONTENT_PAGE", payload: 0 });
    };

    const currentSidebar = useSelector(
        (state) => state.homeReducer.activeSidebar
    );

    const renderSidebarButton = (sidebar) => {
        return (
            <BasicButton
                key={sidebar}
                text={sidebar}
                margin={"5px 0"}
                borderRadius={12}
                className={`${style.sideBarBtn} ${
                    currentSidebar === sidebar
                        ? style.sideBarBtnHighSelected
                        : ""
                }`}
                textColor="black"
                onClick={() => selectSidebar(sidebar)}
                highlighted={currentSidebar === sidebar}
            />
        );
    };

    return (
        <div className={style.sideBarWrapper}>
            <div className={style.sideBarBorder}>
                <div style={{ marginTop: "" }}>
                    {Object.keys(aboutMeData).map(renderSidebarButton)}
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
    const [isContentHovered, setIsContentHovered] = useState(false);
    const { activeSidebar: currentSidebar, activePage: currentPage } =
        useSelector((state) => state.homeReducer);

    const currentSidebarContent = aboutMeData[currentSidebar][currentPage];
    const pageCount = aboutMeData[currentSidebar].length;

    const renderDots = () => {
        return (
            <section>
                <ul>
                    {aboutMeData[currentSidebar].map((_, i) => (
                        <li
                            key={i}
                            style={{
                                backgroundColor:
                                    currentPage === i ? "black" : "",
                            }}
                            className={style.dots}
                        />
                    ))}
                </ul>
            </section>
        );
    };

    const contentHoveredBg = {
        backgroundColor: isContentHovered ? '#051725' : ''
    }

    return (
        <section style={{...contentHoveredBg}} className={style.parentWrapper} onMouseOver={()=>setIsContentHovered(true)} onMouseOut={()=>setIsContentHovered(false)}>
            <div className={style.wrapper}>
                <div style={{...contentHoveredBg}}>
                    <div style={{...contentHoveredBg}} className={style.avatarWrapper}>
                        <span>
                            <HeroProfile isContentHovered={isContentHovered} />
                        </span>
                    </div>
                    <div style={{...contentHoveredBg}} className={style.bgLeft}>
                        <div className={style.sideBar}>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div style={{...contentHoveredBg}} className={style.bgRight}>
                    <div className={style.rightWrapper}>
                        <div className={style.rightContentContainer}>
                            <span>
                                <div>{currentSidebarContent}</div>
                                <div className={style.scotchTapeTopLeft} />
                                <div className={style.scotchTapeTopRight} />
                                <div className={style.scotchTapeBottomLeft} />
                                <div className={style.scotchTapeBottomRight} />
                                <div>{renderDots()}</div>
                                <div>
                                    <Pagination
                                        currentPage={currentPage}
                                        pageCount={pageCount}
                                        type={"CONTENT_PAGE"}
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
