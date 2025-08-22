const button = document.querySelector("#añadir");
const input = document.querySelector("input");
const error = document.querySelector(".bg-red-500");
const ul = document.querySelector("ul");
const cards = document.querySelector("#prestamos-container");
const nombre = document.querySelector(`#nombre`);
const monto = document.querySelector(`#monto`);
const cuotas = document.querySelector(`#cuotas`);
const userNameLogueado = document.querySelector(`#nombre-usuario`);
const simular = document.querySelector("#simular");
const advertencia = document.querySelector(`#advertenciaMonto`);
const contenedor = document.querySelector("#info-dinamica");
const mensajeVacio = document.querySelector("#mensaje-vacio");
userNameLogueado.textContent = localStorage.getItem("nombreUsuario");


class prestamoUser {
  constructor(nombre, monto, cuotas) {
    this.nombre = nombre;
    this.monto = monto;
    this.cuotas = cuotas;
    this.tasaInteres = this.calcularTasa();
    this.total = this.calcularTotal();
    this.valorCuota = this.calcularCuota();
  }

  calcularTasa() {
    const rangosTasas = [
      {
        montoMin: 1000000,
        montoMax: 2000000,
        tasas: [
          { cuotasMax: 3, tasa: 0.85 },
          { cuotasMax: 6, tasa: 0.95 },
          { cuotasMax: 12, tasa: 1.1 },
          { cuotasMax: 18, tasa: 1.25 },
          { cuotasMax: Infinity, tasa: 2.25 }
        ]
      },
      {
        montoMin: 2000000,
        montoMax: 4000000,
        tasas: [
          { cuotasMax: 3, tasa: 1.0 },
          { cuotasMax: 6, tasa: 1.15 },
          { cuotasMax: 12, tasa: 1.3 },
          { cuotasMax: 18, tasa: 1.5 },
          { cuotasMax: 24, tasa: 1.7 },
          { cuotasMax: Infinity, tasa: 1.7 }
        ]
      },
      {
        montoMin: 4000000,
        montoMax: 8000000,
        tasas: [
          { cuotasMax: 3, tasa: 1.2 },
          { cuotasMax: 6, tasa: 1.4 },
          { cuotasMax: 12, tasa: 1.6 },
          { cuotasMax: 18, tasa: 1.85 },
          { cuotasMax: 24, tasa: 2.1 },
          { cuotasMax: 36, tasa: 2.4 },
          { cuotasMax: Infinity, tasa: 4.4 }
        ]
      },
      {
        montoMin: 8000000,
        montoMax: 16000000,
        tasas: [
          { cuotasMax: 3, tasa: 1.5 },
          { cuotasMax: 6, tasa: 1.8 },
          { cuotasMax: 12, tasa: 2.2 },
          { cuotasMax: 18, tasa: 2.6 },
          { cuotasMax: 24, tasa: 3.0 },
          { cuotasMax: 36, tasa: 3.5 },
          { cuotasMax: 48, tasa: 4.0 },
          { cuotasMax: Infinity, tasa: 6.0 }
        ]
      },
      {
        montoMin: 16000000,
        montoMax: 30000000,
        tasas: [
          { cuotasMax: 6, tasa: 2.5 },
          { cuotasMax: 12, tasa: 3.2 },
          { cuotasMax: 18, tasa: 4.0 },
          { cuotasMax: 24, tasa: 4.8 },
          { cuotasMax: 36, tasa: 5.7 },
          { cuotasMax: 48, tasa: 6.5 },
          { cuotasMax: 60, tasa: 7.3 },
          { cuotasMax: Infinity, tasa: 10.3 }
        ]
      },
      {
        montoMin: 30000000,
        montoMax: Infinity,
        tasas: [
          { cuotasMax: 6, tasa: 3.5 },
          { cuotasMax: 12, tasa: 5.0 },
          { cuotasMax: 18, tasa: 6.8 },
          { cuotasMax: 24, tasa: 8.5 },
          { cuotasMax: 36, tasa: 11.0 },
          { cuotasMax: 48, tasa: 14.0 },
          { cuotasMax: 60, tasa: 17.5 },
          { cuotasMax: Infinity, tasa: 23.5 }
        ]
      }
    ];
    const rangoMonto = rangosTasas.find(rango => 
      this.monto >= rango.montoMin && this.monto < rango.montoMax
    );
    const tasaEncontrada = rangoMonto.tasas.find(item => 
      this.cuotas <= item.cuotasMax
    );

    return tasaEncontrada.tasa;
  }

  calcularTotal() {
    return this.monto * (1 + this.tasaInteres / 100);
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
        <button class="mt-1 w-full px-3 py-2 rounded-xl shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 pedirAhora"> Pedir ahora </button>
        <button  class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 convertirUSD"> Convertir a USD </button>
      </div>
    `;
  }
}

let prestamosUser = [];

let prestamosGuardados = JSON.parse(localStorage.getItem("prestamosUser"));

simular.addEventListener("click", handleClick);

function handleClick() {
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
  contenedor.classList.remove("hidden");
  contenedor.appendChild(divCard);
  mensajeVacio.classList.add("hidden");

  nombre.value = "";
  monto.value = "";
  cuotas.value = "";

  console.log("Nuevo préstamo:", nuevoPrestamo);

  const botonPedirAhora = divCard.querySelector(".pedirAhora");
  botonPedirAhora.addEventListener("click", handlePedirAhora);

  const botonConvertirUSD = divCard.querySelector(".convertirUSD");
  botonConvertirUSD.addEventListener("click", handleConvertirUSD);
}


function handlePedirAhora() {
  Swal.fire({
    title: "¡Genial! Ya tenés tu préstamo. ¿Viste que no era tan difícil? 🎉",
    html: `
      <p>Si, ya sé... Este simulador tiene sus cositas. Pero estoy aprendiendo. Si pensás que hay algo que sea muy importante corregir, no dudes en ponerte en contacto conmigo.</p>
      <br><br>
      <a href="https://www.linkedin.com/in/rm-rodrigomartin/" target="_blank" 
         style="color:white; background:#0077b5; padding:10px 20px; border-radius:5px; text-decoration:none; display:inline-block;">
         Conectar en LinkedIn
      </a>
      <p>Por ahí nos sale algún laburito, qué se yo</p>
    `,
    icon: "success",
    showCloseButton: true,
  });
}

async function fetchPrestamos() {
  try {
    const response = await fetch("./prestamosDisponibles.json"); 

    const prestamos = await response.json();

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
          <button class="mt-1 w-full px-3 py-2 rounded-xl shadow-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Pedir ahora
          </button>
        </div>`
    );

    cards.innerHTML = misPrestamos.join("");
  } catch (error) {
    console.error("Hubo un problema al obtener los préstamos:", error);
  }
}

fetchPrestamos() 

function handleConvertirUSD() {
  Swal.fire({
    title: "No, no sé tanto... 🤣",
    html: `
      <p>Lo que quiero hacer es traer los datos del préstamo generado y transformarlos con una llamada a una API. ¿Podré? Solo el tiempo dirá...</p>
      <br><br>
      <a href="https://www.linkedin.com/in/rm-rodrigomartin/" target="_blank" 
         style="color:white; background:#0077b5; padding:10px 20px; border-radius:5px; text-decoration:none; display:inline-block;">
         Conectar en LinkedIn
      </a>
      <p>Por ahí nos sale algún laburito, qué se yo</p>
    `,
    icon: "success",
    showCloseButton: true,
  });
}



