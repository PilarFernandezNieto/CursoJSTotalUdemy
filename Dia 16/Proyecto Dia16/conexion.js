// Llamar al componente de mysql
var mysql = require("mysql");

// Establecer los parámetros de la conexión
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "temporal",
  database: "nuevabase",
});

// Nos conectamos con la base
conexion.connect((error) => {
  if (error) throw error;
  console.log("Conectado a la base de datos");
});

// Importamos el objeto con los datos de la conexión
module.exports = { conexion };
