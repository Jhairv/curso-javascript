let num1 = "lsadfasdf";
let num2 = "7";

let suma = () => 10;

try {
    if (typeof suma !== "function") {
        throw { error: "no existe la funcion", typeof: "numero" };
    }
    console.log(suma());
} catch (err) {
    console.log(err.error);
} finally {
    console.log("fin bloque trycath");
}

// function funcion() {
//     return 5 + 6;
// }

// let a = "l";

// console.log(typeof funcion());
// console.log(typeof a);
