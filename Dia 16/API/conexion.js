// Configurar la conexión con la DB en MongoDB
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

// Desarrollar una función para conectarnos con la base y devolver el objeto que contiene la conexion

const conexionDB = async () => {
  try {
    const dbClient = await client.connect();
    return dbClient;
  } catch (error) {
    return error;
  }
};

// exportar para otro módulo
module.exports = { conexionDB };
