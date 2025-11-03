import style from './styles.module.css';

const SideBarDocker = ({
    list,
    isClicked,
    currentNavbarButton,
    screenSize,
    onSelect,
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
                            role="button"
                            tabIndex={0}
                            onClick={() => onSelect && onSelect(v)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') onSelect && onSelect(v);
                            }}
                            style={{
                                background:
                                    currentNavbarButton.toLowerCase() ==
                                        v.toLowerCase() &&
                                    'linear-gradient(to right, black, rgb(16, 18, 29))',
                                cursor: 'pointer',
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
