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
    highlighted = false,
}) => {
    const style = {
        color: textColor,
        borderRadius,
        border,
        padding,
        margin,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: highlighted ? "default" : cursor,
        disabled: highlighted ?? false,
    };
    return (
        <div onClick={onClick} className={className} style={style}>
            {text}
        </div>
    );
};

export default BasicButton;
