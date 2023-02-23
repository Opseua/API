
// Modulos necessarios
const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Rotas para as requisições de 'things'
const thingsControl = require('./thingsControl');
router.get("/things/", thingsControl.getAll);
router.get("/things/:id", thingsControl.getOne);
router.post("/things/", bodyParser, thingsControl.post);
router.put("/things/:id", bodyParser, thingsControl.put);
router.delete("/things/:id", thingsControl.delete);

// Carrega o controller de 'users'.


// Rotas para as requisições de 'users'.
const usersControl = require('./usersControl');
router.get("/users/", usersControl.getAll);
router.get("/users/:id", usersControl.getOne);
router.post("/users/", bodyParser, usersControl.post);
router.put("/users/:id", bodyParser, usersControl.put);
router.delete("/users/:id", usersControl.delete);

// Exportar o módulo
module.exports = router;

