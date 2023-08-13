// Configurar con expresJS el servidor de la app
const express = require("express");
const app = express();

//Guardar el componente mysql que importamos
const mySQL = require("./conexion");
app.use(express.json());

// Metodo GET para consultar un estudiante
app.get("/estudiantes/:legajo", (peticion, respuesta) => {
  mySQL.conexion.query(
    "SELECT * FROM estudiantes WHERE legajo= " + peticion.params.legajo,
    function (error, resultado) {
      if (error) throw error;
      respuesta.send(resultado);
    }
  );
});

// Método POST para agregar un estudiante
app.post("/estudiantes/create", (peticion, respuesta) => {
  mySQL.conexion.query(
    `INSERT INTO estudiantes (nombre, email) VALUES ('${peticion.body.nombre}' , '${peticion.body.email}')`,
    (error, resultado) => {
      if (error) throw error;
      respuesta.send(`Estudiante registrado: Id ${resultado.insertId}`);
    }
  );
});

//Método POST para agregar una nota
app.post("/notas/create", (peticion, respuesta) => {
  mySQL.conexion.query(
    `INSERT INTO examenes (codigo_curso, legajo_estudiante, nota, fecha) 
  VALUES ('${peticion.body.curso}', '${peticion.body.estudiante}', ${peticion.body.nota}, '${peticion.body.fecha}')`,
    (error, resultado) => {
      if (error) throw error;
      respuesta.send(`Exámen registrado: id ${resultado.insertId}`);
    }
  );
});

// Método PUT para actualizar una nota
app.put("/notas/:id/update", (peticion, respuesta) => {
  mySQL.conexion.query(
    `UPDATE examenes SET codigo_curso = '${peticion.body.curso}', 
                        legajo_estudiante= ${peticion.body.estudiante},
                        nota= ${peticion.body.nota},
                        fecha= '${peticion.body.fecha}'
                        WHERE idexamen = ${peticion.params.id}`,
    function (error, resultado) {
      if (error) {
        console.log(error);
        throw error;
      }
      respuesta.send("Examen modificado");
    }
  );
});

// Método DELETE para borrar una nota
app.delete("/notas/:id/delete", (peticion, respuesta) => {
  mySQL.conexion.query(
    `DELETE FROM examenes where idexamen = ${peticion.params.id};`,
    (error, resultado) => {
      if (error) throw error;
      respuesta.send("Examen eliminado");
    }
  );
});

// Método GET para obtener las notas aprobadas
app.get("/notas/:codigo/aprobados", (peticion, respuesta) => {
  mySQL.conexion.query(
    `SELECT * FROM examenes WHERE codigo_curso = '${peticion.params.codigo}' AND nota > 5`,
    (error, resultado) => {
      if (error) throw error;
      respuesta.send(resultado);
    }
  );
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("El servidor está en línea");
});
//Cerramos la conexión
//connection.end();
