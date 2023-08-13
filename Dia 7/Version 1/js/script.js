window.onload = function () {
  let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

  ventas1 = extraerNumeroDesdeElemento("tienda1");
  ventas2 = extraerNumeroDesdeElemento("tienda2");
  ventas3 = extraerNumeroDesdeElemento("tienda3");
  ventas4 = extraerNumeroDesdeElemento("tienda4");
  ventas5 = extraerNumeroDesdeElemento("tienda5");
  ventas6 = extraerNumeroDesdeElemento("tienda6");

  let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;
  let mensajeSalida = "Total ventas: " + totalVentas;

  let elementoSalida = document.getElementById("parrafoSalida");
  elementoSalida.textContent = mensajeSalida;
};

function extraerNumeroDesdeElemento(elememto) {
  let miElemento = document.getElementById(elememto);
  let texto = miElemento.value;
  let valor = Number(texto);
  return valor;
}
