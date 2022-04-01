const divs = document.querySelectorAll("div"),
  p = document.querySelector("p");



//flujo de eventos

divs.forEach((el) => {
  el.addEventListener("click",(e) => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    console.log(`hola, desde ${el.className}, target: ${e.target.className} `)
    el.style.backgroundColor = `rgb(${r},${g},${b})`

    // console.log(e);
    // opciones: captura= false (default) se ejecuta o no la fase de captura
    // once = false (default) se ejecuta una sola vez el evento 

    // parar propagacion

    e.stopPropagation();


  }, {
    capture: false,
    //once: true
  })
})

p.addEventListener("click", (e) => {
  console.log(e.target);
})

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Click en el enlace");
})
