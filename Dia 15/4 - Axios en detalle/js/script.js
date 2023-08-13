/* METODO GET */
/*axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });*/

/* METODO POST */
/*let datos = {
  title: "Nuevo post",
  body: "Mi contenido",
};

axios
  .post("https://jsonplaceholder.typicode.com/posts", datos)
  .then((res) => {
    console.log("Post creado con éxito", res.data);
  })
  .catch((err) => {
    console.error("Error al publicar", err);
  });*/

let pedido1 = axios.get("https://api.ejemplo.com/data1");
let pedido2 = axios.get("https://api.ejemplo.com/data2");
let pedido3 = axios.get("https://api.ejemplo.com/data3");

axios
  .all([pedido1, pedido2, pedido3])
  .then(
    axios.spread((res1, res2, res3) => {
      // Código
    })
  )
  .catch((error) => {
    // Manejar errores
  });
