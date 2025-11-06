import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import BasicButton from '../buttons/basicButton';
import { useSelector, useDispatch } from 'react-redux';
import { navbarButtonActive } from '@/store/actions/navbarActions';
import SideBarDocker from '../cards/SideBarDocker';
import Bar from '@/public/icons/bar.png';
import Image from 'next/image';

const NavBarButtons = ({ text, isHovered, currentNavbarButton, onClick }) => {
    const isCurrentText =
        currentNavbarButton.toLowerCase() == text.toLowerCase();

    const handleClick = (e) => {
        e.preventDefault();
        const sectionId = text.toLowerCase();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        onClick();
    };

    return (
        <div>
            <BasicButton
                text={text}
                margin={'5px 0'}
                borderRadius={12}
                className={`${style.navbarButtons} ${
                    !isHovered && isCurrentText ? style.activeNavbarButton : ''
                }`}
                textColor="white"
                onClick={handleClick}
                highlighted={isCurrentText}
            />
        </div>
    );
};

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [width, setWidth] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
    const { activeNavbarButton: currentNavbarButton } = useSelector(
        (state) => state.navbar,
    );

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navbarList = [
        'AboutMe',
        'Projects',
        'Certificates',
        'Skills',
        'Resume',
    ];

    return (
        <>
            {width > 768 ? (
                <section className={style.navbarWrapper}>
                    <ul
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                    >
                        <li>
                            <NavBarButtons
                                currentNavbarButton={currentNavbarButton}
                                isHovered={isHovered}
                                text={'AboutMe'}
                                onClick={() => dispatch(navbarButtonActive('AboutMe'))}
                            />
                        </li>
                        <li>
                            <NavBarButtons
                                currentNavbarButton={currentNavbarButton}
                                isHovered={isHovered}
                                text={'Projects'}
                                onClick={() => dispatch(navbarButtonActive('Projects'))}
                            />
                        </li>
                        <li>
                            <NavBarButtons
                                currentNavbarButton={currentNavbarButton}
                                isHovered={isHovered}
                                text={'Certificates'}
                                onClick={() => dispatch(navbarButtonActive('Certificates'))}
                            />
                        </li>
                        <li>
                            <NavBarButtons
                                currentNavbarButton={currentNavbarButton}
                                isHovered={isHovered}
                                text={'Skills'}
                                onClick={() => dispatch(navbarButtonActive('Skills'))}
                            />
                        </li>
                        <li>
                            <NavBarButtons
                                currentNavbarButton={currentNavbarButton}
                                isHovered={isHovered}
                                text={'Resume'}
                                onClick={() => dispatch(navbarButtonActive('Resume'))}
                            />
                        </li>
                    </ul>
                </section>
            ) : (
                // isClicked ? <SideBarDocker list={navbarList} isClicked={isClicked} /> : <div onClick={()=>setIsClicked(true)} className={style.sideBarBtn}><Image src={Bar} width={50} height={50} alt="sidebar toggle"/></div>
                <>
                    <SideBarDocker
                        currentNavbarButton={currentNavbarButton}
                        list={navbarList}
                        isClicked={isClicked}
                        screenSize={width}
                        onSelect={(v) => {
                            dispatch(navbarButtonActive(v));
                            setIsClicked(false);
                        }}
                    />
                    <div
                        onClick={() => setIsClicked(true)}
                        className={style.navbarBurgerBtn}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </>
            )}
            {isClicked && (
                <div
                    onClick={() => setIsClicked(false)}
                    className="overlay"
                ></div>
            )}
        </>
    );
}

export default Navbar;
