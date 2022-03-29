let parrafo = document.getElementById("parrafo-1");

parrafo.style.textAlign = "center";
parrafo.style.fontSize = "30px";
parrafo.style.color = "red";

console.log(parrafo.style);
// computed styles
// estilos por defecto
let body = document.body;
let html = document.documentElement;

let bgColor = getComputedStyle(html).getPropertyValue("--var-bg-color");
let fontColor = getComputedStyle(html).getPropertyValue("--var-font-color");
console.log(bgColor);
console.log(fontColor);

body.style.background = bgColor;
body.style.color = fontColor;
