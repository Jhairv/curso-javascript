const btn = document.getElementById("atributte-btn");

console.dir(btn);

const alerta = () => {
  alert('esto es un mensaje de un evento como atributo');
}

//evento semantico

const btnS = document.getElementById("semantic-btn");

function eventoS (){
  alert('Esto es un evento semantico');
}

function eventoS2 (){
  console.log('Esto es un evento semantico');
}

btnS.onclick = eventoS;
btnS.onclick = eventoS2;

// manejadores de eventos

const btnHandler = document.getElementById("handler-btn");

const saludar = (nombre) => {

  alert(`Hola, ${nombre}`)
}

// btnHandler.addEventListener("click", (e) => {
//   // eventoS2();
//   // eventoS();
//   // alerta();

//   saludar("Kim");
//   console.log(e);
//   console.log("esto es un manejador de eventos");
// });

// Remover eventos

function removeEvent (){
  alert("Hola");

  btnHandler.removeEventListener("click", removeEvent)
}

btnHandler.addEventListener("click", removeEvent)



