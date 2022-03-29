let saludoElemnt = document.getElementById("saludo");
let cambiarBtn = document.getElementById("cambiar");

console.log(document);
console.dir(Audio);

cambiarBtn.addEventListener("click", (e) => {
    if (saludoElemnt.textContent === "Hola como estas?") {
        saludoElemnt.textContent = "Adios uwu";
    } else {
        saludoElemnt.textContent = "Hola como estas?";
    }
});

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
