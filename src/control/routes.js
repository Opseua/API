/**
 * control/routes.js
 * Arquivo de rotas do aplicativo.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Carrega o controller de 'thingss'.
const thingsControl = require('./thingsControl');

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Rotas para as requisições de 'thingss'.
router.get("/things/", thingsControl.getAll);
router.get("/things/:id", thingsControl.getOne);
router.post("/things/", bodyParser, thingsControl.post);
router.put("/things/:id", bodyParser, thingsControl.put);
router.delete("/things/:id", thingsControl.delete);

// Carrega o controller de 'userss'.
const usersControl = require('./usersControl');

// Rotas para as requisições de 'userss'.
router.get("/users/", usersControl.getAll);
router.get("/users/:id", usersControl.getOne);
router.post("/users/", bodyParser, usersControl.post);
router.put("/users/:id", bodyParser, usersControl.put);
router.delete("/users/:id", usersControl.delete);

// Exporta o módulo.
module.exports = router;

/**
 * By Luferat 2023
 * MIT Licensed
 */