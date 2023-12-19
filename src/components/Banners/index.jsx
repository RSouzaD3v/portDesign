import React from "react";

import mockup from './img/Mockup-Logo.png';


import './styles.css';


export const Banners = () => {

    return(
        <div className="banners">
            <div className="single">
                <img src={mockup} alt="" />
            </div>
        </div>
    );
}