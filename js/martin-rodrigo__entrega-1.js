/* const valorCompra = 1235;
const valorVenta = 1200;

function preguntarNombre {
const 
    
}


function compra () {
    const cantidad = prompt(`cuanto`);
    const total = valorCompra * Number(cantidad);
    alert(total);
}

function venta () {
    const cantidad = prompt(`cuanto`);
    const total = valorVenta * Number(cantidad);
    alert(total);
}

function operacion (op){
    switch (op) {
        case "1": {
            compra ();
            break;

        }
        case "2": {
            venta();
            break;
        }
        default: 
        console.log("error")
    }
}

function llamarAction(){
    const op = prompt(`Qué quiere hacer:

    1- comprar dólares.
    2- vender dólares.`);

    operacion(op);

}

llamarAction() */



/* let dineroPrestar = prompt("Indicá cuánto andás necesitando exactamente, no necesitamos más detalles"); */

/* console.log(dineroPrestar); */ 

/* const tiposDePrestamo = [
    {nombre: "hipotecario",
    interes: 20,
    },
    {nombre: "prendario",
    interes: 5,
    },
    {
    nombre: "vitalicio",
    interes: 25
    }
] */

const nombre = prompt("¿Estás buscando un préstamo? Por favor, indica tu nombre");
let salario = prompt("Solo por curiosidad... Decinos cuánto cobrás (en pesos argentinos)" );


const prestamos = [
{nombre: "hipotecario", tasaInteres: 50, maxCuotas: 24},
{nombre: "personal", tasaInteres: 20, maxCuotas: 12}
]


function prestamoHipotecario () {
    let dineroPrestar  = Number(prompt(`Ok, ¿cuánto dinero necesitás?`));
    while (dineroPrestar > salario) {
        alert(`No podés pedir más de lo que cobrás, campeón`);
        salario = prompt("Ahora en serio, ¿cuánto cobrás?");
        dineroPrestar = Number(prompt(`¿Y cuánto querés que te prestemos?`));
    }
    let cuotas = Number(prompt(`En cuántas cuotas vas a devolver el dinero? El máximo es de ${prestamos[0].maxCuotas}`));
    while (cuotas > prestamos[0].maxCuotas) {
        alert(`Recuerda que el máximo de cuotas para este préstamo es de ${prestamos[0].maxCuotas}.`);
        cuotas = Number(prompt(`Ingresa un número de cuotas válido`));
    }
    const totalAdevolver = dineroPrestar + (dineroPrestar * (prestamos[0].tasaInteres)/100);
    alert(
        ` ¡Perfecto, ${nombre}! 
        -Vamos a prestarte $${dineroPrestar} 
         -La tasa de interés es del: ${prestamos[0].tasaInteres}% 
         -Vas a devolvernos $${totalAdevolver} en ${cuotas} cuotas de $${totalAdevolver/cuotas}`);
}



function prestamoPersonal () {
    let dineroPrestar  = Number(prompt(`Ok, ¿cuánto dinero necesitás?`));
    while (dineroPrestar > salario) {
        alert(`No podés pedir más de lo que cobrás, campeón`);
        salario = prompt("Ahora en serio, ¿cuánto cobrás?");
        dineroPrestar = Number(prompt(`¿Y cuánto querés que te prestemos?`));
    }
    let cuotas = Number(prompt(`En cuántas cuotas vas a devolver el dinero? El máximo es de ${prestamos[1].maxCuotas}`));
    while (cuotas > prestamos[1].maxCuotas) {
        alert(`Recuerda que el máximo de cuotas para este préstamo es de ${prestamos[1].maxCuotas}.`);
        cuotas = Number(prompt(`Ingresa un número de cuotas válido`));
    }
    const totalAdevolver = dineroPrestar + (dineroPrestar * (prestamos[1].tasaInteres)/100);
    alert(
        `¡Perfecto, ${nombre}! 
        -Vamos a prestarte $${dineroPrestar} 
        -La tasa de interés es del: ${prestamos[1].tasaInteres}% 
        -Vas a devolvernos $${totalAdevolver} en ${cuotas} cuotas de $${totalAdevolver/cuotas}`);
}

function operacion (op){
    switch (op) {
        case "1": {
            prestamoHipotecario ();
            break;

        }
        case "2": {
            prestamoPersonal();
            break;
        }
        default: 
        console.log("error")
    }
}

function llamarAction (){
    const op = prompt(`Ahora sí, vamos a lo importante, ${nombre}. ¿Qué tipo de préstamo te interesa? Elige una opción:

    1- Hipotecario (interés del 50%, máximo de 24 cuotas ajustadas por inflación proyectada)
    2- Personal (interés del 20%, máximo de 12 cuotas fijas)`);

    operacion(op);

}

llamarAction()








