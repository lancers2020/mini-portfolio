import React from 'react';
import styles from './styles.module.css';

const ScrollIndicator = (stylesParameter) => {
    const ScrollImg = '/scroll.png';
    return (
        <div className={`${styles.scrollIndicatorContainer}`} style={{...stylesParameter.styles}}>
            {/* The text "SCROLL" rendered vertically */}
            <div className={`${styles.scrollText}`}>
                SCROLL
            </div>

            {/* <img src={ScrollImg} alt="Scroll Indicator"/> */}
            
            {/* The down-arrow element */}
            <div className={`${styles.scrollArrow}`}>
                &#x2193; {/* Unicode for a simple down arrow */}
            </div>
        </div>
    );
};

export default ScrollIndicator;