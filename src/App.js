import React, { Component } from 'react';

import './style.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '100'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '150'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '110'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '120'
      }
    ],
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  }

  removeAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores : autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
  }

  render() {
    return (
      <>
        <Header/>
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor }/>
          <Formulario escutadorDeSubmit={ this.escutadorDeSubmit }/>
        </div>
      </>
    );
  };
}

export default App;
