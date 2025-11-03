"use client";

import React from "react";
import style from "./style.module.css";
import AboutMe from "./components/sections/AboutMe";
import Navbar from "./components/sections/Navbar";
import PaginationDots from "./components/buttons/PaginationDots";
import { useSelector } from 'react-redux';
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import { Provider } from "react-redux";
import store from "@/store/store";

const Home = () => {
    return (
        <Provider store={store}>
            <div className={style.mainContainer}>
                <Navbar />
                <PaginationDots />
                <main className={style.contentContainer}>
                    <section id="aboutme" className={`${style.section} ${style.hundred_vh}`}>
                        <AboutMe />
                    </section>
                    <section id="projects" className={style.section}>
                        <Projects />
                    </section>
                    <section id="certificates" className={style.section}>
                        <Certificates />
                    </section>
                    <section id="contact" className={style.section}>
                        <Contact />
                    </section>
                    <section id="resume" className={style.section}>
                        <Resume />
                    </section>
                </main>
            </div>
        </Provider>
    );
};

export default Home;
