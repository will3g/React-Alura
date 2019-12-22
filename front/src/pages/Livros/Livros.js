import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import DataTable from '../../components/DataTable/DataTable';
import ApiService from '../../services/ApiService';
import PopUp from '../PopUp';

export default class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [],
              titulo: 'Livros'
        };
    }

    componentDidMount(){ // Serve para redesenhar os componentes em tela
      ApiService.ListaLivros()
        .then(res => ApiService.TrataErros(res))
        .then(res => {
          if (res.message === 'success') {
            this.setState({livros: [...this.state.livros, ...res.data]})
          }
        }).catch(err => PopUp.exibeMensagem('error', 'Erro ao listar livros.'));
    }

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <h1>Página de Livros</h1>
                    <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']}/>
                </div>
            </>
        );
    }
}