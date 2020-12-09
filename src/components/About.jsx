import React from 'react';

const About = ({avatar, twitter, instagram}) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src={avatar} alt="">
                    </img>
                </figure>
            </div>
            <div className="About-name">
                <h2>Joseph Salgado</h2>
            </div>
            <div className="About-profession">
                <p>Blogger</p>
                <p>Desarrollador de videjuegos</p>
            </div>
            <div className="About-desc">
                <p>Soy desarrollador de videojuegos y me gusta la pizza. Actualmente estoy jugando Fortnite y Genshin Impact.</p>
            </div>
            <div className="About-location">
                <p>San Luis Potosí, México.</p>
            </div>
            <div className="About-social">
                Social
            </div>
        </div>
    </div>
);

export default About;