window.onload = function () {
  let salida;
  let banco = document.getElementById("banco");
  let sucursal = document.getElementById("sucursal");
  let titular = document.getElementById("titular");
  let cuenta = document.getElementById("cuenta");
  let cbu = document.getElementById("cbu");
  let abierto = document.getElementById("abierto");
  let valores = document.getElementById("valores");

  fetch("./resumen.json")
    .then((res) => res.json())
    .then((salida) => {
      banco.textContent = salida.banco;
      sucursal.textContent = salida.sucursal;
      titular.textContent = salida.titular;
      cuenta.textContent = salida.nro_cuenta;
      cbu.textContent = salida.cbu;
      abierto.textContent = salida.abierto;
      let saldo = salida.saldo;

      for (let s of saldo) {
        let fila = document.createElement("tr");
        let moneda = document.createElement("td");
        moneda.textContent = s.moneda;
        fila.appendChild(moneda);
        let monto = document.createElement("td");
        if (s.moneda === "USD") {
          monto.textContent = `${s.monto}$`;
        } else if (s.moneda === "EUR") {
          monto.textContent = `${s.monto}€`;
        }
        fila.appendChild(monto);
        valores.appendChild(fila);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
