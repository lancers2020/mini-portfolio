import Image from "next/image";
import React from "react";
import style from "./styles.module.css";
import Monkeh from "@/public/monkeh_profile.png";

const HeroProfile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.parent}>
                <div className={style.child}>
                    <Image src={Monkeh} alt="Dave" width={200} height={200} />
                </div>
                <div className={style.border1}></div>
            </div>
            <div className={style.border2}></div>
        </div>
    );
};

export default HeroProfile;
