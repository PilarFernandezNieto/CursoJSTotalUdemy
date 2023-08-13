function calcularLitros(){
    let km = document.getElementById("textoKM").value;
    let cantKM = Number(km);

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + (cantKM / 8.8) + " litros de combustible";
}