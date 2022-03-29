let marcas = [
    "Nissan",
    ["Toyota", ["Ferrary"], ["Chevrolet", "Mazda"]],
    [
        ["Bugatti", "BMW"],
        ["Mercedes-Benz", "Audi"],
    ],
    [
        ["Lexus", "Renault"],
        ["Ford", "Opel"],
    ],
];
console.log(marcas);

console.log(Array.isArray(marcas));

for (var i = 0; i < marcas.length; i++) {
    if (Array.isArray(marcas[i])) {
        for (var j = 0; j < marcas[i].length; j++) {
            if (Array.isArray(marcas[i][j])) {
                for (var k = 0; k < marcas[i][j].length; k++) {
                    console.log(marcas[i][j][k]);
                }
            } else {
                console.log(marcas[i][j]);
            }
        }
    } else {
        console.log(marcas[i]);
    }
}
