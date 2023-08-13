const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./conexion");
const seguridad = require("./seguridad");

app.use(cors());
app.use(express.json());

app.post("/create", (peticion, respuesta) => {
  let mailEncriptado = seguridad.miEncriptado(peticion.body.mail);
  let passwordHashing = seguridad.miHash(peticion.body.password);
  mySQL.connection.query(
    `INSERT INTO usuarios(user, password) VALUES('${mailEncriptado}', '${passwordHashing}')`,
    function (error, resultado) {
      if (error) throw error;
      respuesta.send("Usuario creado correctamente");
    }
  );
});

app.listen(3000, () => {
  console.log("El servidor está en línea");
});
