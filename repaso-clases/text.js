// formas de insertar texto o codigo html desde javascript

const parrafo = document.getElementById("text");

const text = ` <p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p> `;

parrafo.textContent = text;
parrafo.innerHTML = text;
parrafo.outerHTML = text;
parrafo.outerText = text;

console.dir(parrafo);
