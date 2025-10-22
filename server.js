// Importa o módulo express
const express = require('express');

// Cria o aplicativo
const app = express();

// Define a porta do servidor (use variável para compatibilidade com deploy)
const port = process.env.PORT || 3000;

// ======== ROTAS (modelo request-response) ========

// Página inicial
app.get('/', (req, res) => {
  res.send(`
    <h1>Bem-vindo ao Projeto Cloud!</h1>
    <p>Esta é a página inicial da aplicação Node.js.</p>
    <nav>
      <a href="/sobre">Sobre</a> |
      <a href="/contato">Contato</a>
    </nav>
  `);
});

// Página "Sobre"
app.get('/sobre', (req, res) => {
  res.send(`
    <h1>Sobre o Projeto</h1>
    <p>Este projeto foi desenvolvido para a disciplina de Desenvolvimento de Software em Nuvem.</p>
    <a href="/">Voltar à Página Inicial</a>
  `);
});

// Página "Contato"
app.get('/contato', (req, res) => {
  res.send(`
    <h1>Contato</h1>
    <p>Entre em contato pelo e-mail: aluno@exemplo.com</p>
    <a href="/">Voltar à Página Inicial</a>
  `);
});

// ======== Inicialização do servidor ========
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});