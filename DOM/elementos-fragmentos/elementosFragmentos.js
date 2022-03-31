// Creando elementos HTML

const body = document.body;

const div = document.getElementById("container");

console.log(body);
console.log(div);

const h1 = document.createElement("h1"),
    p = document.createElement("p"),
    img = document.createElement("img");
h1.textContent = "Esto es titulo insertado desde JS";
p.textContent = "El metodo appendchild inserta el elemento al final ";
img.src = "http://placekitten.com/200/300";
img.alt = "Gatito";
// meter clases css a elementos mediante JS
h1.classList.add("title");
p.classList.add("parrafo");
// remover clase
// h1.classList.remove("title");
// chekear si el elemento contiene una clase
console.log(h1.classList.contains("title"));

// agregando elementos al body

div.appendChild(h1);
div.appendChild(p);
div.appendChild(img);

const estaciones = ["Invierno", "Verano", "Otoño", "Primavera"],
    divList = document.getElementById("container-list"),
    h1List = document.createElement("h1"),
    ulList = document.createElement("ul");

estaciones.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el;

    ulList.appendChild(li);
});

h1List.textContent = "Estaciones del Año";

divList.appendChild(h1List);
divList.appendChild(ulList);

// fragmentos

const divTable = document.getElementById("container-table"),
    fragment = document.createDocumentFragment(),
    table = document.createElement("table"),
    filaEncabezado = document.createElement("tr"),
    encabezado = ["nombre", "apellido", "direccion"],
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

encabezado.forEach((el) => {
    let th = document.createElement("th");

    th.textContent = el;

    filaEncabezado.appendChild(th);
});

table.appendChild(filaEncabezado);

mascotas.forEach((el) => {
    let filaDato = document.createElement("tr"),
        tdNombre = document.createElement("td"),
        tdApellido = document.createElement("td"),
        tdDireccion = document.createElement("td");

    tdNombre.textContent = el.nombre;
    tdApellido.textContent = el.apellido;
    tdDireccion.textContent = el.direccion;

    filaDato.appendChild(tdNombre);
    filaDato.appendChild(tdApellido);
    filaDato.appendChild(tdDireccion);

    table.appendChild(filaDato);
});

fragment.appendChild(table);

divTable.appendChild(fragment);
