import { useDispatch } from "react-redux";
import Image from "next/image";
import Next from "@/public/icons/next.png";
import Previous from "@/public/icons/previous.png";

const Pagination = ({ currentPage, pageCount, type, style }) => {
    const dispatch = useDispatch();
    const styles = {
        width: style?.width ?? "500px",
        display: "flex",
        justifyContent: style?.justifyContent ?? "space-between",
        alignItems: style?.alignItems ?? "center",
    };
    return (
        <section style={styles}>
            <button
                disabled={currentPage <= 0}
                onClick={() => dispatch({ type, payload: currentPage - 1 })}
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
                style={{ opacity: pageCount == currentPage + 1 ? 0.5 : 1 }}
            >
                <Image src={Next} height={35} width={35} alt={"Next button"} />
            </button>
        </section>
    );
};

export default Pagination;
