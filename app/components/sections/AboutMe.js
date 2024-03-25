import React from "react";
import HeroProfile from "../cards/HeroProfile";
import style from "./style.module.css";

const AboutMe = () => {
    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.avatarWrapper}>
                    <span>
                        <HeroProfile />
                    </span>
                </div>
                <div className={style.bgLeft}>
                    <div className={style.sideBar}>left bottom</div>
                </div>
            </div>
            <div className={style.bgRight}>
                <div className={style.rightWrapper}>
                    <div>right top</div>
                    <div>right bottom</div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
