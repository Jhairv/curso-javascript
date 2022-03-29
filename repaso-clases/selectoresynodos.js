// por su etiqueta
let links = document.getElementsByTagName("a");
// por su clase CSS
let titles = document.getElementsByClassName("title");
// por su atributo nombre
let inputs = document.getElementsByName("texto");
// por su id: singular
let title4 = document.getElementById("title4");
// por su id, clase, etiqueta etc. funciona como los selectores CSS
let menu = document.querySelector("#list");
let item3 = document.querySelector("#list .item3");
let itemsList = document.querySelectorAll("#list li");
let item2 = document.querySelectorAll("#list li")[1];

console.log(links);
console.log(titles);
console.log(inputs);
console.log(title4);
console.log(menu);
console.log(item3);
console.log(itemsList);
console.log(item2);
