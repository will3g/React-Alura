import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './pages/Home/App';
import NotFound from './pages/NotFound/NotFound';
import Livros from './pages/Livros/Livros';
import Autores from './pages/Autores/Autores';
import Sobre from './pages/Sobre/Sobre';

import './style/index.css';

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