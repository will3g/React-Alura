import React from 'react';

import LinkWrapper from './LinkWrapper';

// import { Link } from 'react-router-dom'; // A tag link faz com que nossa aplicação se torne Single Page Aplication

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" className="brand-logo ml-10" activeStyle={{}}>Casa do código</LinkWrapper>
                <ul id="nav-mobile" className="right">
                    <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                    <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;