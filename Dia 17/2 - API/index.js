const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./conexion");

app.use(express.json());
app.use(cors());

app.post("/login", (peticion, respuesta) => {
  mySQL.conexion.query(
    `SELECT COUNT(*) AS existe FROM usuarios WHERE user = '${peticion.body.user}' AND password = '${peticion.body.password}'`,
    (error, resultado) => {
      if (error) throw error;
      respuesta.send(resultado[0]);
    }
  );
});

app.listen(3000, () => {
  console.log("El servidor está en línea");
});
