import React from "react";

import './styles.css';

import img from '../Header/img/LOGO-Cor-White.png';

window.onload = () => {
    try{
        var preload = document.querySelector('.preload');
        setTimeout(() => {
            preload.style.display = 'none';
        });
    }catch(e){
        console.log('Erro');
    }
}

export const Preload = () => {
    return(
        <div  className="preload">
            <img src={img} alt="" />
        </div>
    );
}