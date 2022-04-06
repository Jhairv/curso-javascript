const pInnerWidth = document.createElement("p"),
  pInnerHeight = document.createElement("p"),
  pOuterWidth = document.createElement("p"),
  pOuterHeight = document.createElement("p"),
  pPositionx = document.createElement("p"),
  pPositiony = document.createElement("p"),
  title = document.createElement("h1"),
  divProps = document.getElementById("props")

window.addEventListener("resize", (e) => {
  pInnerWidth.innerText = `innerWidth de la ventana: ${window.innerWidth}`;
  pInnerHeight.innerText = `innerHeight de la ventana: ${window.innerHeight}`;
  pOuterHeight.innerText = `outerHeight de la ventana: ${window.outerHeight}`;
  pOuterWidth.innerText = `outerWidth de la ventana: ${window.outerWidth}`;
})
// devuelve el valor de la posicion de x y y en la pantalla
// se ejecuta cuando el documento entero ha sido cargado
window.addEventListener("load", (e) => {
  console.log(`*********** Evento load ***********`);
  console.log(`la posicion en y es: ${window.screenY}`);
  console.log(`la posicion en y es: ${window.screenX}`);
})

// se ejecuta cuando eldocumento html ha sido cargado, no espera imagenes ni hojas de estilo

document.addEventListener("DOMContentLoaded", (e)=>{
  console.log(`*********** Evento DOMContentLoaded ***********`);
  console.log(`la posicion en y es: ${window.screenY}`);
  console.log(`la posicion en y es: ${window.screenX}`);

})



divProps.appendChild(pInnerWidth);
divProps.appendChild(pInnerHeight);
divProps.appendChild(pOuterWidth);
divProps.appendChild(pOuterHeight);
// document.body.appendChild(title);
// document.body.appendChild(pPositiony);
// document.body.appendChild(pPositionx);

// metodos del objeto window

const btnOpen = document.getElementById("open"),
  btnClose = document.getElementById("close"),
  btnPrint = document.getElementById("print");

let newWindow;

btnOpen.addEventListener("click", (e) => {
  newWindow = window.open("www.google.com");
})

btnClose.addEventListener("click", (e) => {
  newWindow.close(newWindow);
})

btnPrint.addEventListener("click", (e) => {
  window.print();
})
