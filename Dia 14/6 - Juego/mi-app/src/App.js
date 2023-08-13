import React from "react";
import Encabezado from "./Encabezado";
import Juego from "./Juego";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Encabezado />;
      <Juego limite="10" />
    </div>
  );
}

export default App;
