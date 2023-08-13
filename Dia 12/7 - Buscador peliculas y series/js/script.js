let seleccion = document.getElementById("seleccion");
let entrada = document.getElementById("entrada");
let boton = document.getElementById("btn");
let lista = document.getElementById("lista");

let archivo;

seleccion.addEventListener("change", cambiarArchivo);
seleccion.addEventListener("cambioModo", mensajeModo);
entrada.addEventListener("keydown", verificarInput);
boton.addEventListener("click", buscar);

function cambiarArchivo() {
  if (seleccion.value === "pelis") {
    archivo = "archivos/peliculas.json";
  } else if (seleccion.value === "series") {
    archivo = "archivos/series.json";
  }
  let evento = new CustomEvent("cambioModo");
  seleccion.dispatchEvent(evento);
}
function mensajeModo() {
  alert("El archivo de búsqueda es " + archivo);
}

function verificarInput(e) {
  if ((e.key < 65 || e.key > 50) && e.key != 32 && e.key != 8) {
    e.preventDefaul();
  }
}

function buscar() {
  let busqueda = entrada.value;
  let busquedaUpper = busqueda.toUpperCase();
  let datos;
  let nombre;
  let sinopsis;
  fetch(archivo)
    .then((res) => res.json())
    .then((salida) => {
      datos = salida.data;
      for (let dato of datos) {
        nombre = dato.nombre;
        sinopsis = dato.sinopsis;
        if (nombre.startsWith(busquedaUpper)) {
          let item = document.createElement("li");

          item.innerHTML = nombre;
          // let titulo = document.createElement("p");
          // titulo.setAttribute("id", nombre);
          let sin = document.createElement("p");
          // sin.setAttribute("id", "sin");
          // sin.setAttribute("class", "disp");
          // titulo.innerText = nombre;
          sin.innerText = sinopsis;
          sin.id = nombre;
          sin.style = "display:none";
          // item.appendChild(titulo);
          item.appendChild(sin);
          lista.appendChild(item);
          item.addEventListener("mouseover", mostrar);
          item.addEventListener("mouseout", ocultar);
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  entrada.innerHTML = "";
}

function mostrar() {
  document.querySelector("li p").style = "display:block";
}
function ocultar() {
  document.querySelector("li p").style = "display:none";
}
