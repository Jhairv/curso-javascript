function Animal(nombre, genero, edad, especie) {
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
    this.especie = especie;
}

Animal.prototype.saludar = function () {
    console.log(`hola mi nombre es ${this.nombre}`);
};

const ave = new Animal("arguments", "se", 10, "ave");
console.log(ave);

function Perro(nombre, genero, edad, especie, raza) {
    this.super = Animal;
    this.super(nombre, genero, edad, especie);
    this.raza = raza;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

const firulais = new Perro("Firulais", "Hembra", 2, "Canina", "Pastor Aleman");

console.log(firulais);

firulais.saludar();
firulais.saludar();

class Gato extends Animal {
    constructor(nombre, genero, edad, especie, maullido) {
        super(nombre, genero, edad, especie);
        this.maullido = maullido;
    }
}

const kira = new Gato("Kira", "Azul Ruso", "Hembra", 3);

kira.saludar();

class Figura {
    constructor(nombre, lados, angulos) {
        this.nombre = nombre;
        this.lados = lados;
        this.angulos = angulos;
    }

    perimetro() {}
    area() {}
}

class Triangulo extends Figura {
    constructor(nombre, lados, medidas, angulos, tipo) {
        super(nombre, lados, angulos);
        this.nombre = nombre;
        this.lados = lados;
        this.angulos = angulos;
        this.tipo = tipo;
    }

    area() {}
}

const tEquilatero = new Triangulo(
    "Triangulo",
    3,
    [20, 20, 20],
    [60, 60, 60],
    "Equilatero"
);

console.log(tEquilatero);

tEquilatero.area();

const nombre = "yolito";

console.log(nombre);

class Persona {
    constructor(nombre, apellido, cedula, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, cedula, edad, aula, curso) {
        super(nombre, apellido, cedula, edad);
        this.aula = aula;
        this.curso = curso;
    }

    estudiar() {
        console.log(`estoy estudiando en el aula ${this.aula}`);
    }
}

const emilia = new Estudiante(
    "Emilia",
    "Vasquez",
    "1239129329",
    13,
    "B",
    "9no"
);

const micaela = new Estudiante(
    "Micaela",
    "Vasquez",
    "123124124",
    13,
    "C",
    "9no"
);

emilia.estudiar();
