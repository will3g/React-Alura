import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkWrapper = props => {

    return (
        <NavLink activeStyle={{fontWeight: "bold"}} {...props}/>
    );
}

export default LinkWrapper;

// Nessa classe estamos envelopando a tag Link do React Router DOM em um único lugar,
// e criando nossa tag com o nome de LinkWrapper.

// Se por algum motivo essa tag deixar de existir (ou ser atualizada) mudamos em um
// único local. 