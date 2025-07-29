//ejercicio

const button = document.querySelector("#añadir");
const input = document.querySelector("input");
const error = document.querySelector(".bg-red-500");
const ul = document.querySelector("ul");

/* button.addEventListener("click", handleClick); */

/* function handleClick() {
  if (input.value === "") {
    error.classList.remove("hidden");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;
  li.appendChild(span);
  ul.appendChild(li);
  input.value = "";
  error.classList.add("hidden");
} */

const prestamos = [
  {
    nombre: "Express",
    descripcion: "Para salir del apriete (a veces literal 😅)",
    tasaInteres: 50,
    maxCuotas: 6,
    montoMax: 600.0,
  },
  {
    nombre: "Así nomás",
    descripcion:
      "¡A sola firma! Rápido y sin mirar. Cuántas veces lo hicisite... Total para qué leer si no es que te sobren opciones",
    tasaInteres: 300,
    maxCuotas: 4,
    montoMax: 700.0,
  },
  {
    nombre: "Tu primer auto",
    descripcion:
      "No es que WOW EL AUTO, pero para algo con volante te alcanza. Al menos con ruedas. Sí te vamos a exigir que puedas trasladarte en lo que sea que te compres.",
    tasaInteres: 50,
    maxCuotas: 6,
    montoMax: 600.0,
  },
  {
    nombre: "Tasa Fija (hasta que explote todo)",
    descripcion: "Lo bueno: no cambia. Lo malo: es criminal desde el inicio 🔥",
    tasaInteres: 210,
    maxCuotas: 12,
    montoMax: 3000.0,
  },
  {
    nombre: "Respirá Hondo",
    descripcion: "Ideal para cuando el sueldo se va antes de llegar 💸",
    tasaInteres: 75,
    maxCuotas: 3,
    montoMax: 500.0,
  },
];

const cards = document.querySelector("#prestamos-container");

const misPrestamos = prestamos.map(
  (prestamo) => `
          <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 class="text-2xl font-bold text-gray-800 mb-2 capitalize">
            ${prestamo.nombre}
            </h2>
             <p class="text-base text-gray-700 mb-3">
            ${prestamo.descripcion}
            </p>
            <p class="text-sm text-gray-500 mb-1">Tasa de interés</p>
            <p class="text-xl font-semibold text-blue-600 mb-3">
            ${prestamo.tasaInteres}%
            </p>
            <p class="text-sm text-gray-500 mb-1">Máximo de cuotas</p>
            <p class="text-base font-medium text-gray-800">
            ${prestamo.maxCuotas}
            </p>
            <button class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"> Pedir ahora </button>
          </div>`
);

cards.innerHTML = misPrestamos.join("");

/* document.querySelector(`#prestamos-container`).innerHTML =
  misPrestamos.join(""); //me ayudó chatgpt porque con las clases de tailwind quedaban mal distribuidas. La explicación es que join ubica las tarjetas así ""<div>Card 1</div><div>Card 2</div>"" y así funciona bien la clase asignada al contenedor padre en este caso el #prestamos-container */

/// ---- agregar préstamo de usuario ------

const nombre = document.querySelector(`#nombre`);
const monto = document.querySelector(`#monto`);
const cuotas = document.querySelector(`#cuotas`);
userNameLogueado = document.querySelector(`#nombre-usuario`);
userNameLogueado.textContent = localStorage.getItem("nombreUsuario");

class prestamoUser {
  constructor(nombre, monto, cuotas) {
    this.nombre = nombre;
    this.monto = monto;
    this.cuotas = cuotas;
    this.tasaInteres = this.calcularTasa(); //se usa this antes de la función porque pertenece al objeto
    this.total = this.calcularTotal();
    this.valorCuota = this.calcularCuota();
  }

