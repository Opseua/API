// Modulos necessarios
const express = require('express');
const conf = require('dotenv').config().parsed;
const appRouter = require('./control/routes');
const app = express();

// Checar se a porta já existe, do contrário defina para '3000'
const port = conf.HTTPPORT || 3000;

// Importa as listas de rotas.


// Inicia monitoramento das rotas.
app.use(appRouter);

// Executa o servidor HTTP.
app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`);
});

/**
 * By Luferat 2023
 * MIT Licensed
 */