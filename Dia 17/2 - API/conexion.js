const mysql = require("mysql");
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "temporal",
  database: "seguridad",
});

conexion.connect((error) => {
  if (error) throw error;
  console.log("Conectado a la base de datos");
});

module.exports = { conexion };
