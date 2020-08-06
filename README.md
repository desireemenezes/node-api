# NodeJS e API

### O que é API Rest e NodeJS
- javascript para Frondend, com ReactJS e React Native, e agora para Backend com NodeJS.
- API Rest : separa o backend, servidor e banco de dados, do frondend.
- **NodeJS**, **MongoDB**, **Express**

### Instalando NodeJS - API Rest : separa o backend do frondend.
- gerenciador de pacotes para instalar o NodeJS, package manager: `chocolatey`
- `node -v`
- `npm -v`

### Criando a estrtura
- `mkdir node-api`
- `cd node-api`
- `npm init -y`
- `npm install express`

### Criando a primeira rota
- utilizando o **express**
- criar o arquivo `server.js`
- executar `node server.js`
- `http://localhost:3001/`
- código teste para o servidor
````javascript
const express = require('express');

const app = express();
app.get("/", (req, res) => {
    res.send("Hello Rocketseat");
});

app.listen(3001);
````

### Aula 5 . Utilizando Nodemon
- `npm install -D nodemon`: instalar o Nodemon no ambiente de desenvolvimento
- ao invés de `node server.js`, usar o `npm run dev`, e assim, reinicializa após alguma alteração.
- abre : `http://localhost:3001/`
- package.json/dependencies:
```json
"dependencies": {
    "express": "^4.16.4",
    "mongoose": "^5.4.9",
    "mongose": "0.0.2-security"
  }
```

### Instalando MongoDB
**Docker Quickstar Terminal**
- Docker : máquina de conteinerização
- **ATENÇÃO** : no `windows 10 home` não possui `Hyper -v`, por isso, problema com virtualização.
- utilizar a máquina virtual , Docker tools, prompt
- utilizando virtualbox + docker tools
- `docker`
- `docker pull mongo`
- `docker run --name mongodbrs -p 27017:27017 -d mongo`
- `docker ps`
- acessar no navegador `http://localhost:27017/` retorna : `It looks like you are trying to access MongoDB over HTTP on the native driver port.`
<br>

**Robot 3T**
- abrir programa `Robot 3T`
- Na janela MongoDB Connections, para criar nova conexão: `name \ docker` e `address \ localhost: 27017`, ou conectar com a já criada: `docker`.
- depois de fechar o notebook :
1. `docker ps -a` : saber imagens que estão pausadas
2. `docker start mongodb` : ou mongodbrs : nome das minhas conexões
3. `docker ps` : para verificar qual conexão está rodando
- abre : `http://localhost:27017/`, 

### Conectando Database
- `npm install mongoose` : código javascript para usar bd, ao invés de SQL.
- código no server.js
````javascript
const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
````

### Criando Model de produto
- Model de produto : www.producthunt.com
- biblioteca require-dir : `require('./src/models/Product');` : com isso, não há necessidade desse require em todos os models do projeto.
- require-dir : `npm install require-dir`
- inserimos o primeiro registro dentro do MongoDB

### Reestruturação de arquivos
- organização, criação, atualização, deleção e listagem de cada produto.
- criar `/src/routes.js`
- funcinando `http://localhost:3001/api`
- criar `/src/controllers/ProductController.js`
- acesso no link : `http://localhost:3001/api/products`

### Utilizando Insomnia
- Insomnia : workspace : `starter-nodejs`
- new request - Index - GET : `http://localhost:3001/api/products`
- Manage Environments - base_url : `http://localhost:3001/api`

### Criaçaõ de registro
- server.js : `app.use(express.json());`
- insomnia - new request - Create - Post - Json
````json
{
	"title":"ReactJS",
	"description":"Biblioteca para criar aplicações interativas com Javascript",
	"url":"http://github.com/facebook/react"
}
````

### CRUD
- index : listagem : insomnia - Index - GET
- show : exibição : insomnia - Show - GET
- store : criação : insomnia - Create - POST
- update : atualização : insomnia - Update - PUT
- destroy : deleção : insomnia - Delete - DELETE

###  Paginação de Lista
- listagem dos objetos
- mongoose paginate : `npm install mongoose-paginate`
- insomnia - Index - `{{ base_url  }}/products?page=2` : retorna a segunda página de objetos 

###  Adicionando CORS
- permitir acessar essa API de outros endereços
- permitir acesso por outros domínios

