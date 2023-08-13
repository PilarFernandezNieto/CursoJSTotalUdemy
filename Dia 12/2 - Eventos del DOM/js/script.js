let boton = document.getElementById("btn");
let div = document.getElementById("miDiv");

function mostrarMensaje(event) {
  //alert(event.target);
  console.log(event);
  alert(event.target);
  alert(event.currentTarget);
  //console.log(event.currentTarget);
}

div.addEventListener("click", mostrarMensaje);
