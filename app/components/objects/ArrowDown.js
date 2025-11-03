import React from 'react';

const ArrowDown = (parameter) => {
    return (
        <div style={{...parameter.styles}}>
            <img src={parameter.src} alt="arrow down indicator"/>
        </div>
    );
};

export default ArrowDown;