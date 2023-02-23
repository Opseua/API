// Modulos necessarios
const conn = require('../model/mysql');

// Objeto "controller" para a entidade "things" do banco de dados.
const thingsControl = {

  // Lista todos os registros válidos.
  getAll: async (req, res) => {

    console.log(req.method)

    try {

      const [rows] = await conn.query("SELECT * FROM things WHERE status = 'on' ORDER BY date DESC");
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Lista um registro único pelo Id.
  getOne: async (req, res) => {

    try {

      const { id } = req.params;
      const [rows] = await conn.query("SELECT * FROM things WHERE id = ?", [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // apaga um registro único pelo Id.
  delete: async (req, res) => {

    try {

      const { id } = req.params

      const sql = "DELETE FROM things WHERE ID = ?";
      //const sql_2 = "UPDATE things SET status = 'del' WHERE id = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  },

  // Insere um novo registro.
  post: async (req, res) => {

    try {

      const { user, name, photo, description, location, options } = req.body;

      // Validação e sanitização de dados ###################################
      try {

        if ((parametros.match(/=/)) && ((parametros.match(/GET/)) || (parametros.match(/POST/)) || (parametros.match(/PUT/)) || (parametros.match(/DELETE/)))) {
          console.log("Validação de dados aceita")
        } else {
          throw new error("Validação de dados não aceita");
        }

      } catch (error) {


      };


      const sql = "INSERT INTO things (user, name, photo, description, location, options) VALUES (?, ?, ?, ?, ?, ?)";
      const [rows] = await conn.query(sql, [user, name, photo, description, location, options]);
      res.json({ data: rows });

    } catch (error) {
      res.json({ status: "error", message: error });
    }

  },

  // Edita o registro pelo Id.
  put: async (req, res) => {

    try {

      const { user, name, photo, description, location, options } = req.body;
      const { id } = req.params;
      const sql = "UPDATE things SET user = ?, name = ?, photo = ?, description = ?, location = ?, options = ? WHERE id = ?"
      const [rows] = await conn.query(sql, [user, name, photo, description, location, options, id]);
      res.json({ data: rows });

    } catch (error) {

      res.json({ status: "error", message: error });

    }

  }

};

// Exporta o módulo.
module.exports = thingsControl;

/**
 * By Luferat 2023
 * MIT Licensed
 */