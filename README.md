# Axios
Uma outra forma de se realizar requisições assíncronas é utilizando o módulo Axios, que trabalha de forma diferente do fetch, que utilizamos no curso, veja abaixo:

## Antes de tudo, podemos fazer a instalação do módulo direto no terminal, com a linha abaixo:
```
npm install axios
```
ou
```
yarn add axios
```

## Agora podemos importar o módulo no projeto:
```
import axios from ‘axios’;
```

# Feito isso, podemos utilizar o Axios para realizar as requisições!
## Get
```
axios.get(‘http://localhost:800/api/autor’)
    .then(res => {
        const autores = res.autores;
})
```
Repare que o Axios já nos devolve um objeto JSON, sem necessidade de realizarmos um parse!

## Post
```
Semelhante ao fetch, o método post recebe um JSON de dados

axios.post(‘http://localhost:800/api/autor’, { ... })
    .then(res => {
        const autores = res.autores;
})
```

## Delete
```
axios.delete(`http://localhost:8000/api/autor/{id}`)
      .then(res => {
        console.log(res);
      })
  }
```
Tanto o **fetch** quanto o **Axios** funcionam nos navegadores mais atuais, apesar de termos um problema de compatibilidade com o **fetch** em navegadores mais antigos.
