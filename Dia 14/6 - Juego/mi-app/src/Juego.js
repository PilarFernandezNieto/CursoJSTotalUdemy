import React from "react";

function Juego(props) {
  let [valor, valorActualizado] = React.useState(0);
  let [numeroMaquina, setNumeroMaquina] = React.useState(
    Math.floor(Math.random() * props.limite + 1)
  );
  console.log(numeroMaquina);

  function getValor(e) {
    valorActualizado(e.target.value);
  }
  function comprobarValor() {
    // eslint-disable-next-line
    if (valor == numeroMaquina) {
      alert("Adivinaste");
    } else {
      alert("Fallaste, la respuesta era: " + numeroMaquina);
    }
    setNumeroMaquina(Math.floor(Math.random() * props.limite + 1));
  }
  return (
    <div>
      <p>Elige un número del 1 al 10</p>
      <input
        type="number"
        placeholder="Introduce tu apuesta"
        min={1}
        max={10}
        onChange={getValor}
      />
      <button onClick={comprobarValor}>Adivinar</button>
    </div>
  );
}

export default Juego;
