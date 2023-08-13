const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "temporal",
  database: "viajes",
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("Conectado a la base de datos");
});

module.exports = { connection };
