const divs = document.querySelectorAll("#divs div"),
  link = document.getElementById("link");

function place (e){
  console.log(`Hola desde ${this.className}, target ${e.target.className}`)
  // Este metodo deteiene o previene la propagacion de los eventos
  e.stopPropagation();
}

link.addEventListener("click", (e)=> {
  e.preventDefault();

  alert("Para flaco, no te vayas");

})


divs.forEach((el) => {
  el.addEventListener("click", place);
})
