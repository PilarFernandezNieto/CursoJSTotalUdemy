let envio = document.getElementById("envio");
envio.addEventListener("click", function () {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;

  try {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: usuario,
        password: password,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "") {
          alert("Login incorrecto");
        } else {
          localStorage.setItem("token", data);
          window.location.href = "./home.html";
        }
      })
      .catch((error) => {
        throw new Error("Error en la solicitud " + error);
      });
  } catch (error) {
    console.log(error);
  }
});

function validar(name) {
  const token = localStorage.getItem("token");
  try {
    fetch("http://localhost:3000/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        permiso: name,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        if (data === "") {
          alert("El usuario no tiene acceso a la página solicitada");
        } else {
          window.location.href = `./${data}`;
        }
      })
      .catch((error) => {
        throw new Error("Error en la solicitud: " + error);
      });
  } catch (error) {
    console.log(error);
  }
}
