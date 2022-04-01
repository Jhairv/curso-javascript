// Flujo de los evenots uwu 
// Burbuja: va del elemento de adentro hacia afuera
// Captura: va del elemento de fuera hacia adentro

// capturar todos los divs

const divs = document.querySelectorAll(".eventos-flujo div");

//asignarles el evento

function eventoDivs (e){
  console.log(`Elemento: div ${this.className} target: ${e.target.className}`);
}

//tercer parametro: false = Fase de burbuja true: Fase de captura

divs.forEach((el)=> {
  //fase de burbuja
  // el.addEventListener("click", eventoDivs, false)
  //fase de captura
  //el.addEventListener("click", eventoDivs, true)
  // Mas opciones como tercer paramtro
  el.addEventListener("click", eventoDivs, {
    capture: true,
    // evento solo se ejecuta una sola vez
    once: true
 })
})

// propagacion
// Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.
const div = document.getElementById("bubble");

function eventoBubble (e){
  console.log(this);
  console.log(e.target)
}

div.addEventListener("click", eventoBubble);
