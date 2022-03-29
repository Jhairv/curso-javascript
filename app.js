// let nombre = "Alberto";

// var apellido1 = "Gutierrez";

// const edad = 25;

// saludar();
// despedirse();
// console.log(cuadrado(5));

// function saludar() {
//     console.log(`Hola, ${nombre} ${apellido1}`);
// }

// function despedirse() {
//     let apellido2 = "Armas";
//     console.log(`Adios, ${nombre} ${apellido2}`);
//     // console.log(apellido2);
// }

// function cuadrado(num) {
//     return num * num;
// }

// const resta = (num, num2) => console.log(num - num2);

// const suma = (a, b) => console.log(a + b);

// resta(10, 5);

// suma("5", 7);

// console.log(typeof 5);

let frutas = [
    ["manzana", ["platano", "pera"]],
    ["melon", "naranja", "fresa"],
    ["mandarina", "uvas"],
];

console.log(frutas[0][1][1]);

let pares = [2, 4, 6, 8, 10];
let boleanos = [true, false, false, true, false];

//console.log(frutas);

// deber hacer un arreglo de 3 posiciones
// for (let i = 0; i < frutas.length; i++) {
//     for (let j = 0; j < frutas[i].length; j++) {
//         console.log(frutas[i][j]);
//     }
// }

boleanos.push(true);

console.log(boleanos);

boleanos.pop();

console.log(boleanos);

pares.forEach((el) => {
    console.log(el * el);
});

let cuadrados = pares.map((el) => {
    return el - 1;
});

console.log(cuadrados);

let arrayString = `Numeros pares: ${pares.join(".")}`;

console.log(arrayString);

console.log(pares.reverse());

let saludo = "Hola mundo hola a todos";

let saludoArray = saludo.split("");

console.log(saludoArray);

let newArray = saludoArray.filter((el) => {
    return el != " ";
});

console.log(newArray);

newArray.reverse();

console.log(newArray);

let reverseString = newArray.join("");

console.log(reverseString);
