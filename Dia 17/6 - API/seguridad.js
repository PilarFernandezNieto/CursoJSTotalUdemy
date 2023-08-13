// Generar tokens
const jwt = require("jsonwebtoken");
const claveSecreta = "esta_es_una_clave_para_token";

function crearToken(idUsuario, usuario) {
  // Almacenar esa información en un objeto
  const informacion = {
    usuario_id: idUsuario,
    usuario: usuario,
  };

  // Generar el JWT
  const token = jwt.sign(informacion, claveSecreta, {
    expiresIn: "1h",
  });
  return token;
}
function validarToken(peticion, res, next) {
  // Obtener el token del encabezado de la autorizacion
  const token = peticion.headers.authorization;

  // Verificar y decodificar el token
  try {
    const decodificado = jwt.verify(token.split(" ")[1], claveSecreta);
    peticion.user = decodificado;
    next();
  } catch (error) {
    return res.status(401).send("Token de autorización inválido");
  }
}

module.exports = { crearToken, validarToken };
