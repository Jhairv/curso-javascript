// agregar propiedad al contexto global (window)
this.nombre = "contexto global";
console.log(this);
console.log(nombre);
//creando un nuevo contexto en el objeto
const obj = {
    nombre: "jhair",
    apellido: "vasquez",

    saludar() {
        console.log(`hola ${this.nombre}`);
    },
};
// agregar metodo al objeto
obj.edad = 20;

obj.imprimirEdad = function () {
    console.log(`mi edad es ${this.edad}`);
};
console.log(obj["apellido"]);
obj.saludar();
obj.imprimirEdad();

// crear un nuevo contexto de una funcion

function Person(nombre) {
    this.nombre = nombre;
    this.that = this;

    this.obj = {
        mostrarThis: function () {
            console.log(that.nombre);
        },
    };

    this.saludar = function () {
        console.log(`hola mi nombre es ${this.nombre}`);
    };
}

const Darlin = new Person("Darlin");

Darlin.saludar();

function showThis() {
    console.log(this);
}

showThis();
Darlin.obj.mostrarThis();
