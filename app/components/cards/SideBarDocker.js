import style from "./styles.module.css";

const SideBarDocker = ({list, isClicked}) => {
    return (
        <section className={`${style.sideBarDkrContainer} ${isClicked && style.isClicked}`}>
            <div className={style.sideBarDkrWrapper}>
                <ul>
                    {list.map(v=><li>{v}</li>)}
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