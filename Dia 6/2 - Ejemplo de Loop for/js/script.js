function mostrar() {
  let num = Number(document.getElementById("num").value);
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    let texto = num + " x " + i + " = " + num * i;

    let fila = document.createElement("p");
    fila.innerText = texto;
    tabla.appendChild(fila);
  }
}
