    
const HOST = 'http://localhost:8000/api/autor';

const ApiService = {

    ListaAutores: () => {
        return fetch(HOST);
    },
    CriaAutor: autor => {
        return fetch(HOST, 
        {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: autor
        });
    },
    ListaAutor: () => {
        return fetch(`${HOST}/nome`);
    },
    ListaLivros: () => {
        return fetch(`${HOST}/livro`);
    },
    AtualizaAutor: id => {
        return fetch(`${HOST}/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        });
    },
    DeletaAutor: id => {
        return fetch(`${HOST}/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            
        });
    },
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res.json();
    }
}

export default ApiService;