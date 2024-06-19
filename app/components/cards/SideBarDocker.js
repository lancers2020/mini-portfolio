import style from './styles.module.css';

const SideBarDocker = ({
    list,
    isClicked,
    currentNavbarButton,
    screenSize,
}) => {
    return (
        <section
            className={`${style.sideBarDkrContainer} ${
                isClicked && style.isClicked
            } ${isClicked && screenSize && style.mobileIsClickedKindOfHover}`}
        >
            <div className={style.sideBarDkrWrapper}>
                <ul>
                    {list.map((v, i) => (
                        <li
                            key={i}
                            style={{
                                background:
                                    currentNavbarButton.toLowerCase() ==
                                        v.toLowerCase() &&
                                    'linear-gradient(to right, black, rgb(16, 18, 29))',
                            }}
                        >
                            {v}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default SideBarDocker;
