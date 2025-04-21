# sistema-gerenciamento-selecoes
Este projeto implementa um sistema de gerenciamento de seleções de futebol com operações CRUD (Create, Read, Update, Delete), utilizando Node.js com Express e MySQL.
O sistema permite realizar as seguintes operações:

- **Criar uma seleção:** Cadastrar uma nova seleção no banco de dados.
- **Listar seleções:** Exibir todas as seleções cadastradas.
- **Buscar uma seleção por ID:** Consultar dados de uma seleção específica.
- **Atualizar uma seleção:** Modificar dados de uma seleção existente.
- **Deletar uma seleção:** Remover uma seleção do banco de dados.

Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- dotenv (para gerenciar variáveis de ambiente)

Estrutura de Pastas

- **app.js:** Arquivo de inicialização da aplicação, onde o servidor é configurado.
- **controllers:** Contém os controladores que lidam com as requisições HTTP.
- **repositories:** Contém os métodos para interagir com o banco de dados.
- **database:** Conexão com o banco de dados MySQL.
- **routes.js:** Define as rotas da API.

Configuração do Banco de Dados

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente para a conexão com o banco de dados: DB_HOST=localhost DB_PORT=3306 DB_USER=root DB_PASSWORD=sua-senha DB_NAME=nome-do-banco PORT=3000

Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
