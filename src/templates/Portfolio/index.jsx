import React from "react";

import './styles.css';

import img from '../../components/Header/img/Logo---Cor-Padrão.png';
import img0 from '../../imagens_design/Arte-01.png';
import img1 from '../../imagens_design/Arte-05-Matricular-Agora.png';
import img2 from '../../imagens_design/Batman-Rafael.png';
import img3 from '../../imagens_design/Flyer-CR7-real-madrid.png';
import img4 from '../../imagens_design/LOGO-rose.png';
import img5 from '../../imagens_design/Natal-01.png';
import img6 from '../../imagens_design/doritos.png';
import img7 from '../../imagens_design/amouage.png';
import img8 from '../../imagens_design/aula-01---Gatorade.png';
import img10 from '../../imagens_design/juliana-bur.png';
import img11 from '../../imagens_design/projeto-black---02.png';
import img12 from '../../imagens_design/projeto-black---03.png';

import { Preload } from "../../components/Preload";
import { Footer } from "../../components/Footer";

export const Portfolio = () => {
    return (
      <>
        <Preload />
        <div className="portfolio">
            <div className="header-port">
                <h1>My Portfolio</h1>
                <a href="/">Início</a>
            </div>

            <div className="projetos">
                <div className="card">
                    <img src={img0} alt="" />
                </div>
                <div className="card">
                    <img src={img1} alt="" />
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                </div>
                <div className="card">
                    <img src={img4} alt="" />
                </div>
                <div className="card">
                    <img src={img5} alt="" />
                </div>
                <div className="card">
                    <img src={img6} alt="" />
                </div>
                <div className="card">
                    <img src={img7} alt="" />
                </div>
                <div className="card">
                    <img src={img8} alt="" />
                </div>
                <div className="card">
                    <img src={img} alt="" />
                </div>
                <div className="card">
                    <img src={img10} alt="" />
                </div>
                <div className="card">
                    <img src={img11} alt="" />
                </div>
                <div className="card">
                    <img src={img12} alt="" />
                </div>
            </div>
        </div>

        <Footer />
      </>
    );
}