import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css'

import Tabela from '../../components/Tabela/Tabela';
import Formulario from '../../components/Formulario/Formulario';
import Header from '../../components/Header/Header';
import PopUp from '../PopUp';
import ApiService from '../../services/ApiService';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    }
  }

  removeAutor = id => {

    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });

    ApiService.DeletaAutor(id)
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({autores: [...autoresAtualizado]})
          PopUp.exibeMensagem('success', 'Autor removido com sucesso!');
        }
      }).catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com o servidor.'));

  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => ApiService.TrataErros(res)).then(res => {
        if (res.message === 'success') {
            this.setState({ autores: [...this.state.autores, autor] });
            PopUp.exibeMensagem('success', 'Autor adicionado com sucesso!');
        }
      }).catch(err => PopUp.exibeMensagem('error', 'Erro ao adicionar autor.'));
  }

  componentDidMount(){ // Serve para redesenhar os componentes em tela
    ApiService.ListaAutores()
      .then(res => ApiService.TrataErros(res))
      .then(res => {
        if (res.message === 'success') {
          this.setState({autores: [...this.state.autores, ...res.data]})
        }
      }).catch(err => PopUp.exibeMensagem('error', 'Erro ao listar.'));
  }

  render() {
    return (
      <>
        <Header autores={this.state.autores} removeAutor={this.removeAutor} />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </>
    );
  }
}