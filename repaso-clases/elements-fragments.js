const div = document.getElementById("container-elements");

//creacion de elementos html

const p = document.createElement("p"),
    img = document.createElement("img"),
    text = document.createTextNode("Hola, esto es un nodo de texto"),
    url = "http://placekitten.com/200/300";

// metodo appendchild lo agrega al final del elemento como su hijo
// agregagos el nodo de texto al elemento p
p.appendChild(text);
// seteamos los atributos de la imagen uwu
img.src = url;
img.alt = "gatito uwu";
// agregamos el elemento p al div
div.appendChild(p);
// agregamos la imagen al div
div.appendChild(img);

// llenando una lista de forma dinamica

const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];

const ol = document.createElement("ol");

estaciones.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;

    ol.appendChild(li);
});

div.appendChild(ol);

// llenando una tabla de forma dinamica

const encabezado = ["Nombre", "Apellido", "Direccion"],
    mascotas = [
        {
            nombre: "Kira",
            apellido: "Vasquez",
            direccion: "Chillogallo",
        },
        {
            nombre: "Miguel",
            apellido: "Vasquez",
            direccion: "Chillogallo",
        },
        {
            nombre: "Tita",
            apellido: "Vasquez",
            direccion: "Chillogallo",
        },
    ];

//Creacion de elementos

const table = document.createElement("table"),
    tr = document.createElement("tr");

encabezado.forEach((el) => {
    let th = document.createElement("th");
    th.textContent = el;

    tr.appendChild(th);
});
table.appendChild(tr);

mascotas.forEach((el) => {
    const fila = document.createElement("tr");
    let nombre = document.createElement("td");
    let apellido = document.createElement("td");
    let direccion = document.createElement("td");

    nombre.textContent = el.nombre;
    apellido.textContent = el.apellido;
    direccion.textContent = el.direccion;

    fila.appendChild(nombre);
    fila.appendChild(apellido);
    fila.appendChild(direccion);
    table.appendChild(fila);
});

div.appendChild(table);

const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

const ulMeses = document.createElement("ul");

meses.forEach((el) => {
    ulMeses.innerHTML += `<li> ${el} </li>`;
});

div.appendChild(ulMeses);

// Fragmentos
//Los fragmentos son como "variables" que contiene elementos html dentro

const frutas = ["manzana", "platano", "mango", "aguacate", "pitahaya"];

const olFrutas = document.createElement("ol"),
    olFragment = document.createDocumentFragment();

frutas.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;

    olFragment.appendChild(li);
});

olFrutas.append(olFragment);

div.appendChild(olFrutas);
