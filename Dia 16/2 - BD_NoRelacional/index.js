// Configurar con expresJS el servidor de la app
const express = require("express");
const app = express();

app.set("port", 3000);
app.listen(3000);

// Llamar al objeto MongoClient del componente MongoDB
const { MongoClient } = require("mongodb");

// Función asíncrona para hacer las peticiones al servidor de la DB
async function usar() {
  // Crear nueva instancia de MongoClient
  const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

  //Nos conectamos y hacemos nuestras peticiones
  try {
    const conexion = await client.connect();
    const controlador = conexion.db().collection("clientes");

    let respuesta, filas, filtro;

    // Insertar nuevo registro
    const nuevoCliente = {
      nombre: "Pilar Fernández",
      genero: 0,
      telefono: 222333444,
      domicilio: "Avda Siempreviva, 4269",
    };
    respuesta = await controlador.insertOne(nuevoCliente);
    console.log("Insertado: ", respuesta);

    // Consultas
    filas = await controlador.find().toArray();
    console.log("Seleccion: ", filas);

    // Modificar registro
    const cambiarCliente = { $set: { genero: 1, telefono: 111222333 } };
    filtro = { nombre: "Pilar Fernández" };
    respuesta = await controlador.updateOne(filtro, cambiarCliente);
    console.log("Actualizado: ", respuesta);

    // Consultas
    filtro = { genero: 1 };
    filas = await controlador.find(filtro).toArray();
    console.log("Seleccion: ", filas);

    /* // Eliminar un registro
    filtro = { nombre: "Pilar Fernández" };
    respuesta = await controlador.deleteOne(filtro);
    console.log("Eliminado: ", respuesta);

    // Consultas
    filas = await controlador.find().toArray();
    console.log("Seleccion: ", filas);*/
  } catch (error) {
    console.log(error);
  }
}

usar();
