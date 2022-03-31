// obtener el template del documento html
const div = document.getElementById("template"),
    figureTemplate = document.getElementById("figure-template").content,
    fragment = document.createDocumentFragment(),
    data = [
        {
            titulo: "Imagen random 1",
            url: "https://picsum.photos/200",
        },
        {
            titulo: "Imagen random 2",
            url: "https://picsum.photos/200",
        },
        {
            titulo: "Imagen random 3",
            url: "https://picsum.photos/200",
        },
        {
            titulo: "Imagen random 4",
            url: "https://picsum.photos/200",
        },
        {
            titulo: "Imagen random 5",
            url: "https://picsum.photos/200",
        },
    ];

// llenando el tamplate
data.forEach((el) => {
    figureTemplate.querySelector("img").src = el.url;
    figureTemplate.querySelector("figcaption").textContent = el.titulo;
    //hacerlo dinamico clonando el nodo de template

    let cloneTemplate = document.importNode(figureTemplate, true);
    fragment.appendChild(cloneTemplate);
});

div.appendChild(fragment);
