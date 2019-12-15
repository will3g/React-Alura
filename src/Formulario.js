import React, { Component } from 'react';

export default class Formulario extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            precos: '',
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    escutaInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    render() {

        const { nome, livro, preco } = this.state;

        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        
                        <input 
                            id="nome" 
                            type="text" 
                            name="nome"
                            value={nome}
                            placeholder="Nome"
                            onChange={this.escutaInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <input 
                            id="livro" 
                            type="text" 
                            name="livro"
                            value={livro}
                            placeholder="Livro"
                            onChange={this.escutaInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <input 
                            id="preco" 
                            type="text" 
                            name="preco"
                            value={preco}
                            placeholder="Preço"
                            onChange={this.escutaInput}
                        />
                    </div>
                </div>
                <button type="button" onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2 mb-10">Salvar</button>
            </form>
        );
    }
}