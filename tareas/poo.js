let num2 = 40;

let obj = {
    saludo: "Hola ",
    bool: true,
    num: 20,
    array: ["manzana", "naranja"],
    obj2: {
        string2: "adios",
    },

    method: function () {
        console.log("soy un objeto");
    },

    method2: function () {
        console.log(this.num);
    },
};

console.log(obj.array);

function Persona(nombre, edad, ciudad) {
    //constructor
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.nacionalidad = "Ecuatoriano/a";
}

Persona.prototype.saludar = function () {
    console.log(`hola, soy ${this.nombre}`);
};

//herencia

function Estudiante(nombre, edad, ciudad, curso) {
    // herencia prototipica
    this.super = Persona;
    this.super(nombre, edad, ciudad);
    this.curso = curso;
}

Estudiante.prototype.estudiar = function () {
    console.log("Estoy estudiando");
};

Estudiante.prototype = new Persona();
Estudiante.prototype.constructor = Estudiante;

const isma = new Persona("Ismael", 18, "Quito");

const kevin = new Estudiante("Kevin", 21, "Quito", "4to A");

console.log(isma);
console.log(kevin);

kevin.saludar();

class Vehiculo {
    constructor(tipo, capacidad, modelo, color) {
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.modelo = modelo;
        this.color = color;
    }

    encender() {
        console.log("encendido");
    }
    apagar() {
        console.log("apagado");
    }
}

class Carro extends Vehiculo {
    constructor(tipo, capacidad, modelo, numeroPuertas, numeroChasis, motor) {
        super(tipo, capacidad, modelo);
        this.numeroPuertas = numeroPuertas;
        this.numeroChasis = numeroChasis;
        this.motor = motor;
    }
}

class Moto extends Vehiculo {
    constructor(tipo, capacidad, modelo, color, marchas) {
        super(tipo, capacidad, modelo, color);
        this.marchas = marchas;
        this.marca = null;
    }

    get getMarca() {
        return this.marca;
    }

    set setMarca(marca) {
        this.marca = marca;
    }
}

const carroRobert = new Carro("Terrestre", 4, "Indurama", 4, "46572", "si");

const motoDarlin = new Moto("Terrestre", 2, "Indurama", 4, "46572", "si");
carroRobert.numeroPuertas = 2;

console.log(carroRobert);

motoDarlin.setMarca = "Yahama";

console.log(motoDarlin.getMarca);
