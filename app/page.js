import React from "react";
import style from "./style.module.css";
import AboutMe from "./components/sections/AboutMe";

const Home = () => {
    return (
        <div className={style.mainContainer}>
            <AboutMe />
        </div>
    );
};

export default Home;
