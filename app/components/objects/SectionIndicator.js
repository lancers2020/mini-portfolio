import React from 'react';

const SectionIndicator = (parameter) => {
    return (
        <div style={{...parameter.styles, transform: 'rotate(-10deg)'}}>
            <img src={parameter.src} alt="section indicator"/>
            <div style={{position: 'relative'}}>
                <div>
                    <img src='/brush.png' alt='brush effect' style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '0px',
                        width: '100px',
                        height: '30px',
                        transform: 'scale(1.5) rotate(-10deg)',
                        zIndex: -1,
                        opacity: 0.6
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default SectionIndicator;