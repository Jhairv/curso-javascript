console.dir(document);

console.log(document.links.length);

// tagname
let links = document.getElementsByTagName("a");
let titles2 = document.getElementsByTagName("h2");

// class css

let parrafos = document.getElementsByClassName("parrafo");

// name

// let nombreInput = document.getElementsByName("nombre");

// por su id

let btn = document.getElementById("btn-submit");
let nombreInput = document.getElementById("nombre-input");

// querySelector

let list1 = document.querySelector("#list-1 li");
let itemsList = document.querySelectorAll("#list-1 li");

console.log(links);
console.log(titles2);
console.log(parrafos);
console.log(btn);
console.log(list1);
console.log(list1);
console.log(itemsList);

itemsList.forEach((el) => {
    console.log(el);
});
