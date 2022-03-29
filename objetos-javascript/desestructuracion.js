let amigos = ["Pepe", "Luis", "Jose", "Arturo"];
let [amigo1, amigo2, amigo3, amigo4, amigo6] = amigos;

// console.log(amigo1);
// console.log(amigo2);
// console.log(amigo3);
// console.log(amigo4);
// console.log(amigo6);

// let amigo5 = amigos[1];

// console.log(amigo5);

//spread operator

let familiares = ["Mama", "Papa", "Hermano", "Primo"];

let masAmigos = ["John", ...amigos];

// console.log(masAmigos);

let frutas = ["manzana", "platano"];

let amigosYFamiliares = [...frutas, ...amigos, ...familiares];

// console.log(amigosYFamiliares);

let saludo = "Hola como estas";

const obj = {
    nombre: "Martin",
    apellido: "Armas",
    gustos: ["Salsa", "Merengue", "Trap", "Reggaeton"],
    saludo,
};

const { nombre, apellido } = obj;

console.log(nombre);
console.log(apellido);
console.log(saludo);
console.log(obj);
// const nombre = obj.nombre;

// console.log(primerNombre);
// console.log(nombre);

// const promesa = (a, b) =>
//     new Promise((resolve, reject) => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             reject("Alguno de los valores no son numeros");
//         }

//         setTimeout(() => {
//             resolve({
//                 values: [a, b],
//                 result: a + b,
//             });
//         }, 3000);
//     });

// promesa(4, 6)
//     .then((obj) => {
//         console.log(
//             `los valores son: ${obj.values} y el rsultado es: ${obj.result}`
//         );

//         return promesa(5, 10);
//     })
//     .then(({ values, result }) => {
//         console.log(`los valores son: ${values} y el rsultado es: ${result}`);
//     });
