const loginForm = document.querySelector("#login-form");
const userName = document.querySelector("#usuario");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector("#error-message");
const buttonLogin = document.querySelector("#button-login");
const userNameLogueado = document.querySelector("#nombre-usuario");

buttonLogin.addEventListener("click", handleLogin);

function handleLogin() {
  if (passwordInput.value === "123456") {
    window.location.href = "index.html";
    localStorage.setItem("nombreUsuario", userName.value);
    } else {
      error.classList.remove("hidden");
      passwordInput.value = "";
    }
  }

