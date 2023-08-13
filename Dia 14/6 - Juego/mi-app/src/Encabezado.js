import Logo from "./vintage.jpg";

function Encabezado() {
  return (
    <div className="header">
      <h1 className="titulo">Adivina el número</h1>
      <img src={Logo} alt="logo del sitio" />
    </div>
  );
}
export default Encabezado;
