let audio = document.getElementById("audio");
let lista = document.getElementById("lista");

lista.addEventListener("change", cambiarCancion);

function cambiarCancion() {
  let cancionElegida = lista.value;
  audio.src = cancionElegida;
  audio.play();
  let evento = new CustomEvent("cambioDeCancion");
  audio.dispatchEvent(evento);
}

audio.addEventListener("cambioDeCancion", mostrarCancion);

function mostrarCancion() {
  console.log("La canción actual es " + lista.value);
}
