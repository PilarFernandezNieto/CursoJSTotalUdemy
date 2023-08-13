window.onload = function () {
  document.getElementById("suma").addEventListener("click", suma);
  document.getElementById("resta").addEventListener("click", resta);
  document.getElementById("multiplica").addEventListener("click", multiplica);
  document.getElementById("divide").addEventListener("click", divide);
  document.getElementById("raiz").addEventListener("click", raiz);
  document.getElementById("potencia").addEventListener("click", potencia);
  document.getElementById("floor").addEventListener("click", floor);
  document.getElementById("ceil").addEventListener("click", ceil);
  document.getElementById("absoluto").addEventListener("click", absoluto);
  document.getElementById("random").addEventListener("click", random);
  document.getElementById("round").addEventListener("click", round);

  let res = document.getElementById("resultado");

  function mostrar(resul) {
    res.value = resul;
  }
  function suma() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let res = op1 + op2;
    mostrar(res);
  }
  function resta() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let res = op1 - op2;
    mostrar(res);
  }
  function multiplica() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let res = op1 * op2;
    mostrar(res);
  }
  function divide() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let res;
    if (op2 === 0) {
      res = "Error";
    } else {
      res = op1 / op2;
    }
    mostrar(res);
  }
  function raiz() {
    let op1 = Number(document.getElementById("num1").value);
    let res = Math.sqrt(op1);
    mostrar(res);
  }
  function potencia() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let res;
    if (op2 === 0) {
      res = 1;
    } else {
      res = Math.pow(op1, op2);
    }
    mostrar(res);
  }

  function absoluto() {
    mostrar(Math.abs(res.value));
  }
  function random() {
    let op1 = Number(document.getElementById("num1").value);
    let op2 = Number(document.getElementById("num2").value);
    let min, max;
    if (op1 > op2) {
      min = op2;
      max = op1;
    } else {
      min = op1;
      max = op2;
    }
    let res = Math.random() * (max - min) + min;
    mostrar(res);
  }
  function round() {
    mostrar(Math.round(res.value));
  }
  function floor() {
    mostrar(Math.floor(res.value));
  }
  function ceil() {
    mostrar(Math.ceil(res.value));
  }
};
