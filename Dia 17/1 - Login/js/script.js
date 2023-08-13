document.getElementById("envio").addEventListener("click", login);
let cont = 0;
function login() {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;
  let usuarioRegex = /^[a-zA-Z0-9]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (usuario.match(usuarioRegex) && password.match(passwordRegex)) {
    if (cont < 3) {
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
          .then((res) => res.json())
          .then((data) => {
            if (data.existe === 1) {
              window.location.href = "./home.html";
            } else {
              cont++;
              console.log(data.existe);
              console.log("Login incorrecto: " + cont);
            }
          })
          .catch((error) => {
            throw new Error("Error en la solicitud");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      //Metodo que blquee al usuario
      console.log("Usuario blquedo: " + usuario);
    }
  } else {
    alert("El nombre de usuario o el password no cumple las condiciones");
  }
}

limitarCaracteres(document.getElementById("usuario"), 20);
limitarCaracteres(document.getElementById("password"), 20);

function limitarCaracteres(input, maxLength) {
  input.addEventListener("input", function (e) {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
}
