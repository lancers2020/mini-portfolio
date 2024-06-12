import style from "./styles.module.css";

const SideBarDocker = ({list, isClicked, currentNavbarButton}) => {
    return (
        <section className={`${style.sideBarDkrContainer} ${isClicked && style.isClicked}`}>
            <div className={style.sideBarDkrWrapper}>
                <ul>
                    {list.map(v=><li style={{background: currentNavbarButton.toLowerCase() == v.toLowerCase() && 'linear-gradient(to right, black, rgb(16, 18, 29))'}}>{v}</li>)}
                </ul>
            </div>
            <div>
                <div></div>
                <div><div></div></div>
                <div></div>
            </div>
        </section>
    );
};

export default SideBarDocker;