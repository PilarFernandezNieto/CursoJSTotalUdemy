// Configurar con expresJS el servidor de la app
const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);

//Llamar al componente de mysql
var mysql = require("mysql");

//Establecer los parámetros de la conexión
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "temporal",
  database: "nuevabase",
});

//Nos conectamos con la bd
connection.connect();

/**funciones CRUD**/
// Agregar un nuevo registro
connection.query(
  "INSERT INTO clientes VALUES(1, 'Pilar', 1, 555888777, 'Avda Siempreviva')",
  function (error, resultados) {
    if (error) {
      throw error;
    }
    console.log(resultados);
  }
);

//Consulta de registros
connection.query("SELECT * FROM clientes", function (error, filas) {
  if (error) {
    throw error;
  }
  console.log(filas);
});

//Moficiaciones
connection.query(
  "UPDATE clientes SET genero = 0, telefono = '111222333' WHERE identificador = 1",
  function (error, resultados) {
    if (error) {
      throw error;
    }
    console.log(resultados);
  }
);

//Consulta de registros
connection.query("SELECT * FROM clientes", function (error, filas) {
  if (error) {
    throw error;
  }
  console.log(filas);
});

//Eliminar registro
connection.query(
  "DELETE FROM clientes WHERE identificador = 1",
  function (error, resultados) {
    if (error) {
      throw error;
    }
    console.log(resultados);
  }
);

//Consulta de registros
connection.query("SELECT * FROM clientes", function (error, filas) {
  if (error) {
    throw error;
  }
  console.log(filas);
});

//Cerramos la conexión
connection.end();
