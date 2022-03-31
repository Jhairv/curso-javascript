const divContainer = document.getElementById("container-templates"),
    fragment = document.createDocumentFragment(),
    template = document.getElementById("template").content,
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

// console.log(template);

data.forEach((el) => {
    template.querySelector("img").src = el.url;
    template.querySelector("img").alt = el.titulo;
    template.querySelector("figcaption").textContent = el.titulo;

    let clon = document.importNode(template, true);
    fragment.appendChild(clon);
});

divContainer.appendChild(fragment);
