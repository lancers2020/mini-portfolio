"use client";

import React from "react";
import style from "./style.module.css";
import AboutMe from "./components/sections/AboutMe";
import Navbar from "./components/sections/Navbar";
import { Provider } from "react-redux";
import store from "@/store/store";

const Home = () => {
    return (
        <Provider store={store}>
            <div className={style.mainContainer}>
                <Navbar />
                <AboutMe />
            </div>
        </Provider>
    );
};

export default Home;
