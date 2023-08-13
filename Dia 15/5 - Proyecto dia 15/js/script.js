window.onload = cargarDatos;
let tbody = document.getElementById("datosListado");
let btnConsulta = document.getElementById("consulta");
let consultaID = document.getElementById("consultaId");
let btnAdd = document.getElementById("add");
let btnModificar = document.getElementById("modificacion");
let btnBorrar = document.getElementById("borrado");
btnConsulta.addEventListener("click", buscarPorId);
btnAdd.addEventListener("click", addDevice);
btnModificar.addEventListener("click", modificar);
btnBorrar.addEventListener("click", borrar);
async function cargarDatos() {
  let respuesta = await fetch(
    "https://my-json-server.typicode.com/fedegaray/telefonos/db"
  );
  let datos = await respuesta.json();
  procesaDatos(datos.dispositivos);
}

function procesaDatos(datos) {
  for (let dato of datos) {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${dato.id}</td>
                    <td>${dato.marca}</td>
                    <td>${dato.modelo}</td>
                    <td>${dato.color}</td>
                    <td>${dato.almacenamiento}</td>
                    <td>${dato.procesador}</td>`;

    tbody.appendChild(fila);
  }
}

async function buscarPorId() {
  let identificador = consultaID.value;
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${identificador}`
    );
    const dato = await res.json();
    procesaDato(dato);
  } catch (error) {
    return console.error(error);
  }
}

function procesaDato(dato) {
  document.getElementById("id").value = dato.id;
  document.getElementById("marca").value = dato.marca;
  document.getElementById("modelo").value = dato.modelo;
  document.getElementById("color").value = dato.color;
  document.getElementById("almacenamiento").value = dato.almacenamiento;
  document.getElementById("procesador").value = dato.procesador;
}

async function addDevice() {
  let id = document.getElementById("addId").value;
  let marca = document.getElementById("addMarca").value;
  let modelo = document.getElementById("addModelo").value;
  let color = document.getElementById("addColor").value;
  let almacenamiento = document.getElementById("addAlmacenamiento").value;
  let procesador = document.getElementById("addProcesador").value;
  try {
    let respuesta = await fetch(
      "https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          marca: marca,
          modelo: modelo,
          color: color,
          almacenamiento: almacenamiento,
          procesador: procesador,
        }),
      }
    );
    if (respuesta.ok) {
      console.log("Dispositivo añadido correctamente");
    }
    let dato = await respuesta.json();
    alert("Añadido: " + dato.marca + " " + dato.modelo);
  } catch (error) {
    console.error("Algo ha ido mal", error);
  }
}

async function modificar() {
  let id = document.getElementById("id").value;
  let marca = document.getElementById("marca").value;
  let modelo = document.getElementById("modelo").value;
  let color = document.getElementById("color").value;
  let almacenamiento = document.getElementById("almacenamiento").value;
  let procesador = document.getElementById("procesador").value;

  try {
    let respuesta = await fetch(
      `https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          marca: marca,
          modelo: modelo,
          color: color,
          almacenamiento: almacenamiento,
          procesador: procesador,
        }),
      }
    );
    if (respuesta.ok) {
      console.log("El dispositivo se ha modificado");
    }
    let dato = await respuesta.json();
    console.log(dato);
  } catch (error) {
    console.error("Algo ha ido mal", error);
  }
}

async function borrar() {
  let id = document.getElementById("id").value;
  try {
    let respuesta = await fetch(
      `https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`,
      {
        method: "DELETE",
      }
    );
    if (respuesta.ok) {
      document.getElementById("id").value = "";
      document.getElementById("marca").value = "";
      document.getElementById("modelo").value = "";
      document.getElementById("color").value = "";
      document.getElementById("almacenamiento").value = "";
      document.getElementById("procesador").value = "";
      console.log("Borrado correcto");
    }
  } catch (error) {
    console.error("Algo ha ido mal", error);
  }
}
