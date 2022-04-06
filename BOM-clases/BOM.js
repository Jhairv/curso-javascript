const pInnerWidth = document.createElement("p"),
  pInnerHeight = document.createElement("p"),
  pOuterHeight = document.createElement("p"),
  pOuterWidth = document.createElement("p");
console.log(window);

window.addEventListener("resize", (e) => {

  pInnerWidth.textContent = `El innerWidth es: ${window.innerWidth}`;
  pInnerHeight.textContent = `El pInnerHeight es: ${window.innerHeight}`;
  pOuterWidth.textContent = `El outerWidth es: ${window.outerWidth}`;
  pOuterHeight.textContent = `El outerHeight es: ${window.outerHeight}`;
})

document.body.appendChild(pInnerWidth);
document.body.appendChild(pInnerHeight);
document.body.appendChild(pOuterHeight);
document.body.appendChild(pOuterWidth);

const pScreenHeight = document.createElement("p"),
  pScreenWidth = document.createElement("p");

pScreenHeight.textContent = screen.height; 
pScreenWidth.textContent = screen.width;

// document.body.appendChild(pScreenHeight);
// document.body.appendChild(pScreenWidth);

// objeto location

const divLocation = document.getElementById("location-content"),
  assignBtn = document.getElementById("assign-btn");

const pHref = document.createElement('p'),
  pProtocol = document.createElement('p'),
  pHostname = document.createElement('p'),
  pPathname = document.createElement('p');

assignBtn.addEventListener("click", (e) => {
  window.location.assign("www.google.com");

})

pHref.textContent = `La url es: ${window.location.href}`;
pProtocol.textContent = `El protocolo es: ${window.location.protocol}`;
pHostname.textContent = `El Hostname es: ${window.location.hostname}`;
pPathname.textContent = `El Pathname es: ${window.location.pathname}`;

divLocation.appendChild(pHref);
divLocation.appendChild(pProtocol);
divLocation.appendChild(pHostname);
divLocation.appendChild(pPathname);

// Objeto History

const divHistory = document.getElementById("history-content"),
  btnBack = document.getElementById("back"),
  btnForward = document.getElementById("forward"),
  btnGo = document.getElementById("go");

const pLength = document.createElement("p");

btnBack.addEventListener("click", (e) => {
  window.history.back();
})

btnForward.addEventListener("click", (e) => {
  window.history.forward();
})

btnGo.addEventListener("click", (e) => {
  window.history.go(1);

})

console.log(window.history);
console.log(window.navigator);







