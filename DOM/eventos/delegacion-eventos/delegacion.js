const ejemplo = document.getElementById("ejemplo"),
  body = document.body;

// ejemplo.addEventListener("click", (e)=>{
//   console.log(e.target); 
// })

body.addEventListener("click", (e)=>{

  if (e.target === ejemplo){
    console.log('Estas dando click en el boton'); 
  }

  if (e.target.matches("p")){
    console.log(`Haz dado click al parrafo ${e.target.textContent}`)
  }


  // console.log(e.target); 
})

const btn1 = document.getElementById('btn-1'),
  btn2 = document.getElementById('btn-2'); 

const funcion1 = (e) => {
  console.log('Este es el evento a remover')
}

btn1.addEventListener("click", funcion1)

btn2.addEventListener("click", (e) => {
  console.log('El evento se ha removido')
  btn1.removeEventListener("click", funcion1)
}, {once:true})

