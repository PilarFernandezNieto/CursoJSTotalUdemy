class Animal {
  constructor(nombre, peso, edad) {
    this._nombre = nombre;
    this._peso = peso;
    this._edad = edad;
  }
  informacion() {
    return `${this._nombre} - ${this._peso}kg - ${this._edad} años`;
  }
}

class Perro extends Animal {
  constructor(nombre, peso, edad, raza) {
    super(nombre, peso, edad);
    this._raza = raza;
  }
  informacion() {
    return `Perro - ${this._nombre} - ${this._peso}kg - ${this._edad} años - ${this._raza}`;
  }
}
class Gato extends Animal {
  constructor(nombre, peso, edad, sexo) {
    super(nombre, peso, edad);
    this._sexo = sexo;
  }
  informacion() {
    return `Gato - ${this._nombre} - ${this._peso}kg - ${this._edad} años - ${this._sexo}`;
  }
}

class Conejo extends Animal {
  constructor(nombre, peso, edad, color) {
    super(nombre, peso, edad);
    this._color = color;
  }
  informacion() {
    return `Conejo - ${this._nombre} - ${this._peso}kg - ${this._edad} años - Color: ${this._color}`;
  }
}
let perro = new Perro("Romeo", 3, 13, "YorkShire");
let gato = new Gato("Margarita", 7, 8, "Hembra");
let conejo = new Conejo("Mimi", 2, 4, "Blanco");
let animales = [perro, gato, conejo];
let boton = document.getElementById("boton");
let listado = document.getElementById("listado");

window.onload = function () {
  boton.addEventListener("click", mostrar);
};
function mostrar() {
  for (let animal of animales) {
    let item = document.createElement("li");
    item.innerText = animal.informacion();
    listado.appendChild(item);
  }
}
