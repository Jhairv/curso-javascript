// recorrer el Dom desde un elemento como referencia

const ul = document.getElementById("ul");

//acceder a sus hijos
console.log(ul.children);
//acceder a un hijo en especifico
console.log(ul.children[2]);
//acceder a su elemento padre
console.log(ul.parentElement);
// primer hijo NODO
console.log(ul.firstChild);
// pimer hijo ELEMENTO
console.log(ul.firstElementChild);
//ultimo hijo NODO
console.log(ul.lastChild);
// ultimo hijo ELEMENTO
console.log(ul.lastElementChild);
// elemento anterior HERMANO
console.log(ul.previousElementSibling);
// elemento siguiente HERMANO
console.log(ul.nextElementSibling);
