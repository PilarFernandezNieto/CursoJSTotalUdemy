// Importar framework Express

const express = require("express");
const app = express();

// Obtener el módulo conexion.js
const mongoDB = require("./conexion");

// Configurar la API para que trabaje para que trabaje bajo el formto JSON
app.use(express.json());

// Definir un nuevo método GET
app.get("/clientes", (peticion, respuesta) => {
  // Obtener el listado de clientes

  mongoDB.conexionDB().then((conexion) => {
    console.log(typeof conexion);
    const controlador = conexion.db().collection("clientes");
    controlador
      .find()
      .toArray()
      .then((filas) => {
        respuesta.send(filas).catch((error) => respuesta.send(error));
      });
  });
});

// Definir nuevo método POST
app.post("/clientes/create", (peticion, respuesta) => {
  mongoDB.conexionDB().then((conexion) => {
    const controlador = conexion.db().collection("clientes");
    controlador
      .insertOne(peticion.body)
      .then(respuesta.send("Nuevo registro creado"))
      .catch((error) => respuesta.send(error));
  });
});

// Iniciar el servidor en el puerto 3000

app.listen(3000, () => {
  console.log("El servidor está en línea");
});
