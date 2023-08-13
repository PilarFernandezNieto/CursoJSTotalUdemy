const bcrypt = require("bcrypt");
const crypto = require("crypto");

// HASHING - Esta acción no es reversible. El mismo dato genera el mismo hash
function miHash(clave) {
  const ciclos = 10;
  const salt = bcrypt.genSaltSync(ciclos);

  const claveHash = bcrypt.hashSync(clave, salt);

  return claveHash;
}

//ENCRIPTACION
function miEncriptado(dato) {
  const algoritmo = "aes-128-gcm";
  const clave = "pass 16 caracter";
  const vi = crypto.randomBytes(16);

  const cifrado = crypto.createCipheriv(algoritmo, clave, vi);

  let encriptado = cifrado.update(dato, "utf-8", "hex");

  encriptado += cifrado.final("hex");

  return encriptado;
}

module.exports = { miHash, miEncriptado };
