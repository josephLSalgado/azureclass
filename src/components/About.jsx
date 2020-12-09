import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 280px;
    height: 280px;
    border: 2px solid #E18E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #E18E63;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #E18E63;
`;

const AboutDesc = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutSocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: #000000;
`;

const About = ({avatar}) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt="">
                    </AboutImg>
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>
                    Joseph Salgado
                </AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>Blogger</AboutProfession>
                <AboutProfession>Desarrollador de videojuegos</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutDesc>Soy desarrollador de videojuegos y me gusta la pizza. Actualmente estoy jugando Fortnite y Genshin Impact.</AboutDesc>
            </div>
            <div className="About-location">
                <AboutLocation>San Luis Potosí, México.</AboutLocation>
            </div>
            <AboutSocialStyle>
                <SocialUl>
                    <SocialLi>
                        <SocialAnchor href="https://twitter.com/PisshhSalgado">
                            <SocialIcon className="fa fa-twitter"/>
                        </SocialAnchor>
                    </SocialLi>
                    <SocialLi>
                        <SocialAnchor href="https://www.instagram.com/joelouis_salgado/">
                            <SocialIcon className="fa fa-instagram"/>
                        </SocialAnchor>
                    </SocialLi>
                    <SocialLi>
                        <SocialAnchor href="https://github.com/josephLSalgado">
                            <SocialIcon className="fa fa-github"/>
                        </SocialAnchor>
                    </SocialLi>
                </SocialUl>
            </AboutSocialStyle>
        </div>
    </AboutStyle>
);

export default About;