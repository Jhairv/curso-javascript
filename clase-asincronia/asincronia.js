// Lifo= Last in First out
// Procesamiento Single thread (Hilo único)
// y Multi thread (Hilos múltples).
// Operaciones de CPU y Operaciones de I/O (Entrada y Salida).
// Operaciones Concurrentes y Paralelas.
// Operaciones Bloqueantes y No Bloqueantes.
// Operaciones Síncronas y Asíncronas.
// function saludar() {
//     console.log("Hola");
// }

// function sumar(a, b) {
//     console.log(a + b);
// }

// function restar(a, b) {
//     console.log(a - b);
// }

// function operaciones(fn) {
//     fn(7, 3 + 3);
// }
// function saludar() {
//     console.log("hola");
// }
// operaciones(sumar);
// operaciones(restar);
// operaciones(saludar);

// operaciones(saludar);
const getSegundos = (seg) => {
    return seg * 1000;
};

function cuadradoCallback(value, fn) {
    setTimeout(() => {
        fn(value, value * value);
    }, getSegundos(3));
}

cuadradoCallback(1, (value, result) => {
    console.log("Inicio callback");
    console.log(`el cuadrado de ${value} es ${result}`);
    cuadradoCallback(2, (value, result) => {
        console.log(`el cuadrado de ${value} es ${result}`);
        cuadradoCallback("a", (value, result) => {
            if (typeof value !== "number") {
                console.log(`${value} no es un valor`);
            }
            cuadradoCallback(4, (value, result) => {
                console.log(`el cuadrado de ${value} es ${result}`);
                cuadradoCallback(5, (value, result) => {
                    console.log(`el cuadrado de ${value} es ${result}`);
                    console.log("Fin callback");
                });
            });
        });
    });
});

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(10));

// n! = n * n - 1 si n != 0, 1 hasta que n = 1

// Recursividad
// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(4));
