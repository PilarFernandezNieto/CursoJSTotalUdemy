function crearTiendas(contenedorID, min, cantidadTiendas) {
  // Encontrar contenedor por su ID
  let elementoContenedor = document.getElementById(contenedorID);

  // Loop para crear las tiendas que se pidan
  for (let i = 1; i <= cantidadTiendas; i++) {
    // crear texto del label para llamar a la función
    let textoEtiqueta = "Tienda " + i;

    // Crear tiendas con la función correspondiente
    let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);

    //Agregar el párrafo al contenedor
    elementoContenedor.appendChild(parrafoTienda);
  }
}
function crearParrafoTienda(textoLabel, valorMin) {
  // Crear las etiquetas de párrafo
  let parrafo = document.createElement("p");

  // Crear la etiqueta label
  let label = document.createElement("label");

  // Conectar etiqueta con input mediante un id
  label.setAttribute("for", textoLabel);
  label.innerText = textoLabel + ": ";

  // Crear el input
  let inputElement = document.createElement("input");

  // Establecer atributos de input
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("id", textoLabel);
  inputElement.setAttribute("min", valorMin);

  // Agregar label e input al párrafo
  parrafo.appendChild(label);
  parrafo.appendChild(inputElement);

  // Devolver el párrafo completo

  return parrafo;
}

function extraerNumeroDesdeElemento(elememto) {
  let miElemento = document.getElementById(elememto);
  let texto = miElemento.value;
  let valor = Number(texto);
  return valor;
}

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
