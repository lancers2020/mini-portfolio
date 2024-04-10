import React from "react";
import style from "./style.module.css";
import BasicButton from "../buttons/basicButton";

const NavBarButtons = ({ text }) => {
    return (
        <div>
            <BasicButton
                text={text}
                margin={"5px 0"}
                borderRadius={12}
                className={style.navbarButtons}
                textColor="white"
            />
        </div>
    );
};

function Navbar() {
    return (
        <section className={style.navbarWrapper}>
            <ul>
                <li>
                    <NavBarButtons text={"AboutMe"} />
                </li>
                <li>
                    <NavBarButtons text={"Projects"} />
                </li>
                <li>
                    <NavBarButtons text={"Certificates"} />
                </li>
                <li>
                    <NavBarButtons text={"Contact"} />
                </li>
                <li>
                    <NavBarButtons text={"Login"} />
                </li>
            </ul>
        </section>
    );
}

export default Navbar;
