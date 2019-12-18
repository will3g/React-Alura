import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import NotFound from './NotFound';
import Livros from './Livros';
import Autores from './Autores';
import Sobre from './Sobre';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/livros" component={Livros}/>
            <Route path="/autores" component={Autores}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);