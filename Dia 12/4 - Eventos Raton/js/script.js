let boton = document.querySelector("#btn");
let menu = document.querySelector("#menu");

function muestraMenu(e) {
  menu.classList.toggle("mostrar");
}

//boton.addEventListener("click", muestraMenu);
boton.addEventListener("mouseover", muestraMenu);
boton.addEventListener("mouseout", muestraMenu);

document.addEventListener("mousemove", (e) => {
  console.log("Posición X: " + e.clientX + " - " + "Posicion Y: " + e.clientY);
});
