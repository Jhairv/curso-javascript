// recordatorio de funciones
// segundos

export const getSegundos = (seg) => {
    return seg * 1000;
};

//expresada

function sumar(a, b) {
    return a + b;
}

//anonima

const restar = function (a, b) {
    return a - b;
};

// funcion flecha

const multiplicar = (a, b) => {
    return a * b;
};

// console.log(sumar(5, 6));
// console.log(restar(5, 6));
// console.log(multiplicar(num1, num2));
// console.log(restar(5, 6));
// console.log(restar(5, 6));
// console.log(restar(5, 6));

// ejecuta despues de un tiempo

// setTimeout(() => {
//     console.log("Inicio tiempo fuera");
//     console.log(multiplicar(5, 3));
//     console.log("Fin tiempo fuera");
// }, getSegundos(3));

// // ejecuta en un intervalo de tiempo

// let interval = setInterval(() => {
//     const now = new Date();
//     console.log(now.toTimeString());
// }, getSegundos(1));

// let tiempoFuera = setTimeout(() => {
//     clearInterval(interval);
// }, getSegundos(10));

// clearTimeout(tiempoFuera);

// console.log("hola");
