const listaDias = document.getElementById("list-days"),
    dias = ["lunes", "Jueves", "miercoles", "jueves", "viernes"],
    meses = ["enero", "febrero", "marzo", "abril", "mayo", "Junio", "Julio"],
    li2 = document.createElement("li"),
    listMeses = document.getElementById("meses-list");

dias.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;

    listaDias.appendChild(li);
});

li2.textContent = "Martes";
li2.style.color = "red";

console.log(listaDias.children[1]);
// Como se hacia Antes
//reemplazar un elemento desde JS
listaDias.replaceChild(li2, listaDias.children[1]);
// eliminar un elemento desde js
listaDias.removeChild(listaDias.children[0]);
// insertar antes
listaDias.insertBefore(li2, listaDias.children[3]);

meses.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;

    listMeses.appendChild(li);
});

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const abril = listMeses.children[3];
const mayo = document.createElement("li");
const marzo = document.createElement("li");

marzo.textContent = "marzo";
mayo.textContent = "mayo";
// insertar como hermanos
abril.insertAdjacentElement("beforebegin", marzo);
abril.insertAdjacentElement("afterend", mayo);

// insertar como hijo

const enero = document.createElement("li");
const diciembre = document.createElement("li");
enero.textContent = "enero";
diciembre.textContent = "diciembre";

listMeses.insertAdjacentElement("afterbegin", enero);
listMeses.insertAdjacentElement("beforeend", diciembre);

const figure = document.getElementById("figure");

const html = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Hola uwu</figcaption>
`;

figure.insertAdjacentHTML("afterbegin", html);
figure.insertAdjacentText("afterend", html);
