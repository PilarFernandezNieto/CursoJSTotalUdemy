let usuario = "Federico";
let password = "JavaScriptTotal";
let token = "miToken";

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  credentials: "include",
  cache: "no-cache",
  redirect: "manual",
  headers: {
    // Authorization: "Basic" + btoa(usuario + ":" + password),
    Authorization: "Bearer" + token,
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  // .then((response) => {
  //   if (response.type === "opaqueredirect") {
  //     let nuevaUbicacion = response.headers.get("Location");
  //     console.log("Redirigiendo a: ", nuevaUbicacion);
  //   } else {
  //     response.json();
  //   }
  // })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
