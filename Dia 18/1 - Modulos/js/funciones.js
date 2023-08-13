let nombre = "Pilar";
function cambiarNombre(nuevo) {
  nombre = nuevo;
}

function enviarMensaje() {
  alert(nombre + " te ha enviao un mensaje");
}

export default { cambiarNombre, enviarMensaje };
