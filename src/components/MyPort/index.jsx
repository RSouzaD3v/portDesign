import React from "react";

import './styles.css';

import img from '../Header/img/Logo-Cor-WhiteBlack.png'

export const MyPort = () => {
    return (
        <div className="portfolio">
            <div className="header-port">
                <h1>My Portfolio</h1>
                <a href="/">Em breve</a>
            </div>

            <div className="projetos">
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}