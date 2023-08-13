const express = require("express");
const cors = require("cors");
const app = express();

const mySQL = require("./conexion");
const seguridad = require("./seguridad");

app.use(cors());
app.use(express.json());

app.post("/login", (peticion, respuesta) => {
  mySQL.conexion.query(
    `SELECT idusuario FROM usuarios WHERE user = '${peticion.body.user}' AND password = '${peticion.body.password}'`,
    (error, resultados) => {
      if (error) throw error;
      if (resultados.length === 0) {
        respuesta.send(undefined);
      } else {
        respuesta.send(
          seguridad.crearToken(resultados[0]["idusuario"], peticion.body.user)
        );
      }
    }
  );
});
app.post("/validate", seguridad.validarToken, (peticion, respuesta) => {
  mySQL.conexion.query(
    `SELECT p.page FROM permisos p JOIN permisosusuario u ON u.permiso_id = p.id 
    WHERE u.usuario_id = '${peticion.user.usuario_id}' AND p.name = '${peticion.body.permiso}'`,
    (error, resultados) => {
      if (error) throw error;
      if (resultados.length === 0) {
        respuesta.send(undefined);
      } else {
        respuesta.send(resultados[0]["page"]);
      }
    }
  );
});
app.listen(3000, () => {
  console.log("El servidor está en linea");
});
