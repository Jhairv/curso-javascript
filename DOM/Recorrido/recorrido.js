const list = document.getElementById("list");

//accediendo a sus hijos
// console.log(list.childNodes);

console.log(list.children[2]); // li(item3)
console.log(list.parentElement); // div
console.log(list.firstElementChild); // li (item1)
console.log(list.lastElementChild); // li (item5)
console.log(list.nextElementSibling); // p
console.log(list.previousElementSibling); // h2
console.log(list.previousSibling); // devuelve un nodo de tipo texto

const gpList = list.parentElement.parentElement;

console.log(gpList);
