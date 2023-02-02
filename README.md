![Símbolo-texto-horizontal(1)](https://user-images.githubusercontent.com/68018921/199128538-76654f75-afe5-4906-a9c4-f47a7fa48bd5.png)

# Verzel AutoPark

Sistema CRUD de vitrine de veiculos.

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

### 🐋 Para rodar o projeto em um container docker, basta executar respectivamente:

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

## 🏁 Rotas

### Publicas

`GET`

```
/list/auto
```

`GET`

```
/list/:id/auto
```

`POST`

```
/register/user
```

```json
{
  "name": "Administrador",
  "email": "admin@admin.com",
  "password": "admin123"
}
```

`POST`

```
/login
```

```json
{
  "email": "admin@admin.com",
  "password": "admin123"
}
```

### Privada:

`PUT`

```
/update/:id/auto
```

`DELETE`

```
/delete/:id/auto
```

`POST`

```
/upload/car/:id/auto/image
```

`POST`

```
/create/auto
```

```json
{
  "city": "São Paulo - SP",
  "name": "March",
  "brand": "Nissan",
  "model": "1.O 12V FLEX 4P MANUAL",
  "year": "2017",
  "km": "102.982 km",
  "price": 38000
}
```

## 📄 Notas

- Caso execute o container, certifique-se de executar o comando (npm run down) ou (yarn down) para parar o container.

## 🎁 Feature

- Criar validação acertiva de dados 📢;
- Testes Unitários 📢;
