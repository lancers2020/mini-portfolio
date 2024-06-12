import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import BasicButton from "../buttons/basicButton";
import { useSelector } from "react-redux";
import SideBarDocker from "../cards/SideBarDocker";
import Bar from '@/public/icons/bar.png';
import Image from "next/image";

const NavBarButtons = ({ text, isHovered, currentNavbarButton}) => {
    const isCurrentText = currentNavbarButton.toLowerCase() == text.toLowerCase();

    return (
        <div>
            <BasicButton
                text={text}
                margin={"5px 0"}
                borderRadius={12}
                className={`${style.navbarButtons} ${!isHovered && (isCurrentText && style.activeNavbarButton)}`}
                textColor="white"
            />
        </div>
    );
};

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [isClicked, setIsClicked] = useState(false);

    const { activeNavbarButton: currentNavbarButton } = useSelector((state)=>state.navbarReducer);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navbarList = ["AboutMe", "Projects", "Certificates", "Contact", "Login"];

    return (
        <>
            {width > 768 ? (
                <section className={style.navbarWrapper}>
                    <ul onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
                        <li >
                            <NavBarButtons currentNavbarButton={currentNavbarButton} isHovered={isHovered} text={"AboutMe"} />
                        </li>
                        <li>
                            <NavBarButtons currentNavbarButton={currentNavbarButton} isHovered={isHovered} text={"Projects"} />
                        </li>
                        <li>
                            <NavBarButtons currentNavbarButton={currentNavbarButton} isHovered={isHovered} text={"Certificates"} />
                        </li>
                        <li>
                            <NavBarButtons currentNavbarButton={currentNavbarButton} isHovered={isHovered} text={"Contact"} />
                        </li>
                        <li>
                            <NavBarButtons currentNavbarButton={currentNavbarButton} isHovered={isHovered} text={"Login"} />
                        </li>
                    </ul>
                </section>
            ) : (
                // isClicked ? <SideBarDocker list={navbarList} isClicked={isClicked} /> : <div onClick={()=>setIsClicked(true)} className={style.sideBarBtn}><Image src={Bar} width={50} height={50} alt="sidebar toggle"/></div>
                <>
                    <SideBarDocker currentNavbarButton={currentNavbarButton} list={navbarList} isClicked={isClicked} />
                    <div onClick={()=>setIsClicked(true)} className={style.sideBarBtn}><Image src={Bar} width={50} height={50} alt="sidebar toggle"/></div>
                </>
            )}
            {isClicked && <div onClick={()=>setIsClicked(false)} className="overlay"></div>}
        </>
    );
}

export default Navbar;
