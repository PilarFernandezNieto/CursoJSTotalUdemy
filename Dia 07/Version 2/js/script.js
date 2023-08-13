window.onload = function () {
  let boton = document.getElementById("btnCalculo");
  boton.addEventListener("click", calcular);
};

function calcular() {
  let ventas = [];

  ventas[0] = extraerNumeroDesdeElemento("tienda1");
  ventas[1] = extraerNumeroDesdeElemento("tienda2");
  ventas[2] = extraerNumeroDesdeElemento("tienda3");
  ventas[3] = extraerNumeroDesdeElemento("tienda4");
  ventas[4] = extraerNumeroDesdeElemento("tienda5");
  ventas[5] = extraerNumeroDesdeElemento("tienda6");

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = calcularMayor(ventas);
  let ventaMenor = calcularMenor(ventas);

  let mensajeSalida =
    "Total ventas: " +
    totalVentas +
    " / Venta mayor: " +
    ventaMayor +
    " / Venta menor: " +
    ventaMenor;

  let elementoSalida = document.getElementById("parrafoSalida");
  elementoSalida.textContent = mensajeSalida;
}

function extraerNumeroDesdeElemento(elememto) {
  let miElemento = document.getElementById(elememto);
  let texto = miElemento.value;
  let valor = Number(texto);
  return valor;
}
function sumarTotal(array) {
  let total = 0;
  for (let venta of array) {
    total += venta;
  }
  return total;
}
function calcularMayor(array) {
  let maximo = array[0];
  for (let venta of array) {
    if (venta > maximo) {
      maximo = venta;
    }
  }
  return maximo;
}
function calcularMenor(array) {
  let minimo = array[0];
  for (let venta of array) {
    if (venta < minimo) {
      minimo = venta;
    }
  }
  return minimo;
}
