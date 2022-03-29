//por la notacion de puntos
console.log(document.documentElement.lang);
// con el metodo getAttibute
console.log(document.documentElement.getAttribute("lang"));
// settear el valor del atributo
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
// settear atributos mediante el metodo setAttribute
document.documentElement.setAttribute("lang", "Latam");
console.log(document.documentElement.lang);

//extrayendo un elemento "a" del html
const linkExample = document.getElementById("link-example");

linkExample.setAttribute("target", "_blank");

linkExample.setAttribute("rel", "noopener");

linkExample.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

// data attributes

linkExample.setAttribute("data-description", "Descripcion del link");
linkExample.setAttribute("data-nombre", "mejor video del mundo.");
linkExample.dataset.id = "20";
console.log(linkExample.getAttribute("data-description"));

console.log(linkExample.dataset);
