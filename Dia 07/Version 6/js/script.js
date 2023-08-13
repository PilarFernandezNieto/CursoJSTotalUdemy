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
  let texto = elememto.value;
  let valor = Number(texto);
  return valor;
}

function calcular() {
  let ventas = [];
  let posicionVentas = 0;
  let elementosVentas = document.getElementById("itemsTiendas");

  for (let item of elementosVentas.children) {
    let valorVenta = extraerNumeroDesdeElemento(item.children[1]);
    ventas[posicionVentas] = valorVenta;
    posicionVentas++;
  }

  let totalVentas = sumarTotal(ventas);

  let mensajeSalida = "Total ventas: " + totalVentas;

  let elementoSalida = document.getElementById("parrafoSalida");
  elementoSalida.textContent = mensajeSalida;
  pintarInputs(elementosVentas, ventas);
}

function pintarInputs(contenedor, array) {
  let ventaMayor = calcularMayor(array);
  let ventaMenor = calcularMenor(array);
  let elem;
  for (let item of contenedor.children) {
    elem = item.children[1];

    //reseteamos estilos al elemento
    elem.className = "none";
    if (elem.value == ventaMayor) {
      elem.className = "verde";
    } else if (elem.value == ventaMenor) {
      elem.classList.add("azul");
    }
  }
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
