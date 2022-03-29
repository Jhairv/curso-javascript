this.lugar = "Contexto Global";

function saludar(nombre) {
    console.log(`hola, ${nombre} desde ${this.lugar}`);
}

saludar("Luis");

const obj = {
    lugar: "Contexto Objeto",
    nombre: "Kevin",
    apellido: "Motoche",
    saludar: function () {
        console.log(`hola ${this.nombre} desde ${this.lugar}`);
    },
};

saludar.call(obj, "Cami");
obj.saludar();

const otroObjeto = {
    saludar: obj.saludar,
};

otroObjeto.saludar.bind(obj);
