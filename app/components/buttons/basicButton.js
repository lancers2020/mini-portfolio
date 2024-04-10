import React from "react";

const BasicButton = ({
    textColor = "white",
    bgColor = "black",
    borderRadius = 0,
    border = "none",
    text,
    padding = 5,
    margin = 0,
    className = "",
    cursor = "pointer",
    onClick = null,
}) => {
    const style = {
        color: textColor,
        backgroundColor: bgColor,
        borderRadius,
        border,
        padding,
        margin,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor,
    };
    return (
        <div onClick={onClick} className={className} style={style}>
            {text}
        </div>
    );
};

export default BasicButton;
