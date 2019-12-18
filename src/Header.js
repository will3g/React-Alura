import React from 'react';
import { Link } from 'react-router-dom'; // A tag link faz com que nossa aplicação se torne Single Page Aplication

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo lighten-2">
                <Link to="/" className="brand-logo ml-10">Casa do código</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/autores">Autores</Link></li>
                    <li><Link to="/livros">Livros</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;