import { useDispatch } from "react-redux";
import Image from "next/image";
import Next from "@/public/icons/next.png";
import Previous from "@/public/icons/previous.png";
import { useEffect } from "react";
import stylesButtons from './styles.module.css';

const Pagination = ({ currentPage, pageCount, type, style }) => {
    const dispatch = useDispatch();
    const styles = {
        width: style?.width ?? "500px",
        display: "flex",
        justifyContent: style?.justifyContent ?? "space-between",
        alignItems: style?.alignItems ?? "center",
    };

    useEffect(()=>{
        const buttons = document.querySelectorAll('.paginationBtn');
        buttons.forEach(button=>{
            button.addEventListener('click', ()=>{
                button.classList.add(stylesButtons.wobble);
                button.addEventListener('animationend', () => {
                    button.classList.remove(stylesButtons.wobble);
                }, { once: true });
            });
        })
    },[]);

    return (
        <section style={styles}>
            <button
                disabled={currentPage <= 0}
                onClick={() => dispatch({ type, payload: currentPage - 1 })}
                className="paginationBtn"
                style={{ opacity: currentPage <= 0 ? 0.5 : 1 }}
            >
                <Image
                    src={Previous}
                    height={35}
                    width={35}
                    alt={"Previous button"}
                />
            </button>
            <button
                disabled={pageCount == currentPage + 1}
                onClick={() => dispatch({ type, payload: currentPage + 1 })}
                className="paginationBtn"
                style={{ opacity: pageCount == currentPage + 1 ? 0.5 : 1 }}
            >
                <Image src={Next} height={35} width={35} alt={"Next button"} />
            </button>
        </section>
    );
};

export default Pagination;
