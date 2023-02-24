/**
 * control/userControl.js
 * Controller da tabela "things" do banco de dados.
 */

// Importa conector do banco de dados.
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "things" do banco de dados.
const userControl = {

    // Lista todos os registros válidos.
    getAll: async (req, res) => {
        try {
            const [rows] = await conn.query("SELECT * FROM users WHERE status = 'on' ORDER BY name");
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Lista um registro único pelo Id.
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const [rows] = await conn.query("SELECT * FROM users WHERE id = ? AND status = 'on'", [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }

    },

    // apaga um registro único pelo Id.
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const sql = "UPDATE users SET status = 'del' WHERE id = ?"
            const [rows] = await conn.query(sql, [id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Insere um novo registro.
    post: async (req, res) => {
        try {
            let { name, email, password, avatar, birth } = req.body;
            const sql = "INSERT INTO users (name, email, password, avatar, birth) VALUES (?, ?, SHA1(?), ?, ?)";
            const [rows] = await conn.query(sql, [name, email, password, avatar, birth]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }

    },

    // Edita o registro pelo Id.
    put: async (req, res) => {

        try {
            const { name, email, password, avatar, birth } = req.body;
            const { id } = req.params;
            const sql = "UPDATE users SET name = ?, email = ?, password = SHA1(?), avatar = ?, birth = ? WHERE id = ?"
            const [rows] = await conn.query(sql, [name, email, password, avatar, birth, id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    }

};

// Exporta o módulo.
module.exports = userControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */