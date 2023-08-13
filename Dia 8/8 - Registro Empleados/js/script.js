window.onload = function () {
  let add = document.getElementById("add");
  add.addEventListener("click", addEmpleado);
  let mostrar = document.getElementById("mostrar");
  mostrar.addEventListener("click", mostrarEmpleado);
};
let empleados = [];

function Empleado(legajo, nombre, apellido, fecha, cargo) {
  this.legajo = legajo;
  this.nombre = nombre;
  this.apellido = apellido;
  this.fecha = fecha;
  this.cargo = cargo;
}

function addEmpleado(e) {
  let legajoValor = document.getElementById("legajo").value;
  let nombreValor = document.getElementById("nombre").value;
  let apellidoValor = document.getElementById("apellido").value;
  let fechaValor = document.getElementById("fecha").value;
  let cargoValor = document.getElementById("cargo").value;

  let nuevoEmpleado = new Empleado(
    legajoValor,
    nombreValor,
    apellidoValor,
    fechaValor,
    cargoValor
  );

  empleados.push(nuevoEmpleado);
  alert("Empleado ha sido agregado");
  limpiarCampos();
}

function mostrarEmpleado(e) {
  let mensaje = "";
  for (let empleado of empleados) {
    for (let prop in empleado) {
      mensaje += `${prop.toUpperCase()}: ${empleado[prop]}\n`;
    }
  }
  alert(mensaje);
}

function limpiarCampos() {
  document.getElementById("legajo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("cargo").value = "";
}
