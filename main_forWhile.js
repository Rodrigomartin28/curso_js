//condiciones

let Social = true; 

if (Social) {
    console.warn("con obra social");
} 

//switch

let obraSocial = "Swiss Medical"

switch (obraSocial) {
  case "Swiss Medical":
  case "nobis":
    console.log("obra social correcta");
  deafult:
    console.log("incorrecto");
}

//ejercicio 1. Preguntar la edad por prompt y mostrar un alert según la edad. 

let age = prompt("Enter your age");

if(age < 18) {
    alert ("Menor de edad");
} else if(age >= 18 && age <= 65){
    alert ("Mayor de edad");
} else {
    alert ("adulto mayor")
}

//ejercicio 2. Switch. Ingresar un día de la semana mediante propmt y dar diferentes mensajes dependiendo del día

let day = prompt("Day of the week");

switch (day) {
    case "lunes":
    case "martes": 
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("día laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("finde");
        break;
    default: //podríamos anidar otras condiciones dentro del default con if y else
       console.log ("error");          
}

// for y while. For para tareas repetitivas

for (let i = -3; i < 4; i++ ) {
    console.log(i);
}

// operador unario i++ le suma uno al valor inicial

//While. No controlamos cuando se acaba. Se ejecuta mientras la condición sea true.

let valorCorrecto = 1
let valorUsuario = prompt("Adivina el caracter");

while (valorCorrecto != valorUsuario) {
    valorUsuario = prompt("intenta de nuevo");
}

//cuando sale del while pasa a otra línea

alert("Win");

// demo operadores 

let ingresos = 10000;
let obraScl = true;

if (ingresos >=10000 && obraScl){
    console.log("Ingresos aceptados");
} else {
    console.log("ingresos inaceptables");
}

//&& con and se deben cumplir ambas condiciones

//ciclos: línea que permite repetir una instrucción. Los hay por repetición y condicionales todo lo que está entre llaves es lo que se repite en el ciclo
//for
for(let i = 0; i < 5; i++ ) {
    console.log("Ciclos");
}

//condicionales. Repetir un bloque de código mientras una condición sea verdadera.
const password = "1234";
let passwordIngresado = prompt("ingresar contraseña");

while(passwordIngresado != password) {
    passwordIngresado = prompt("ingresar contraseña");
}

//ciclos condicionales y operadores lógicos

const usuarios = [
    {nombre: "María", edad: 20, aceptoTerminos: false},
    {nombre: "Luis", edad: 21, aceptoTerminos: true},
    {nombre: "Francisco", edad: 25, aceptoTerminos: true}
]

for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].edad >= 21 || usuarios [i].aceptoTerminos) {
        console.log(usuarios[i].nombre)
    }
}




