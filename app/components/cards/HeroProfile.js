import Image from "next/image";
import React from "react";
import style from "./styles.module.css";
import Monkeh from "@/public/monkeh_profile.png";
import InformalProfile from "@/public/informal_profile.jpg";

const HeroProfile = ({isContentHovered}) => {
    return (
        <section className={style.heroProfileWrapper}>
            <div className={style.heroProfileParent}>
                <div className={style.heroProfileChild}>
                    <Image
                        src={InformalProfile}
                        alt="Dave"
                        width={200}
                        height={200}
                    />
                </div>
                <div className={style.heroProfileBorder1}></div>
            </div>
            <div className={style.heroProfileBorder2} style={{borderColor: isContentHovered ? 'white' : ''}}></div>
        </section>
    );
};

export default HeroProfile;
