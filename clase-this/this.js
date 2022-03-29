console.log(this);

this.lugar = "contexto global";

console.log(this.lugar);

// class Person {
//     constructor(nombre) {
//         this.nombre = nombre;
//     }

//     static mostrarThis() {
//         console.log(this);
//     }
// }

// Person.mostrarThis();

// persona.mostrarThis();

function saludar(saludo) {
    return `${saludo}, ${this.nombre}, desde ${this.lugar}`;
}

const obj = {
    nombre: "Pancho",
    apellido: "Bargas",
    lugar: "Contexto de objeto 1",
};

const obj2 = {
    nombre: "Luis",
    apellido: "Andrade",
    lugar: "Contexto de objeto2",
};

console.log(`hola desde ${this.lugar}`);

const saludarObj = saludar.call(obj, "Adios desde variable");

console.log(saludar());

console.log(saludarObj);
saludar.call(obj, "Hola");
saludar.call(obj2, ["Adios"]);
saludar.apply(obj2, ["Hola"]);

const obj3 = {
    nombre: "Jose",
    apellido: "Bargas",
    lugar: "Contexto de objeto 3",
    despedirse: function () {
        return `Adios desde ${this.lugar}. ${this.nombre}`;
    },
};

const obj4 = {
    nombre: "Miguel",
    apellido: "Bargas",
};

obj4.edad = 24;
obj4.despedirse = obj3.despedirse.bind(obj);
obj4.saludar = saludar.bind(obj2);

console.log(obj4.despedirse());
console.log(obj4.saludar("hola"));
