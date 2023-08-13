async function crearPost(titulo, contenido) {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // Convierte un objeto javascript en un json
      body: JSON.stringify({
        title: titulo,
        body: contenido,
        userId: 1,
      }),
    });
    if (!respuesta.ok) {
      throw new Error("Error en la solicitud: " + respuesta.statusText);
    }
    let data = await respuesta.json();
    console.log("Registro creado: ", data);
  } catch (error) {
    console.error("Algo salió mal al crear el registro: ", error);
  }
}

crearPost("Mi tíutlo de ejemplo", "Mi contenido de ejemplo");
