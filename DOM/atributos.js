console.dir(document.documentElement);
//por la notacion de puntos
// con el metodo getAttibute
console.log(document.documentElement.getAttribute("lenguaje"));

document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "portugues");
document.documentElement.setAttribute("charset", "UTF-8");
console.log(document.documentElement.lang);

//atributos etiquetas html

let link = document.getElementById("link-1");

link.href = "https://google.com";

link.setAttribute("target", "_blank");

console.log(link.attributes);

// data attributes
// data-

let table = document.getElementById("table");

table.setAttribute("data-columns", "3");
table.setAttribute("data-rows", "3");
table.dataset.td = "3";
table.dataset.columns = "5";
console.log(table);
console.log(table.dataset);
