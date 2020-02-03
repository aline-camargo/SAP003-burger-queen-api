# Queen's Bar - Back-end

## Índice
1. [Resumo do Projeto](#1-resumo-do-projeto)
2. [Como utilizar](#2-como-utilizar)
2. [Endpoints HTTP API](#3-endpoints-HTTP-API)
4. [Tecnologias utilizadas](#4-tecnologias-utilizadas)

***

## 1. Resumo do Projeto

Este consiste no desenvolvimento de uma _aplicação de servidor_ com enstrutura **MVC** (Model View Controller) que serve `JSON` através de uma conexão `HTTP`. A base de dados e os _endpoints_ correspondem a um serviço de bar com itens de menu e pedidos.

A _API rest_ é compatível com as requisições vindas do _front_ a ser construído, foi desenvolvida a partir do [Docker](https://www.docker.com/) e possui **testes de integração**.

***

## 2. Como utilizar

A aplicação pode subir localmente, após a instalação de suas dependências, através do comando `docker compose up <ambiente>` (_dev_, _db_ ou _test_), dentro da pasta do projeto ou pode ser acessada através do [link](https://burguer-queen-lab.herokuapp.com/api) hospedado pelo Heroku.

***

## 3. Endpoints - HTTP API

#### `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### `/orders`

* `GET /orders`
* `GET /orders/:orderid`
* `GET /orders/items/:orderid`
* `POST /orders`
* `POST /orders/items`
* `PUT /orders/:orderid`
* `DELETE /orders/:orderid`

#### `/tables`

* `GET /tables`
* `GET /tables/:tableid`
* `POST /tables`
* `PUT /tables/:tableid`
* `DELETE /tables/:tableid`

***

## 4. Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Babel](https://babeljs.io/docs/en/next/babel-node.html)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [Sequelize](https://sequelize.org)
* [Postman](https://www.getpostman.com)
* [Docker](https://docs.docker.com/)
* [Heroku](https://www.heroku.com/home)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [ESLint](https://www.npmjs.com/package/eslint-config-airbnb)

***