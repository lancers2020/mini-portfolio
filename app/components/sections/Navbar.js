import React, { useState } from "react";
import style from "./style.module.css";
import BasicButton from "../buttons/basicButton";
import { useSelector } from "react-redux";

const NavBarButtons = ({ text, isHovered}) => {
    const { activeNavbarButton: currentNavbarButton } = useSelector((state)=>state.navbarReducer);
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

    return (
        <section className={style.navbarWrapper}>
            <ul onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
                <li >
                    <NavBarButtons isHovered={isHovered} text={"AboutMe"} />
                </li>
                <li>
                    <NavBarButtons isHovered={isHovered} text={"Projects"} />
                </li>
                <li>
                    <NavBarButtons isHovered={isHovered} text={"Certificates"} />
                </li>
                <li>
                    <NavBarButtons isHovered={isHovered} text={"Contact"} />
                </li>
                <li>
                    <NavBarButtons isHovered={isHovered} text={"Login"} />
                </li>
            </ul>
        </section>
    );
}

export default Navbar;
