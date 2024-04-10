import React from "react";
import HeroProfile from "../cards/HeroProfile";
import style from "./style.module.css";
import genericStyle from "@/public/styles.module.css";
import BasicButton from "../buttons/basicButton";
import aboutMeData from "@/public/data/aboutMe.json";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();

    const selectSidebar = (data) => {
        dispatch({ type: "HOME_SIDEBAR", payload: data });
    };
    const currentSidebar = useSelector(
        (state) => state.homeReducer.activeSidebar
    );
    return (
        <div className={style.sideBarWrapper}>
            <div className={style.sideBarBorder}>
                <div style={{ marginTop: "" }}>
                    <BasicButton
                        text={"journey"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={`${style.sideBarBtn} ${
                            currentSidebar == "journey"
                                ? style.sideBarBtnHighSelected
                                : ""
                        }`}
                        textColor="black"
                        onClick={() => selectSidebar("journey")}
                        highlighted={currentSidebar == "journey"}
                    />
                    <BasicButton
                        text={"goals"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={`${style.sideBarBtn} ${
                            currentSidebar == "goals"
                                ? style.sideBarBtnHighSelected
                                : ""
                        }`}
                        textColor="black"
                        onClick={() => selectSidebar("goals")}
                        highlighted={currentSidebar == "goals"}
                    />
                    <BasicButton
                        text={"inspiration"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={`${style.sideBarBtn} ${
                            currentSidebar == "inspiration"
                                ? style.sideBarBtnHighSelected
                                : ""
                        }`}
                        textColor="black"
                        onClick={() => selectSidebar("inspiration")}
                        highlighted={currentSidebar == "inspiration"}
                    />
                    <BasicButton
                        text={"hobbies"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={`${style.sideBarBtn} ${
                            currentSidebar == "hobbies"
                                ? style.sideBarBtnHighSelected
                                : ""
                        }`}
                        textColor="black"
                        onClick={() => selectSidebar("hobbies")}
                        highlighted={currentSidebar == "hobbies"}
                    />
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
    const dataObjKeys = Object.keys(aboutMeData);
    const dataObjArray = dataObjKeys.map((v) => ({
        [v]: aboutMeData[v],
    }));
    const currentSidebar = useSelector(
        (state) => state.homeReducer.activeSidebar
    );
    return (
        <section className={style.parentWrapper}>
            <div className={style.wrapper}>
                <div>
                    <div className={style.avatarWrapper}>
                        <span>
                            <HeroProfile />
                        </span>
                    </div>
                    <div className={style.bgLeft}>
                        <div className={style.sideBar}>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div className={style.bgRight}>
                    <div className={style.rightWrapper}>
                        <div className={style.rightContentContainer}>
                            <span>
                                <div>{aboutMeData[currentSidebar]}</div>
                                <div className={style.scotchTapeTopLeft}></div>
                                <div className={style.scotchTapeTopRight}></div>
                                <div
                                    className={style.scotchTapeBottomLeft}
                                ></div>
                                <div
                                    className={style.scotchTapeBottomRight}
                                ></div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
