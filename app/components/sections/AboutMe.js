import React from "react";
import HeroProfile from "../cards/HeroProfile";
import style from "./style.module.css";
import genericStyle from "@/public/styles.module.css";
import BasicButton from "../buttons/basicButton";

const Navbar = () => {
    return (
        <div className={style.sideBarWrapper}>
            <div className={style.sideBarBorder}>
                <div style={{ marginTop: "" }}>
                    <BasicButton
                        text={"journey"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={style.sideBarBtn}
                        textColor="black"
                    />
                    <BasicButton
                        text={"goals"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={style.sideBarBtn}
                        textColor="black"
                    />
                    <BasicButton
                        text={"inspiration"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={style.sideBarBtn}
                        textColor="black"
                    />
                    <BasicButton
                        text={"hobbies"}
                        margin={"5px 0"}
                        borderRadius={12}
                        className={style.sideBarBtn}
                        textColor="black"
                    />
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
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
                                <div>
                                    <div>right top</div>
                                    <div>right bottom</div>
                                </div>
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
