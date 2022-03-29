// Crear una funcion que pasandole un fecha en formato
// YY-MM-DD devuelva cuantos dias faltan para ese fecha desde
// el dia de hoy y si la fecha ya pasó que devuelva cuantos dias
// han pasado.
// La funcion debe estar ligada al prototipo del objeto Date

// ejemplo
// Date.getDiasPasados("2022-02-15")
// output: Han pasado 7 dias desde hoy
// Date.getDiasPasados("2022-02-30")
// output: Faltan 8 dias desde hoy

function DiasPasados(date) {
    let date1 = new Date(date);
    let now = Date.now();

    let differenceDays = date1 - now;

    return Math.floor(differenceDays / (1000 * 60 * 60 * 24));
}

console.log(DiasPasados("2022-03-20"));
console.log(DiasPasados("2022-03-30"));

// Realizar una funcion donde pasado un numero x devuelva
// todos sus multiplos del 1 al 10.
// la funcion debe estar ligada al objeto Math
// Por ejemplo:

// Math.getMultiplos(40)
// output: [1, 2, 4, 5, 8, 10]

function multiplos(num) {
    const divisores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let results = [];

    divisores.forEach((el) => {
        if (num % el === 0) {
            results.push(el);
        }
    });

    return results;
}

console.log(multiplos(40));

// Realizar una funcion que tome como parametro una cadena de texto
// y compare si es palindromo ( se lee igual al derecho y al reves )
// pj:
// Palindromo(roma)
// output: false
// Palindromo (oso)
// output: true
