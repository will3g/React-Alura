import React, { Component } from 'react';
import Header from './Header';

class Autores extends Component {
    render() {
        const { autores } = this.props;

        console.log(autores);

        return (
            <>
                <Header />
                <h1>Autores</h1>
            </>
        );
    }
}

export default Autores;