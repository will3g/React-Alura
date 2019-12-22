import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import DataTable from '../../components/DataTable/DataTable';
import ApiService from '../../services/ApiService';
import PopUp from '../PopUp';

export default class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
              titulo: 'Autores'
        };
    }

    componentDidMount(){ // Serve para redesenhar os componentes em tela
      ApiService.ListaAutor()
        .then(res => ApiService.TrataErros(res))
        .then(res => {
          if (res.message === 'success') {
            this.setState({nomes: [...this.state.nomes, ...res.data]});
          }
        }).catch(err => PopUp.exibeMensagem('error', 'Erro ao listar autores.'));
    }

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
                </div>
            </>
        );
    }
}