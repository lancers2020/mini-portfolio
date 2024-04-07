import React from "react";
import style from "./style.module.css";

function Navbar() {
    return (
        <section className={style.navbarWrapper}>
            <ul>
                <li>AboutMe</li>
                <li>Projects</li>
                <li>Certificates</li>
                <li>Contact</li>
            </ul>
        </section>
    );
}

export default Navbar;
