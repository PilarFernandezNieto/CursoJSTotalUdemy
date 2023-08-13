window.onload = function () {
  let boton = document.getElementById("crear");
  boton.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let clave = document.getElementById("clave").value;

    try {
      fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          password: clave,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(data);
        })
        .catch((error) => {
          throw new Error("Error en la solicitud " + error);
        });
    } catch (error) {
      console.log(error);
    }
  }); //fin del manejador
};
