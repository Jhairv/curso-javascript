// agregar otro elemento antes del div

const div2 = document.createElement("div"),
    h2 = document.createElement("h2"),
    pa2 = document.createElement("p");

h2.textContent = "Titulo previo";
pa2.textContent = "este es un parrafo insertado antes";

div2.appendChild(h2);
div2.appendChild(pa2);

div.insertAdjacentElement("beforebegin", div2);
