
# Projeto de Comunicação em Tempo Real com WebSockets e Socket.IO


## Descrição

Este projeto implementa uma solução de **comunicação em tempo real** utilizando o protocolo **WebSockets** com a biblioteca **Socket.IO**. A integração entre **front-end** e **back-end** foi realizada para proporcionar uma experiência de usuário dinâmica e interativa. Além disso, o projeto conta com a integração do **MongoDB**, um banco de dados NoSQL, para armazenamento de dados em tempo real.

## Funcionalidades

- **Comunicação em Tempo Real**: Utilização de WebSockets para comunicação bidirecional entre cliente e servidor.
- **Socket.IO**: Implementação da biblioteca Socket.IO para facilitar o desenvolvimento da comunicação.
- **Salas e Reconhecimento**: Integração de recursos como **salas** (rooms) e **reconhecimento de eventos** no Socket.IO, proporcionando uma comunicação organizada e eficiente.
- **MongoDB**: Armazenamento de dados utilizando o banco de dados NoSQL MongoDB, oferecendo escalabilidade e alta performance.
- **Integração Front-End e Back-End**: Conexão entre as camadas do sistema para garantir uma experiência fluída e interativa para o usuário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para criação de APIs e roteamento no back-end.
- **Socket.IO**: Biblioteca para comunicação em tempo real via WebSockets.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM para integração entre o MongoDB e o Node.js.
- **HTML5, CSS3, JavaScript**: Tecnologias para o desenvolvimento do front-end.

## Estrutura do Projeto

```bash
├── backend/
│   ├── config/                # Configurações do servidor e do banco de dados
│   ├── controllers/           # Controladores para gerenciar a lógica de negócio
│   ├── models/                # Modelos do MongoDB com Mongoose
│   ├── routes/                # Definição das rotas da API
│   ├── server.js              # Arquivo principal para iniciar o servidor
│   └── socket.js              # Configuração e eventos do Socket.IO
├── frontend/
│   ├── assets/                # Arquivos estáticos como imagens e fontes
│   ├── components/            # Componentes reutilizáveis do front-end
│   ├── index.html             # Página principal do front-end
│   ├── app.js                 # Lógica principal do front-end
│   └── style.css              # Estilos do front-end
├── .gitignore                 # Arquivo para ignorar arquivos e pastas no Git
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto
```

## Instalação

### Pré-requisitos

Antes de rodar o projeto, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS)
- [MongoDB](https://www.mongodb.com/) ou um serviço de banco de dados NoSQL

### Passos para instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/usuario/projeto-socket-io.git
    cd projeto-socket-io
    ```

2. Instale as dependências do **back-end**:
    ```bash
    cd backend
    npm install
    ```

3. Instale as dependências do **front-end**:
    ```bash
    cd frontend
    npm install
    ```

4. Configure o MongoDB (caso esteja usando um banco local):
    - Crie um banco de dados no MongoDB.
    - Altere a URL de conexão no arquivo `backend/config/db.js`.

5. Inicie o servidor:
    - No diretório `backend`, execute o seguinte comando:
    ```bash
    npm start
    ```
    - O servidor estará disponível em `http://localhost:3000`.

6. Abra o front-end em um navegador:
    ```bash
    cd frontend
    npm start
    ```
    - A aplicação estará acessível em `http://localhost:8080`.

## Exemplos de Uso

### Conexão do Cliente com o Servidor

No **front-end**, o código a seguir conecta o cliente ao servidor usando **Socket.IO**:

```javascript
const socket = io('http://localhost:3000');

// Emitir um evento para o servidor
socket.emit('mensagem', 'Olá, servidor!');

// Receber uma resposta do servidor
socket.on('resposta', (data) => {
    console.log(data);
});
```

### Uso de Salas no Socket.IO

As **salas** são um ótimo recurso para organizar a comunicação entre diferentes grupos de clientes. Aqui está um exemplo de como um cliente pode entrar em uma sala específica:

```javascript
// No front-end:
socket.emit('entrarSala', 'sala1');

// No back-end:
io.on('connection', (socket) => {
    socket.on('entrarSala', (sala) => {
        socket.join(sala);
        console.log(`Cliente entrou na sala: ${sala}`);
    });
});
```

## Arquitetura do Sistema

### Comunicação entre Cliente e Servidor

A comunicação é baseada no protocolo WebSockets, utilizando a biblioteca Socket.IO para facilitar a integração entre cliente e servidor. Isso permite que o servidor envie dados em tempo real para os clientes conectados sem a necessidade de atualização contínua da página.

- **Cliente**: A interface web que interage com o servidor via Socket.IO.
- **Servidor**: Um servidor Node.js que utiliza o Socket.IO para comunicar-se com os clientes.
- **Banco de Dados**: O MongoDB armazena dados de forma eficiente e escalável.

### Fluxo de Dados

1. O **cliente** emite eventos para o **servidor** via WebSockets.
2. O **servidor** processa esses eventos e, se necessário, interage com o banco de dados MongoDB para buscar ou armazenar dados.
3. O **servidor** pode então enviar mensagens de volta ao cliente em tempo real.
4. O uso de **salas** permite que a comunicação seja segmentada, facilitando a organização de grupos de usuários.

## Contribuições

Este é um projeto de código aberto! Se você gostaria de contribuir, por favor, siga estas etapas:

1. Fork este repositório.
2. Crie uma branch com sua feature ou correção de bug (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por** [Bruno Tome](https://www.linkedin.com/in/bruno-tom%C3%A9-788129312/)
