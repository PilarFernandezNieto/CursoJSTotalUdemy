window.onload = inicio;
let promedio = document.getElementById("promedio");
let maxima = document.getElementById("maxima");
let aplazo = document.getElementById("aplazo");
let listado = document.getElementById("listado");
let lista = document.getElementById("lista");
let info = document.getElementById("info");

promedio.addEventListener("click", prom);
maxima.addEventListener("click", max);
aplazo.addEventListener("click", apla);
//listado.addEventListener("click", listar);

let calificaciones = [3.5, 10, 8.2, 7, 9.5];

function inicio(e) {
  for (nota of calificaciones) {
    let fila = document.createElement("li");
    fila.textContent = nota;
    lista.appendChild(fila);
  }
}
function prom() {
  info.textContent = "";
  let cont = calificaciones.length;
  let suma = 0;
  for (let i = 0; i < cont; i++) {
    suma += calificaciones[i];
  }
  info.textContent = "Nota media: " + (suma / cont).toFixed(2);
}

function max() {
  var notamaxima = calificaciones[0];
  for (let i = 1; i < calificaciones.length; i++) {
    if (calificaciones[i] > notamaxima) {
      notamaxima = calificaciones[i];
    }
  }

  info.textContent = "Nota maxima: " + notamaxima;
}
function apla() {
  let i = 0;
  let aplazo = false;
  do {
    if (calificaciones[i] < 4) {
      aplazo = true;
      break;
    }
    i++;
  } while (i <= calificaciones.length);
  if (aplazo) {
    info.textContent = "Hay aplazos";
  } else {
    info.textContent = "No hay aplazos";
  }
}
