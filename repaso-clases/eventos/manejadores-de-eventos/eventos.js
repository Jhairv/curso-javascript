//eventos desde atributo HTML
//eventos semanticos
//manejadores de eventos 
let tile = document.createElement("h1");
const btnEvent = document.getElementById("evento-semantico");
const btnManejador = document.getElementById("evento-manejado");

tile.textContent = "Este es un titulo desde javascript y live server";

const eventoSemantico = (e) => {
  alert("Hola, esto es un evento semantico");
}

const eventoReemplazo = (e) => {

  alert("El evento ha sido reemplazado");

}

btnEvent.onclick = eventoSemantico;

btnEvent.onclick = eventoReemplazo;

// el evento no puede recibir otro parametro que no sea el mismo EVENTO

btnEvent.onclick = function (nombre) {
  alert(`Hola, ${nombre} Este es un evento en fucion anonima`);
  console.log(nombre);
}

// Manejador de eventos
// eventos multiples

const evento1 = (e) => {
  alert('este es la primera funcion mandada por el evento')
}

const evento2 = (e) => {
  console.log('este es la segunda funcion mandada por el evento')
  console.log(e);
  console.log(this);
}

const evento3 = (e) => {
  let p = document.createElement('p');

  p.textContent = "Esta es la tercera instruccion mandada por el evento";

  document.body.appendChild(p);
}

// Pasar multiples funciones

/*btnManejador.addEventListener("click", (e) => {
  evento1();
  evento2();
  evento3();
})*/

// pasar una sola funcion

btnManejador.addEventListener("click", evento2)

// remover eventos

const removeBtn = document.getElementById("remove-event");

removeBtn.addEventListener("dblclick", (e) => {
  btnManejador.removeEventListener("click", evento2);
  console.log("el evento se ha removido");
})



