import React from "react";
import style from "./style.module.css";
import AboutMe from "./components/sections/AboutMe";
import Navbar from "./components/sections/Navbar";

const Home = () => {
    return (
        <div className={style.mainContainer}>
            <Navbar />
            <AboutMe />
        </div>
    );
};

export default Home;
