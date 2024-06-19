import Image from 'next/image';
import React from 'react';
import style from './styles.module.css';
import Monkeh from '@/public/monkeh_profile.png';
import InformalProfile from '@/public/informal_profile.jpg';

const HeroProfile = ({ isContentHovered }) => {
    return (
        <section className={style.heroProfileWrapper}>
            <div className={style.heroProfileParent}>
                <div className={style.heroProfileChild}>
                    <Image
                        src={InformalProfile}
                        alt="Dave"
                        // width={!isContentHovered ? 200 : 230}
                        // height={!isContentHovered ? 200 : 230}
                        width={200}
                        height={200}
                        style={{ transition: '.3s' }}
                    />
                </div>
                <div className={style.heroProfileBorder1}></div>
            </div>
            <div
                className={style.heroProfileBorder2}
                style={{
                    width: isContentHovered && '230px',
                    height: isContentHovered && '230px',
                    transition: '.3s',
                }}
            ></div>
        </section>
    );
};

export default HeroProfile;
