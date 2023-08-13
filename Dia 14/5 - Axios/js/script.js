function obtenerInfo() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (respuesta) {
      console.log(respuesta.data);
      let listado = document.getElementById("listado");
      for (let i = 0; i < respuesta.data.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = respuesta.data[i].title;
        listado.appendChild(item);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
