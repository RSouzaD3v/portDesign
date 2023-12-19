import React from 'react';

import './styles.css';

import img from '../Header/img/Logo-Cor-WhiteBlack.png';

export const Sobre = () => {
    return(
        <div className='sobre'>
            <div className="leftSobre">
                <h1>Sobre Mim</h1>
                <p>Meu nome é Rafael F. Souza. Sou Designer Gráfico e desenvolvedor Web,
                Todo o Design e desenvolvimento desse site foi elabora e criado por mim.
                Atuando há mais de 5 anos no mercado de design e um pouco mais de 1 ano
                na área de programção, tendo assim meu portifólio de web developer (Front-End),
                se quiser saber mais sobre meus trabalhos de desenvolvedor: <a target='_blank' rel='noreferrer' href='https://rafaelfsouza.netlify.com'>clique aqui.</a>
                </p>  
                <br />
                <p>Não sou formado em ui/ux, porém meu conheciemento em Designer digital me ajudou,
                a ter um certo conhecimento do mesmo. Consigo desenvolver ui/ux com facilidade por ter
                alto conhecimento nas ferramentas adobe e figma.</p>
            </div>
            <div className="rightSobre">
                <img src={img} alt="" />
            </div>
        </div>
    );
}