const title = document.querySelector("#title"),
    parrafo = document.getElementById("parrafo");

// lo manda como texto plano
parrafo.textContent = `<p> Hola, este es parrafo llenado desde Javascript </p>`;
// se captura el codigo html y se coloca como hijo del elemento que estamos trabajando
parrafo.innerHTML = `<p> esto es texto pasado a la propiedad innerHTML </p>`;

// reemplaza el elemento con el codigo html que tenemos aqui
parrafo.outerHTML = `<p> esto es texto pasado a la propiedad outerHTML </p>`;
// reemplaza el elemento con texto plano
parrafo.outerText = "Esto es una propiedad outerText";

console.log(title);
