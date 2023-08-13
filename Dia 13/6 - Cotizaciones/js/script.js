window.onload = cargarContenido;

function cargarContenido() {
  // Función que carga las cotizaciones
  cargarCotizaciones(mostrarCotizacion);

  // Función que cargue los elementos

  cargarElementos();

  // Función que cargue los textos

  cargarTextos();
}

async function cargarCotizaciones(callback) {
  await delay(5000);
  let promesa1 = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  callback(await promesa1.json());

  let promesa2 = await fetch("https://open.er-api.com/v6/latest/USD");
  let datos2 = await promesa2.json();
  document.getElementById("UsdEuro").append(datos2.rates.EUR);

  let datos3 = await crearPedido("https://open.er-api.com/v6/latest/ARS");
  document.getElementById("UsdArs").append(datos3.rates.USD);

  document.getElementById("espera").style.visibility = "hidden";
}

function cargarElementos() {
  document.getElementById("imgLogo").setAttribute("src", "img/587.jpg");
  document.getElementById("titulo").textContent = "Cotizaciones Online";
  document.getElementById("espera").setAttribute("src", "img/loading.gif");
  document.getElementById("espera").style.visibility = "visible";
}

function cargarTextos() {
  document.getElementById("UsdEuro").append("EUR a USD: ");
  document.getElementById("UsdArs").append("ARG a USD: ");
  document.getElementById("BitcoinUsd").append("BITCOIN a USD: ");
}

// función callback
function mostrarCotizacion(datos) {
  document.getElementById("BitcoinUsd").append(datos.bpi.USD.rate);
}

async function crearPedido(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.send();
  });
}

function delay(ms) {
  return new Promise(function (res) {
    setTimeout(res, ms);
  });
}
