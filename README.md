
# AutoPark
[![GitHub issues](https://img.shields.io/github/issues/le0henr1que/desafio-verzel-Back-end.svg)](https://github.com/le0henr1que/desafio-verzel-Back-end/issues)
[![GitHub forks](https://img.shields.io/github/forks/sle0henr1que/desafio-verzel-Back-end.svg)](https://github.com/le0henr1que/desafio-verzel-Back-end/network)

Este é um projeto que visa fornecer uma API RESTful para gerenciamento de anúncios de veículos. Com ele, é possível criar, ler, atualizar e excluir anúncios de veículos, fornecendo informações como modelo, marca, ano, preço e imagem do veículo.

A API foi construída usando Node.js com Express e armazenamento de dados MongoDB. Também foi utilizado o Mongoose, uma biblioteca de modelagem de objetos MongoDB para Node.js, para facilitar a interação com o banco de dados.

Possui dois tipos de usuários distintos, administrador e anunciante, cada um com seus próprios privilégios e responsabilidades. O administrador tem a capacidade de editar e excluir anúncios de veículos, enquanto o anunciante pode criar e gerenciar seus próprios anúncios.

Além de Possui um sistema de notificação por email entre anunciante e pessoa com interesse.

## 📋 Documentação

A documentação da API está disponível em http://localhost:5000/api/docs , Ela fornece informações detalhadas sobre as rotas disponíveis e os parâmetros de entrada e saída de cada rota.

## 📋 Teste

Os teste da estão disponíveis em:
```
yarn test
```
ou
```
npm run test
```

Ela fornece informações detalhadas sobre os testes end to end de cada rota.

## 🚀 Começando

Para obter uma copia do projeto para execução basta seguir as etapas:

Clonar repositorio:

```
git clone https://github.com/le0henr1que/desafio-verzel-Back-end.git
```

### 📋 Pré-requisitos

Para execução do projeto é preciso:

- Gerenciador de pacotes;
- Node JS
- Docker (Opcional)
- MongoDB - ORM mongoose

### 🔧 Execução

Para executar o projeto basta seguir as etapas:

Projeto por padrão rodando na porta:

`5000`

### Instalação das Dependências run:

```
yarn
```

```
npm i
```


### Para rodar o projeto fora de um container dokcer, basta executar:

```
yarn dev:server
```

```
npm run dev:server
```
### Execução da persistência dos dados:

```
npm run data:persistence
```
```
yarn data:persistence
```

### 🐋 Para rodar o projeto em um container docker, basta executar respectivamente:

OBS: Em cado de execução no docker, altere a variavel de ambiente DB_HOST para mongodb. 

- yarn

```
yarn dev:build
```

```
yarn dev:server:up
```

- npm

```
npm dev:build
```

```
npm dev:server:up
```
### Execução da persistência dos dados:

Com as o docker rodando, abra outra sehll no vs code e execute os seguintes comandos:

```
docker-compose run --rm api-verzel-auto sh
```

em seguida execute:
```
npm run data:persistence
```
```
yarn data:persistence
```


## 📄 Notas

 ### interações Obrigatorias:
  
  * 🟩 Sistema de Login;
  * 🟩 Cadastro de veiculos;
  * 🟩 Update de veiculos;
  * 🟩 Cadastro de imagem do veiuclo (Firefox) no Google Chrome não está cadastrando;
  * 🟩 Uodate de imagem (firefox e crhome);
  * 🟩 Deleção de veiculos;
  * 🟩 Listagem de veiculos;
  * 🟩 Sistema de permissão para CRUD em veiculos;
  * 🟩 Listagem por ordem de preço;
  * 🟩 JWT;
  
 ### PLUS++ (interações não obrigatórias): 
 
  * 🟩 Botão Home e comprar carro;
  * 🟩 Input search de Pesquisar veiculo;
  * 🟩 Todos os Filtros;
  * 🟩 Paginação;
  * 🟩 Pilula de filtro;
  * 🟩 Classificar do maior para o menor preço pelo filtro de veiculos;
  * 🟩 Avalie Carro conosco;
  * 🟩 Anúncio de veiculso;
  * 🟩 Evio de email com notificação de interesse;
  * 🟩 Testes end to end;
  * 🟩 Swagger;


