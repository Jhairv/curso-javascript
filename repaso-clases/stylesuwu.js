const pExample = document.getElementById("styles-example");

//accediendo a las propiedades css del metodo style

// pExample.style.color = "#000";
// pExample.style.textAlign = "center";

// console.log(pExample.style);

//ComputedStyles
// Imprimir los estilos computados de un elemento html
// console.log(getComputedStyle(pExample));

// Consiguiendo una variable CSS

let body = document.body;
let html = document.documentElement;

console.log(getComputedStyle(document.documentElement));

console.log(
    getComputedStyle(document.documentElement).getPropertyValue(
        "--var-bg-color"
    )
);

//guardando una variable CSS

let varBgColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--var-bg-color"
);

let fontColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--var-font-color"
);

//asignandolas al DOM

body.style.setProperty("background-color", varBgColor);
body.style.setProperty("color", fontColor);

html.style.setProperty("--var-bg-color", "#000");

varBgColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--var-bg-color"
);

body.style.setProperty("background-color", varBgColor);
