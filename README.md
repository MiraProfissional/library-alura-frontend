[![CI](https://github.com/MiraProfissional/library-alura-frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/MiraProfissional/library-alura-frontend/actions/workflows/node.js.yml)

# AluraBooks - Frontend

Este é o repositório do frontend do projeto **AluraBooks**, desenvolvido durante o curso da Alura: [Full Stack React e Node.js](https://cursos.alura.com.br/formacao-full-stack-react-node-js). O objetivo da aplicação é exibir livros disponíveis por meio de um filtro que se comunica com o backend, além de permitir a gestão de uma lista de favoritos e realizar operações de CRUD nos livros.

## Relação com o Backend

O frontend se comunica diretamente com o backend para buscar e manipular dados dos livros. O repositório do backend está disponível em: [library-alura-backend](https://github.com/MiraProfissional/library-alura-backend).

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Para requisições HTTP ao backend.
- **Styled Components**: Para estilização de componentes.
- **JavaScript (ES6+)**: Linguagem principal de desenvolvimento.
- **React Router**: Gerenciamento de rotas no frontend.
- **ESLint**: Para garantir a qualidade e consistência do código.
- **Prettier**: Para formatação automática do código.

## Docker

O projeto inclui um arquivo `Dockerfile` e `docker-compose.yml` para rodar a aplicação em containers Docker. Para rodar o frontend em um container:

1. Certifique-se de ter o **Docker** instalado e em execução.
2. Construa a imagem:

   ```bash
   docker-compose build
   ```

3. Inicie o container:

   ```bash
   docker-compose up
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Funcionalidades

- Filtro de livros: os usuários podem buscar livros através de um filtro dinâmico.
- Lista de Favoritos: os usuários podem adicionar ou remover livros da lista de favoritos com um clique.
- GET de livros: funcionalidades de buscar todos os livros presentes no banco de dados.

## Como rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/MiraProfissional/library-alura-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode a aplicação:

   ```bash
   npm start
   ```

4. Acesse a aplicação no navegador em `http://localhost:3000`.

## Linting e Formatação

- Utilize o **ESLint** para checar erros de sintaxe e qualidade de código:

  ```bash
  npm run lint
  ```

- Utilize o **Prettier** para formatar automaticamente o código:

  ```bash
  npm run format
  ```

## Contribuições

Sinta-se à vontade para contribuir com sugestões, melhorias ou correções! Abra uma issue ou envie um pull request.