  calcularTasa() {
    if (this.monto >= 1000000 && this.monto < 2000000) {
      if (this.cuotas <= 3) return 0.85;
      if (this.cuotas <= 6) return 0.95;
      if (this.cuotas <= 12) return 1.1;
      if (this.cuotas <= 18) return 1.25;
      if (this.cuotas > 18) return 2.25;
    }

    if (this.monto >= 2000000 && this.monto < 4000000) {
      if (this.cuotas <= 3) return 1.0;
      if (this.cuotas <= 6) return 1.15;
      if (this.cuotas <= 12) return 1.3;
      if (this.cuotas <= 18) return 1.5;
      if (this.cuotas <= 24) return 1.7;
      if (this.cuotas > 24) return 1.7;
    }

    if (this.monto >= 4000000 && this.monto < 8000000) {
      if (this.cuotas <= 3) return 1.2;
      if (this.cuotas <= 6) return 1.4;
      if (this.cuotas <= 12) return 1.6;
      if (this.cuotas <= 18) return 1.85;
      if (this.cuotas <= 24) return 2.1;
      if (this.cuotas <= 36) return 2.4;
      if (this.cuotas > 36) return 4.4;
    }

    if (this.monto >= 8000000 && this.monto < 16000000) {
      if (this.cuotas <= 3) return 1.5; 
      if (this.cuotas <= 6) return 1.8; 
      if (this.cuotas <= 12) return 2.2;
      if (this.cuotas <= 18) return 2.6; 
      if (this.cuotas <= 24) return 3.0;
      if (this.cuotas <= 36) return 3.5; 
      if (this.cuotas <= 48) return 4.0;
      if (this.cuotas > 48) return 6.0;  
    }

    if (this.monto >= 16000000 && this.monto < 30000000) {
      if (this.cuotas <= 6) return 2.5; 
      if (this.cuotas <= 12) return 3.2;
      if (this.cuotas <= 18) return 4.0; 
      if (this.cuotas <= 24) return 4.8; 
      if (this.cuotas <= 36) return 5.7; 
      if (this.cuotas <= 48) return 6.5; 
      if (this.cuotas <= 60) return 7.3; 
      if (this.cuotas > 60) return 10.3; 
    }

    if (this.monto >= 30000000) {
      if (this.cuotas <= 6) return 3.5; 
      if (this.cuotas <= 12) return 5.0; 
      if (this.cuotas <= 18) return 6.8; 
      if (this.cuotas <= 24) return 8.5; 
      if (this.cuotas <= 36) return 11.0; 
      if (this.cuotas <= 48) return 14.0; 
      if (this.cuotas <= 60) return 17.5; 
      if (this.cuotas > 60) return 23.5; 
    }
  }

  calcularTotal() {
    return this.monto * (1 + this.tasaInteres);
  }

  calcularCuota() {
    return this.total / this.cuotas;
  }

  cardNuevoPrestamo() {
    return `
      <div class="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-4">
        <h2 class="text-2xl font-bold text-gray-800 mb-2 capitalize">${
          this.nombre
        }</h2>
        <p class="text-base text-gray-700 mb-1">Monto solicitado: $${
          this.monto
        }</p>
        <p class="text-base text-gray-700 mb-1">Cantidad de cuotas: ${
          this.cuotas
        }</p>
        <p class="text-base text-gray-700 mb-1">Tasa de interés: ${
          this.tasaInteres * 100
        }%</p>
        <p class="text-base font-semibold text-blue-600">Total a devolver: $${
          this.total
        }</p>
        <p class="text-base text-gray-700 mb-1">Monto estimado por cuota: $${
          this.valorCuota
        }</p>
        <button class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"> Pedir ahora </button>
      </div>
    `;
  }
}

let prestamosUser = [];

let prestamosGuardados = JSON.parse(localStorage.getItem("prestamosUser"));

const simular = document.querySelector("#simular");

simular.addEventListener("click", handleClick);

function handleClick() {
  const advertencia = document.querySelector(`#advertenciaMonto`);

  if (nombre.value === "" || monto.value < 1_000_000 || cuotas.value === 0) {
    advertencia.classList.remove("hidden");
    return;
  }
  advertencia.classList.add("hidden");
  const nuevoPrestamo = new prestamoUser(
    nombre.value,
    Number(monto.value),
    Number(cuotas.value)
  );
  prestamosUser.push(nuevoPrestamo);
  localStorage.setItem("prestamosUser", JSON.stringify(prestamosUser));

  const divCard = document.createElement("div");
  divCard.innerHTML = nuevoPrestamo.cardNuevoPrestamo();
  const contenedor = document.querySelector("#info-dinamica");
  contenedor.classList.remove("hidden");
  contenedor.appendChild(divCard);
  const mensajeVacio = document.querySelector("#mensaje-vacio");
  mensajeVacio.classList.add("hidden");

  nombre.value = "";
  monto.value = "";
  cuotas.value = "";

  console.log("Nuevo préstamo:", nuevoPrestamo);
}
